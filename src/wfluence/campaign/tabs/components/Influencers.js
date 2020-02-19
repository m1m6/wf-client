import React from 'react';
import { Skeleton } from 'antd';
import { Table } from 'antd';
import { getInfluencersTableColumns, getInfluencersRows } from '../utils';

const Influencers = ({ campaign, response }) => {
	const { loading, data, error } = response;

	if (loading) {
		return <Skeleton active loading paragraph title />;
	}

	return (
		<div className="influencers-tab">
			<Table
				dataSource={getInfluencersRows(data.campaignInfluencers)}
				columns={getInfluencersTableColumns()}
			/>
		</div>
	);
};

export default Influencers;
