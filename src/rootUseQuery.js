import { useQuery } from '@apollo/react-hooks';
import {
    ME_QUERY,
    ME_QUERY_CLIENT,
    MY_NOTIFICATIONS,
    SEARCH_TERM_QUERY_CLIENT,
    brandAppearanceQuery,
    ERROR_MODAL_STATUS,
} from './rootGql';

export const useMeQuery = () => useQuery(ME_QUERY);
export const useMeQueryClient = () => useQuery(ME_QUERY_CLIENT);
export const useMyNotificaitonsQuery = () => useQuery(MY_NOTIFICATIONS);
export const useSearchTermQueryClient = () => useQuery(SEARCH_TERM_QUERY_CLIENT, {
    // fetchPolicy: '',
    notifyOnNetworkStatusChange: true
});
export const useBrandAppearanceQuery = (searchTerm, first, skip) => {
    const { data, loading, fetchMore, updateQuery, error, networkStatus } = useQuery(brandAppearanceQuery, {
        variables: {
            searchTerm,
            first,
            skip,
        },
        fetchPolicy: 'network-only',
        // notifyOnNetworkStatusChange: true,
    });

    if (loading) {
        return { loading, data: undefined, error };
    }

    const loadMore = (searchTerm, first, skip) => {
        return fetchMore({
            variables: { searchTerm, first, skip },
            fetchPolicy: 'cache-and-network',
            notifyOnNetworkStatusChange: true,
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const newProfiles = fetchMoreResult.brandAppearance;
                return newProfiles.brandAppearance.length
                    ? {
                          brandAppearance: {
                              brandAppearance: [
                                  ...previousResult.brandAppearance.brandAppearance,
                                  ...newProfiles.brandAppearance,
                              ],
                              count: newProfiles.count,
                              __typename: 'brandAppearancePayload',
                          },
                      }
                    : previousResult;
            },
        });
    };

    return {
        data,
        loading,
        loadMore: loading ? () => {} : loadMore,
        updateQuery,
        error,
    };
};

export const useErrorModalQuery = () => useQuery(ERROR_MODAL_STATUS);
