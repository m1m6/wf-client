import React, { useState } from "react";
import { useCreatorCampaignQuery } from "../useQueries";
import { Skeleton, Icon, message } from "antd";
import Button from "../../../form/components/Button";
import { useUpdateCampaignCreatorStatusMutation } from "../useMutations";

const CampaignOffer = ({ routerHistory, match }) => {
	const campaignCreatorId = match.params.id;
	const [isAcceptSubmitting, setIsAcceptSubmitting] = useState(false);
	const [isDeclineSubmitting, setIsDeclineSubmitting] = useState(false);
	const [
		updateCampaignCreatorStatus
	] = useUpdateCampaignCreatorStatusMutation();
	const { loading, data, error, refetch } = useCreatorCampaignQuery(
		campaignCreatorId
	);

	if (error) {
		message.warning("Unable to fetch your campaigns.");
	}

	if (loading) {
		return <Skeleton loading={loading} active paragraph />;
	}

	console.log("data", data);

	const {
		creatorCampaign: { campaign, status }
	} = data;

	let isAcceptedOrDeclined = status === "ACCEPTED" || status === "DECLINED";

	return (
		<div className="campaign-offer">
			<div className="details">
				<div className="name">{campaign.name}</div>
				<div className="description">{campaign.description}</div>
				<div className="tags-mentions">{campaign.tagsAndMentions[0]}</div>
				<div className="media-preview">
					{campaign.media &&
						campaign.media.map(media => {
							return <img src={media} width={80} height={80} />;
						})}
				</div>
			</div>
			<div className="right-panel">
				<Button
					htmlType="submit"
					type="primary"
					disabled={
						isAcceptSubmitting || isDeclineSubmitting || isAcceptedOrDeclined
					}
					className="wf-btn-secondary"
					onClick={async () => {
						setIsAcceptSubmitting(true);
						await updateCampaignCreatorStatus({
							variables: { id: campaignCreatorId, status: "ACCEPTED" }
						});
						refetch({ variables: { id: campaignCreatorId } });
						setIsAcceptSubmitting(false);
					}}
				>
					{isAcceptSubmitting ? "SUBMITTING..." : "Accept Campaign"}
				</Button>
				<Button
					htmlType="submit"
					type="primary"
					disabled={
						isDeclineSubmitting || isAcceptSubmitting || isAcceptedOrDeclined
					}
					className="wf-btn-decline"
					onClick={async () => {
						setIsDeclineSubmitting(true);
						await updateCampaignCreatorStatus({
							variables: { id: campaignCreatorId, status: "DECLINED" }
						});
						refetch({ variables: { id: campaignCreatorId } });
						setIsDeclineSubmitting(false);
					}}
				>
					{isDeclineSubmitting ? "SUBMITTING..." : "Decline Campaign"}
				</Button>
			</div>
		</div>
	);
};
export default CampaignOffer;
