import { useQuery } from "@apollo/react-hooks";
import { campaignsQuery } from "./gql";

export const useCampaignsQuery = () => useQuery(campaignsQuery);
