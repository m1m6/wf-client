import React, { useState, useEffect } from 'react';
import { isPast } from 'date-fns';
import Button from '../../../form/components/Button';
import { Icon, Tabs, Skeleton } from 'antd';
import Analytics from '../tabs/components/Analytics';
import InviteModal from '../invite/components/InviteModal';
import { useCampaignDetailsQuery, useCampaignInfluencersAndPostsDetailsQuery } from '../useQueries';
import { getCampaignInfluencers, findMediaMetrics, getCostPerEachEngagement } from '../utils';
import { nFormatter } from '../../../utils/numberUtils';
import Posts from '../tabs/components/Posts';
import Influencers from '../tabs/components/Influencers';

const { TabPane } = Tabs;

const CampaignTabs = ({ campaign }) => {
	const response = useCampaignInfluencersAndPostsDetailsQuery(campaign.id)
	console.log("response",response)
	return (
		<div className="campaign-tabs-container">
			<Tabs type="card" size="large" tabBarStyle={{ margin: '0px' }} animated={false}>
				<TabPane className="tab-item" tab="Analytics" key="1">
					<Analytics campaign={campaign} />
				</TabPane>
				<TabPane tab="Posts/Stories" key="2">
					<Posts campaign={campaign} response={response}/>
				</TabPane>
				<TabPane tab="Influencers" key="3">
					<Influencers campaign={campaign} response={response}/>
				</TabPane>
			</Tabs>
		</div>
	);
};

const CampaignView = ({ routerHistory, match }) => {
	const campaignId = match.params.id;
	const [inviteModalVisible, setInviteModalVisible] = useState(false);
	const [invitedInfluencers, setInvitedInfluencers] = useState([]);
	const { loading, data, error } = useCampaignDetailsQuery(campaignId);

	if (loading) {
		return <Skeleton loading active paragraph title />;
	}
	const { campaign } = data;

	console.log('campaign', campaign);
	const { influencers, totalBudget, totalPosts } = getCampaignInfluencers(campaign);

	const allProfiles = [...influencers, ...invitedInfluencers];

	const { mediaPosts, startDate, endDate, name, status } = campaign;
	const { totalEngagementRate, totalLikes, totalComments, totalViews } = findMediaMetrics(
		mediaPosts
	);

	const getTotleCPE = getCostPerEachEngagement(totalLikes, totalComments, totalViews, totalBudget);

	const isEnded = isPast(new Date(endDate));

	return (
		<div className="campaign-view">
			<div className="header">
				<Button className="wf-btn-primary" onClick={e => setInviteModalVisible(true)}>
					Invite Influencers
				</Button>
				<div className="campaign-info">
					<span className="label">Campaign Name: </span>
					<div className="name"> {name}</div>
					<div className="date">
						<span className="label">Start Date:</span>
						<span className="st">{new Date(startDate).toDateString()}</span>
						<span className="label">End Date:</span>
						<span className="st">{new Date(endDate).toDateString()}</span>
						<span className="label">Status:</span>
						<span className={`status-${isEnded ? 'ended' : status.toLowerCase()}`}>
							●{isEnded ? 'Ended' : status}
						</span>
					</div>
				</div>
			</div>
			<div className="overview">
				<div className="summary">
					<div className="summary-item">
						<div className="title">Posts/Stories</div>
						<div className="subtitle">in the campaign</div>
						<div className="container">
							<div className="value">{mediaPosts ? mediaPosts.length : 0}</div>
						</div>
					</div>
					<div className="summary-item">
						<div className="title">Engagement</div>
						<div className="subtitle">in the campaign</div>
						<div className="container">
							<div className="value">{Math.round(totalEngagementRate.toFixed(2))}%</div>
							<div className="summary-footer">
								<div>
									<Icon type="like" />
									<div>{nFormatter(totalLikes)}</div>
								</div>
								<div>
									<Icon type="message" />
									<div>{nFormatter(totalComments)}</div>
								</div>
								<div>
									<Icon type="eye" />
									<div>{nFormatter(totalViews)}</div>
								</div>
							</div>
						</div>
					</div>
					<div className="summary-item">
						<div className="title">Campaign</div>
						<div className="subtitle">Budget</div>
						<div className="container">
							<div className="value">{`${totalBudget ? `$${totalBudget}` : 'N/A'}`}</div>
							<div className="summary-footer">
								<div>
									<Icon type="like" />
									<div>${getTotleCPE.costPerLikes}</div>
								</div>
								<div>
									<Icon type="message" />
									<div>${getTotleCPE.costPerComments}</div>
								</div>
								<div>
									<Icon type="eye" />
									<div>${getTotleCPE.costPerViews}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="influencers-summary">
					<div className="influencers-details">
						<div className="details-headline">
							<div class="top-headline">Participating</div>
							<div class="bottom-headline">Influencers</div>
						</div>
						<div class="extra-details">
							{allProfiles && allProfiles.length ? allProfiles.length : 0}
						</div>
					</div>
					<div class="influencers">
						{allProfiles.length > 0 &&
							allProfiles.map(profile => (
								<div class="participating-influencer-preview">
									<div class="profile-image-container">
										<img
											src={profile.profile_pic_url}
											class="profile-image"
											alt=""
											height="auto"
											width="auto"
											style={{ opacity: 1, transition: 'opacity 0.6s ease 0s' }}
										/>
									</div>
									<div class="influencer-details">
										<div class="influencer-info">
											<div class="influencer-name">{profile.username}</div>
											<div class="influencer-data">
												<div class="badge counter-badge">
													{profile.publishedPostsCount}/{profile.requiredPostsCount}
												</div>
												<div className={`status ${profile.status.toLowerCase()}`}>
													{profile.status}
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
			<CampaignTabs campaign={campaign} />

			{inviteModalVisible && (
				<InviteModal
					inviteModalVisible={inviteModalVisible}
					setInviteModalVisible={setInviteModalVisible}
					invitedInfluencers={invitedInfluencers}
					setInvitedInfluencers={setInvitedInfluencers}
					campaignId={campaignId}
				/>
			)}
		</div>
	);
};
export default CampaignView;
