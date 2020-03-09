import { useMutation } from '@apollo/react-hooks';
import {
    newCampaignMutation,
    linkProfilesToCampaignMutation,
    updateCampaignCreatorStatusMutation,
    updateCampaignCreatorEmailMutation,
    campaignDetailsQuery
} from './gql';

export const useNewCampaign = () => useMutation(newCampaignMutation);
export const useLinkProfilesToCampaign = campaignId =>
    useMutation(linkProfilesToCampaignMutation, {
        refetchQueries: [{ query: campaignDetailsQuery, variables: { id: campaignId } }]
    });
export const useUpdateCampaignCreatorStatusMutation = () =>
    useMutation(updateCampaignCreatorStatusMutation);

export const useUpdateCampaignCreatorEmailMutation = () =>
    useMutation(updateCampaignCreatorEmailMutation);
