import { useMutation } from '@apollo/react-hooks';
import {
    SEARCH_TERM_MUTATION_CLIENT,
    SET_ERROR_MODAL_STATUS,
    VISITON_SUBSCRIPTION,
    CONTACT_FORM_MUTATION,
} from './rootGql';

export const useSearchTermMutation = () =>
    useMutation(SEARCH_TERM_MUTATION_CLIENT, { notifyOnNetworkStatusChange: true });

export const useErrorModalMutation = () =>
    useMutation(SET_ERROR_MODAL_STATUS, {
        notifyOnNetworkStatusChange: true,
    });

export const useVisitorSubscription = () => useMutation(VISITON_SUBSCRIPTION);

export const useContactForm = () => useMutation(CONTACT_FORM_MUTATION)