import React, { useState } from 'react';
import { Input, message } from 'antd';
import { useSearchTermMutation } from '../rootUseMutation';
import { ErrorModal } from '../wfluence/discover/components/List';
import RecentlySearched from './RecentlySearched';
import Footer from './Footer';
import { Redirect } from 'react-router-dom';

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
    return (
        <div className="page-layout">
            {/* <span><Icon type="left-circle" onClick={()=> history.goBack()}/></span> */}
            {/* <h1 className="page-title">{title}</h1> */}
            <div className="sub-header">
                <div className="search-form-wrapper">
                    <div className="title">Find Instagram Brand Influencers</div>

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
            <ErrorModal searchTerm={searchTerm}/>

            <Footer />
        </div>
    );
};

export default PageLayout;
