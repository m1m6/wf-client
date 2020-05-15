import React, { useState, useEffect } from 'react';
import { Table, Modal, Result, Input,  Tooltip, Icon, message } from 'antd';
import capitalize from 'lodash/capitalize';
import BounceLoader from 'react-spinners/BounceLoader';

import {
    useBrandAppearanceQuery,
    useErrorModalQuery,
    useSearchTermQueryClient,
} from '../../../rootUseQuery';
import { useErrorModalMutation, useVisitorSubscription } from '../../../rootUseMutation';
import { getInfluencersRows, getInfluencersTableColumns } from '../../campaign/tabs/utils';
import { FrownOutlined } from '@ant-design/icons';
import { validateEmail } from '../../../utils/emailUtils';
import { apolloClient } from '../../../apollo/apolloClient';
import { SET_ERROR_MODAL_STATUS } from '../../../rootGql';

const List = ({ searchTerm, setLoading, setError , globalLoading}) => {
    let [currentPage, setCurrentPage] = useState(1);
    let [first, setFirst] = useState(10);
    let [skip, setSkip] = useState(0);
    let [tableLoading, setTableLoading] = useState(false);
    const { data, loading, loadMore, error } = useBrandAppearanceQuery(searchTerm, first, skip);

    const onChange = async (page) => {
        setTableLoading(true);
        if (page > currentPage) {
            await loadMore(searchTerm, first, (page - 1) * 10);
        }
        setTableLoading(false);
        setCurrentPage(page);
    };

    useEffect(()=>{
        if (globalLoading){
            setCurrentPage(1);
        }
    })
    const showModal = () => {
        apolloClient
            .mutate({
                mutation: SET_ERROR_MODAL_STATUS,
                variables: {
                    status: true,
                },
            })
            .then(() => {})
            .catch((e) => console.log(e));

        return <></>;
    };

    if (loading) {
        setLoading(true);
        return (
            <BounceLoader
                css={`
                    display: block;
                    margin: 0 auto;
                    border-color: red;
                    background-color: whitesmoke;
                `}
                size={100}
                color={'#001529'}
                loading={true}
            />
        );
    }

    if (!data || error) {
        setLoading && setLoading(false);
        return showModal(); //<Result status="warning" title="There are some problems with your request." />;
    }

    let {
        brandAppearance: { brandAppearance, count },
    } = data;

    setLoading && setLoading(false);

    return (
        <div>
            <div className="search-title">
                The following influencers/creators mentioned {capitalize(searchTerm)} in their
                posts:
            </div>
            {brandAppearance.length === 0 ? (
                showModal()
            ) : (
                <Table
                    dataSource={getInfluencersRows(brandAppearance)}
                    columns={getInfluencersTableColumns()}
                    pagination={{ total: count, current: currentPage, onChange }}
                    loading={tableLoading}
                />
            )}
        </div>
    );
};

export const ErrorModal = ({ showModal = true }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [email, setEmail] = useState(undefined);

    const [visitonSubscription] = useVisitorSubscription();

    const { loading: sLoading, data: sData, error: sError } = useSearchTermQueryClient();
    let [setErrorModal] = useErrorModalMutation();
    const { data } = useErrorModalQuery();
    if (!data && showModal) return null;

    return showModal ? (
        <Modal
            visible={data.status}
            centered
            title="Oops..."
            onOk={async () => {
                if (validateEmail(email)) {
                    setIsSubmitting(true);
                    // send request
                    await visitonSubscription({
                        variables: { email, brand: sData.searchTerm },
                    });
                    setTimeout(async () => {
                        setIsSubmitting(false);

                        // setIsSubmitted(true);
                        await setErrorModal({
                            variables: {
                                status: false,
                            },
                        });

                        message.success(`Great!`);
                    }, 2000);
                } else {
                    message.warning('Please enter a valid email address.');
                }
            }}
            okButtonProps={{
                title: 'Subscribe',
            }}
            onCancel={async () =>
                await setErrorModal({
                    variables: {
                        status: false,
                    },
                })
            }
            destroyOnClose
            closable={false}
            maskClosable={false}
            width={'40vw'}
        >
            <div>
                <Result
                    icon={<FrownOutlined />}
                    title={`Sorry, we couldn't find any results matching brand: ${sData.searchTerm}`}
                    style={{
                        paddingBottom: '30px',
                    }}
                />
                <div
                    style={{
                        paddingLeft: '32px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    <div>However, we've just started collecting mentions about your brand</div>
                    <div>If you'd like to get the results as soon as we have it ready</div>
                    <div>Subscribe with your email, and we will notify you with the results</div>
                    <div style={{ marginTop: '10px' }}>
                        <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Email: </span>
                        <Input
                            type="email"
                            style={{ height: '42px', marginTop: '10px' }}
                            suffix={
                                <Tooltip title="Insert Your email, to get report about the brand influencers">
                                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                                </Tooltip>
                            }
                            disabled={isSubmitted || isSubmitting}
                            placeholder="Your email, EX: john@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            width={'60vw'}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    ) : (
        <div>
            <Result
                icon={<FrownOutlined />}
                title={`Sorry, we couldn't find any results matching brand: ${sData.searchTerm}`}
                style={{
                    paddingBottom: '30px',
                }}
            />
            <div
                style={{
                    paddingLeft: '32px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
            >
                <div>However, we've just started collecting mentions about your brand</div>
                <div>If you'd like to get the results as soon as we have it ready</div>
                <div>Subscribe with your email, and we will notify you with the results</div>
                <div style={{ marginTop: '10px' }}>
                    <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Email: </span>
                    <Input
                        type="email"
                        style={{ height: '42px', marginTop: '10px' }}
                        suffix={
                            <Tooltip title="Insert Your email, to get report about the brand influencers">
                                <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }
                        disabled={isSubmitted || isSubmitting}
                        placeholder="Your email, EX: john@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        width={'60vw'}
                    />
                </div>
            </div>
        </div>
    );
};

export default List;
