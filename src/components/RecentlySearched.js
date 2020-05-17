import React, { Component } from 'react';
import { HeartTwoTone } from '@ant-design/icons';
import { Tag } from 'antd';
import { getColor } from '../wfluence/discover/utils';
import { Link, useRouteMatch } from 'react-router-dom';

let brandsList = [
    'mango',
    'realmadrid',
    'zara',
    'urbanoutfitters',
    'cocacola',
    'gucci',
    'ilmakiage',
    'adidas',
    'asos',
    'hm',
    'dolcegabbana',
    'fendi',
    'prada',
    'burberry',
    'hermes',
    'hypebeast',
    'cartier',
    'hublot',
    'nike',
    'fossil',
    'luvlou',
    'kohls',
    'puma',
    'lego',
    'diesel',
];

const RecentlySearched = ({ setSearchTerm }) => {
    return (
        <div
            style={{
                width: '60%',
                margin: '0 auto',
                marginTop: '30px',
            }}
        >
            <div style={{ fontFamily: 'AvenirMedium', fontSize: '18px', color: '#001529' }}>
                <HeartTwoTone twoToneColor="#eb2f96" />{' '}
                <h2 style={{ display: 'inline-block' }}>Recently Searched Brands:</h2>
            </div>
            <div className="searched-brands-list" style={{ marginTop: '5px' }}>
                {brandsList.map((brand) => {
                    return (
                        <a href={`/brands/${brand}-influencers`}>
                            <Tag
                                style={{ marginBottom: '5px' }}
                                color={getColor()}
                                onClick={(e) => setSearchTerm(brand)}
                                className="pointer"
                            >
                                @{brand}
                            </Tag>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default RecentlySearched;
