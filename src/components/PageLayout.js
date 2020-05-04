import React, { useState } from 'react';
import { Input, message } from 'antd';
import { useSearchTermMutation } from '../rootUseMutation';
import { brandAppearanceQuery } from '../rootGql';
import { useBrandAppearanceQuery } from '../rootUseQuery';

const { Search } = Input;

const PageLayout = ({ history, Component, title, ...rest }) => {
    let [searchTerm, setSearchTerm] = useState('');
    let [loading, setLoading] = useState(false);

    const [setSearchTermMutation] = useSearchTermMutation(searchTerm);
    return (
        <div className="page-layout">
            {/* <span><Icon type="left-circle" onClick={()=> history.goBack()}/></span> */}
            {/* <h1 className="page-title">{title}</h1> */}
            <div className="sub-header">
                <div className="search-form-wrapper">
                    <div className="title">Find Instagram Brand Influencers</div>

                    <Search
                        placeholder="Eg: Zara"
                        enterButton="Search"
                        size="large"
                        onSearch={async (value) => {
                            if (value) {
                                setSearchTerm(value);
                                await setSearchTermMutation({
                                    variables: { searchTerm: value },
                                    refetchQueries: [
                                        {
                                            query: brandAppearanceQuery,
                                            variables: { searchTerm: value, first: 10, skip: 0 },
                                        },
                                    ],
                                });
                            } else {
                                message.warn('Brand name is Required.');
                            }
                        }}
                        loading={loading}
                    />
                </div>
            </div>

            <Component routerHistory={history} {...rest} setLoading={setLoading} />
        </div>
    );
};

export default PageLayout;
