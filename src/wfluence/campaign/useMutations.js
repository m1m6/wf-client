import { useMutation } from '@apollo/react-hooks'
import { newCampaignMutation } from './gql'

export const useNewCampaign = () => useMutation(newCampaignMutation)