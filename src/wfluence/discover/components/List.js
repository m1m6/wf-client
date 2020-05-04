import React from 'react';
import { Table } from 'antd';
import capitalize from 'lodash/capitalize';
import BounceLoader from 'react-spinners/BounceLoader';

import { useBrandAppearanceQuery } from '../../../rootUseQuery';
import { getInfluencersRows, getInfluencersTableColumns } from '../../campaign/tabs/utils';

const List = ({ searchTerm, setLoading }) => {
    const { data, loading, loadMore, error } = useBrandAppearanceQuery(searchTerm, 10, 0);

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

    console.log("data", data)
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
            <Table
                dataSource={getInfluencersRows(brandAppearance)}
                columns={getInfluencersTableColumns()}
                pagination={{total: count}}
            />
        </div>
    );
};

export default List;
