import { useMutation } from "@apollo/react-hooks";
import {
	newCampaignMutation,
	linkProfilesToCampaignMutation,
	updateCampaignCreatorStatusMutation
} from "./gql";

export const useNewCampaign = () => useMutation(newCampaignMutation);
export const useLinkProfilesToCampaign = () =>
	useMutation(linkProfilesToCampaignMutation);
export const useUpdateCampaignCreatorStatusMutation = () =>
	useMutation(updateCampaignCreatorStatusMutation);
