import React, { useState } from 'react';
import { useCreatorCampaignsQuery } from '../useQueries';
import { Skeleton, Icon, message, Modal } from 'antd';
import { Link } from 'react-router-dom';

const CreatorCampaigns = ({ routerHistory }) => {
	const { loading, data, error } = useCreatorCampaignsQuery();

	if (error) {
		message.warning('Unable to fetch your campaigns.');
	}

	if (loading) {
		return <Skeleton loading={loading} active paragraph />;
	}

	console.log('data', data);

	const { creatorCampaigns } = data;
	return (
		<div className="campaigns-list">
			<div className="items-wrapper">
				{creatorCampaigns.map(({ id, status, campaign }, index) => {
					return (
						<Link to={`campaign-offer/${id}`}>
							<div className="campaign-item">
								<div className="name">{campaign.name}</div>
								<div className="description">{campaign.description}</div>
								<div className="status">{status}</div>
								<div className="footer">
									<Icon type="right-square" style={{ fontSize: '18px', color: '#1c3a6a' }} />
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
export default CreatorCampaigns;
