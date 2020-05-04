import React from 'react';
import List from '../wfluence/discover/components/List';
import { useSearchTermQueryClient } from '../rootUseQuery';
import { Result } from 'antd';

const Home = ({ setLoading }) => {
    const { loading: sLoading, data: sData, error: sError } = useSearchTermQueryClient();
    return (
        <div className="influencers-table">
            {sData && sData.searchTerm ? (
                <div className="home">
                    <List searchTerm={sData.searchTerm} setLoading={setLoading} />
                </div>
            ) : (
                <Result
                    status="404"
                    title="Find your brand competitors by only one click!"
                    subTitle="Results will appear here..."
                />
            )}
        </div>
    );
};

export default Home;
