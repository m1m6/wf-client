import React from 'react';
import Button from '../../../form/components/Button';
import { useCampaignsQuery } from '../useQueries';
import { Alert, Skeleton, Icon, message } from 'antd';
import { Link } from 'react-router-dom';

const Campaigns = ({ routerHistory }) => {
	const { loading, data, error } = useCampaignsQuery();

	if (error) {
		message.warning('Unable to fetch your campaigns.');
		return;
	}

	if (loading) {
		return <Skeleton loading={loading} active paragraph />;
	}

	console.log('data', data);

	const { campaigns } = data;
	return (
		<div className="campaigns-list">
			<div className="items-wrapper">
				{campaigns.map(campaign => {
					return (
						<Link to={`campaign-view/${campaign.id}`}>
							<div className="campaign-item">
								<div className="name">
									{campaign.name}
									<Icon
										type="delete"
										theme="twoTone"
										twoToneColor="#FF0000"
										style={{ fontSize: '16px' }}
										onClick={e => {
											e.stopPropagation();
											e.preventDefault();
											alert('hi');
										}}
									/>
								</div>
								<div className="description">{campaign.description}</div>
								<div className="influencers-count">4 Influencers</div>
								<div className="footer">
									<Icon
										type="right-square"
										// theme="twoTone"
										// twoToneColor="#eb2f96"
										style={{ fontSize: '18px', color: '#1c3a6a' }}
									/>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
			<div>
				<Button onClick={() => routerHistory.push('/campaigns/new')}>New Campaign</Button>
			</div>
		</div>
	);
};
export default Campaigns;
