import React, { useState, useEffect } from 'react';
import { Input, message } from 'antd';
import { useSearchTermMutation } from '../rootUseMutation';
import { ErrorModal } from '../wfluence/discover/components/List';
import RecentlySearched from './RecentlySearched';
import Footer from './Footer';

const { Search } = Input;

const PageLayout = ({ history, Component, title, match, ...rest }) => {
    let param = match && match.params && match.params.id ? match.params.id : null;
    let paramSearchTerm = '';

    if (param) {
        // try{
        paramSearchTerm = param.split('-')[0];
        // }catch(e){
        //     <Redirect to="/"
        // }
    }

    let [searchTerm, setSearchTerm] = useState(paramSearchTerm);
    let [loading, setLoading] = useState(false);

    const [setSearchTermMutation] = useSearchTermMutation(searchTerm);

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <div className="page-layout">
            {/* <span><Icon type="left-circle" onClick={()=> history.goBack()}/></span> */}
            {/* <h1 className="page-title">{title}</h1> */}
            <div className="sub-header">
                <div className="search-form-wrapper">
                    <div className="title">Find Instagram Brand Influencers</div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <ins
                            class="adsbygoogle"
                            style={{ display: 'inline-block', width: '900px', height: '120px' }}
                            data-ad-client="ca-pub-1474383581923344"
                            data-ad-slot="6538695563"
                        ></ins>
                        <br />
                        <br />
                        <br />
                    </div>

                    <Search
                        placeholder="Enter any brand instagram accoount. Eg: Zara"
                        enterButton="Search"
                        size="large"
                        inputMode="search"
                        // value={searchTerm}
                        // onChange={(e)=> setSearchTerm(e.target.value)}
                        onSearch={async (value) => {
                            if (value) {
                                setSearchTerm(value);
                                await setSearchTermMutation({
                                    variables: { searchTerm: value },
                                });
                            } else {
                                message.warn('Brand name is Required.');
                            }
                        }}
                        loading={loading}
                    />
                </div>
            </div>
            <RecentlySearched
                setSearchTerm={async (e) => {
                    setSearchTerm(e);
                    await setSearchTermMutation({
                        variables: { searchTerm: e },
                    });
                }}
            />

            <Component
                routerHistory={history}
                {...rest}
                setLoading={setLoading}
                searchTerm={searchTerm}
                globalLoading={loading}
            />
            <ErrorModal searchTerm={searchTerm} />

            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    'flex-direction': 'column',
                }}
            >
                <div style={{ textAlign: 'center', fontSize: '18px', padding: '20px', paddingLeft: '30px', paddingRight: '30px' }}>
                    In 2017, 92% of marketers who used influencer marketing found it to be
                    effective. Influencer marketing has grown steadily in popularity over the past
                    few years, and for good reason -- oftentimes, customers trust influencers over
                    celebrities when choosing which products to buy, or which brands to endorse. In
                    fact, marketers have seen such success from influencer marketing that almost 40%
                    of them plan to increase their influencer budget in 2018 and beyond.
                </div>
                <ins
                    class="adsbygoogle"
                    style={{
                        display: 'inline-block',
                        width: '400px',
                        height: '300px',
                        margin: '0 auto',
                    }}
                    data-ad-client="ca-pub-1474383581923344"
                    data-ad-slot="6538695563"
                ></ins>
            </div>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <ins
                    class="adsbygoogle"
                    style={{ display: 'inline-block', width: '900px', height: '120px' }}
                    data-ad-client="ca-pub-1474383581923344"
                    data-ad-slot="6538695563"
                ></ins>
            </div>
            <Footer />
        </div>
    );
};

export default PageLayout;
