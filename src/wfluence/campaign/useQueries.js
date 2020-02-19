import { useQuery } from '@apollo/react-hooks';
import {
	campaignsQuery,
	campaignDetailsQuery,
	creatorCampaignsQuery,
	creatorCampaignQuery,
	campaignMetricsQuery,
	campaignInfluencersAndPostsDetailsQuery
} from './gql';

export const useCampaignsQuery = () => useQuery(campaignsQuery);
export const useCampaignDetailsQuery = id => useQuery(campaignDetailsQuery, { variables: { id } });
export const useCreatorCampaignsQuery = () => useQuery(creatorCampaignsQuery);
export const useCreatorCampaignQuery = id => useQuery(creatorCampaignQuery, { variables: { id } });
export const useCampaignMetricsQuery = campaignId =>
	useQuery(campaignMetricsQuery, { variables: { campaignId } });
export const useCampaignInfluencersAndPostsDetailsQuery = campaignId =>
	useQuery(campaignInfluencersAndPostsDetailsQuery, { variables: { campaignId } });
