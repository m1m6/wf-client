import { useMutation } from "@apollo/react-hooks";
import { newCampaignMutation, linkProfilesToCampaignMutation } from "./gql";

export const useNewCampaign = () => useMutation(newCampaignMutation);
export const useLinkProfilesToCampaign = () =>
	useMutation(linkProfilesToCampaignMutation);
