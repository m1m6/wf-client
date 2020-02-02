import React, { useState, useEffect } from "react";
import Button from "../../../form/components/Button";
import { Icon, Tabs, Skeleton } from "antd";
import Analytics from "../tabs/components/Analytics";
import InviteModal from "../invite/components/InviteModal";
import { useCampaignDetailsQuery } from "../useQueries";
import { getCampaignInfluencers } from "../utils";

//{}
const { TabPane } = Tabs;

const CampaignTabs = () => {
	return (
		<div className="campaign-tabs-container">
			<Tabs
				type="card"
				size="large"
				tabBarStyle={{ margin: "0px" }}
				animated={false}
			>
				<TabPane className="tab-item" tab="Analytics" key="1">
					<Analytics />
				</TabPane>
				<TabPane tab="Posts" key="2">
					<p>Content of Tab Pane 2</p>
					<p>Content of Tab Pane 2</p>
					<p>Content of Tab Pane 2</p>
				</TabPane>
				<TabPane tab="Influencers" key="3">
					<p>Content of Tab Pane 3</p>
					<p>Content of Tab Pane 3</p>
					<p>Content of Tab Pane 3</p>
				</TabPane>
			</Tabs>
		</div>
	);
};

const CampaignView = ({ routerHistory, match }) => {
    const campaignId = match.params.id
	const [inviteModalVisible, setInviteModalVisible] = useState(false);
	const [invitedInfluencers, setInvitedInfluencers] = useState([]);
	const { loading, data, error } = useCampaignDetailsQuery(campaignId);

	if (loading) {
		return <Skeleton loading active paragraph title />;
	}
	const { campaign } = data;
	const { influencers, totalBudget, totalPosts } = getCampaignInfluencers(
		campaign
	);
	const allProfiles = [...influencers, ...invitedInfluencers];

	return (
		<div className="campaign-view">
			<div className="invite-influencer">
				<Button
					className="wf-btn-primary"
					onClick={e => setInviteModalVisible(true)}
				>
					Invite Influencers
				</Button>
			</div>
			<div className="overview">
				<div className="summary">
					<div className="summary-item">
						<div className="title">Posts</div>
						<div className="subtitle">in the campaign</div>
						<div className="container">
							<div className="value">{totalPosts}</div>
						</div>
					</div>
					<div className="summary-item">
						<div className="title">Engagement</div>
						<div className="subtitle">in the campaign</div>
						<div className="container">
							<div className="value">8%</div>
							<div className="summary-footer">
								<div>
									<Icon type="like" />
									<div>10K</div>
								</div>
								<div>
									<Icon type="message" />
									<div>10K</div>
								</div>
								<div>
									<Icon type="eye" />
									<div>10K</div>
								</div>
							</div>
						</div>
					</div>
					<div className="summary-item">
						<div className="title">Campaign</div>
						<div className="subtitle">Budget</div>
						<div className="container">
							<div className="value">{`${
								totalBudget ? `$${totalBudget}` : "N/A"
							}`}</div>
							<div className="summary-footer">
								<div>
									<Icon type="like" />
									<div>$0.00</div>
								</div>
								<div>
									<Icon type="message" />
									<div>$0.00</div>
								</div>
								<div>
									<Icon type="eye" />
									<div>$0.00</div>
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
											style={{ opacity: 1, transition: "opacity 0.6s ease 0s" }}
										/>
									</div>
									<div class="influencer-details">
										<div class="influencer-info">
											<div class="influencer-name">{profile.username}</div>
											<div class="influencer-data">
												<div class="badge counter-badge">
													{profile.publishedPostsCount}/{profile.requiredPostsCount}
												</div>
												{/* <div class="badge status-badge status-badge_complete">
											Accepted
										</div> */}
											</div>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
			<CampaignTabs />

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
