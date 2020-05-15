import React, { useState } from 'react';
import { Result } from 'antd';
import List from '../wfluence/discover/components/List';

const Home = ({ setLoading, searchTerm }) => {
    let [error, setError] = useState(null);
    return (
        <div>
            <div className="influencers-table">
                {searchTerm ? (
                    <div className="home">
                        <List searchTerm={searchTerm} setLoading={setLoading} setError={setError} />
                    </div>
                ) : (
                    <Result
                        status="404"
                        title="Find your brand competitors by only one click!"
                        subTitle="Results will appear here..."
                    />
                )}
            </div>
        </div>
    );
};

export default Home;
