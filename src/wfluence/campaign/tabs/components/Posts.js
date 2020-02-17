import React from 'react';
import { Skeleton } from 'antd';
import { Table } from 'antd';
import { getPostsTableColumns } from '../utils';

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

const Posts = ({ campaign }) => {
	return (
		<div className="posts-tab">
			<Table dataSource={dataSource} columns={getPostsTableColumns()} />
		</div>
	);
};

export default Posts;
