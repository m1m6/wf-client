import React from 'react';
import { Skeleton } from 'antd';
import { Table } from 'antd';
import { getPostsTableColumns, getPostsRows } from '../utils';

const dataSource = [
	{
		key: '1',
		name: 'Mike',
		age: 32,
		address: '10 Downing Street'
	},
	{
		key: '2',
		name: 'John',
		age: 42,
		address: '10 Downing Street'
	}
];

const Posts = ({ campaign, response }) => {
	const { loading, data, error } = response;

	if (loading) {
		return <Skeleton active loading paragraph title />;
	}
	return (
		<div className="posts-tab">
			<Table
				dataSource={getPostsRows(data.campaignInfluencers)}
				columns={getPostsTableColumns()}
			/>
		</div>
	);
};

export default Posts;
