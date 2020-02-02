import { useQuery } from "@apollo/react-hooks";
import { campaignsQuery, campaignDetailsQuery } from "./gql";

export const useCampaignsQuery = () => useQuery(campaignsQuery);
export const useCampaignDetailsQuery = id =>
	useQuery(campaignDetailsQuery, { variables: { id } });
