import { useQuery } from '@apollo/react-hooks';
import {
    ME_QUERY,
    ME_QUERY_CLIENT,
    MY_NOTIFICATIONS,
    SEARCH_TERM_QUERY_CLIENT,
    brandAppearanceQuery,
} from './rootGql';

export const useMeQuery = () => useQuery(ME_QUERY);
export const useMeQueryClient = () => useQuery(ME_QUERY_CLIENT);
export const useMyNotificaitonsQuery = () => useQuery(MY_NOTIFICATIONS);
export const useSearchTermQueryClient = () => useQuery(SEARCH_TERM_QUERY_CLIENT);
export const useBrandAppearanceQuery = (searchTerm, first, skip) => {
    return useQuery(brandAppearanceQuery, {
        variables: {
            searchTerm,
            first,
            skip,
        },
        notifyOnNetworkStatusChange: true,
    });
};
