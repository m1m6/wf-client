import { useMutation } from '@apollo/react-hooks';
import { SEARCH_TERM_MUTATION_CLIENT, brandAppearanceQuery } from './rootGql';

export const useSearchTermMutation = (searchTerm) =>
    useMutation(SEARCH_TERM_MUTATION_CLIENT, { notifyOnNetworkStatusChange: true });
