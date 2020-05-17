import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const WHeader = () => {
    return (
        <div className="w-header">
            <Layout.Header>
                <div className="logo">
                    <Link to="/"><span className="site-name">BrandInfluencers</span></Link>
                </div>
                {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu> */}
            </Layout.Header>
        </div>
    );
};

export default WHeader;
