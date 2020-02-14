import { useQuery } from "@apollo/react-hooks";
import {
	campaignsQuery,
	campaignDetailsQuery,
	creatorCampaignsQuery,
	creatorCampaignQuery
} from "./gql";

export const useCampaignsQuery = () => useQuery(campaignsQuery);
export const useCampaignDetailsQuery = id =>
	useQuery(campaignDetailsQuery, { variables: { id } });
export const useCreatorCampaignsQuery = () => useQuery(creatorCampaignsQuery);
export const useCreatorCampaignQuery = id =>
	useQuery(creatorCampaignQuery, { variables: { id } });
