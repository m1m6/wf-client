import React from 'react';
import { Skeleton } from 'antd';
import { Table } from 'antd';
import {  getInfluencersTableColumns } from '../utils';

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

const Influencers = ({ campaign }) => {
	return (
		<div className="influencers-tab">
			<Table dataSource={dataSource} columns={getInfluencersTableColumns()} />
		</div>
	);
};

export default Influencers;
