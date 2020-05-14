import React, { Component } from 'react';
import { HeartTwoTone } from '@ant-design/icons';
import { Tag } from 'antd';
import { getColor } from '../wfluence/discover/utils';

export default class RecentlySearched extends Component {
    render() {
        let { setSearchTerm } = this.props;
        return (
            <div
                style={{
                    width: '60%',
                    margin: '0 auto',
                    marginTop: '30px',
                }}
            >
                <div style={{ fontFamily: 'AvenirMedium', fontSize: '24px', color: '#001529' }}>
                    <HeartTwoTone twoToneColor="#eb2f96" /> Recently Searched Brands:
                </div>
                <div className="searched-brands-list" style={{ marginTop: '5px' }}>
                    <Tag
                        style={{ marginBottom: '5px' }}
                        color={getColor()}
                        onClick={(e) => setSearchTerm('mango')}
                        className="pointer"
                    >
                        @mango
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('realmadrid')}
                        className="pointer"
                    >
                        @realmadrid
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('zara')}
                        className="pointer"
                    >
                        @zara
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('urbanoutfitters')}
                        className="pointer"
                    >
                        @urbanoutfitters
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('cocacola')}
                        className="pointer"
                    >
                        @cocacola
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('gucci')}
                        className="pointer"
                    >
                        @gucci
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('ilmakiage')}
                        className="pointer"
                    >
                        @ilmakiage
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('adidas')}
                        className="pointer"
                    >
                        @adidas
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('asos')}
                        className="pointer"
                    >
                        @asos
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('hm')}
                        className="pointer"
                    >
                        @hm
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('dolcegabbana')}
                        className="pointer"
                    >
                        @dolcegabbana
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('fendi')}
                        className="pointer"
                    >
                        @fendi
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('prada')}
                        className="pointer"
                    >
                        @prada
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('burberry')}
                        className="pointer"
                    >
                        @burberry
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('hermes')}
                        className="pointer"
                    >
                        @hermes
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('hypebeast')}
                        className="pointer"
                    >
                        @hypebeast
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('cartier')}
                        className="pointer"
                    >
                        @cartier
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('hublot')}
                        className="pointer"
                    >
                        @hublot
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('nike')}
                        className="pointer"
                    >
                        @nike
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('fossil')}
                        className="pointer"
                    >
                        @fossil
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('luvlou')}
                        className="pointer"
                    >
                        @luvlou
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('kohls')}
                        className="pointer"
                    >
                        @kohls
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('puma')}
                        className="pointer"
                    >
                        @puma
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('lego')}
                        className="pointer"
                    >
                        @lego
                    </Tag>
                    <Tag
                        color={getColor()}
                        onClick={(e) => setSearchTerm('diesel')}
                        className="pointer"
                    >
                        @diesel
                    </Tag>
                </div>
            </div>
        );
    }
}
