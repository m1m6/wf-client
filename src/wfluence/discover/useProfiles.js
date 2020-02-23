import { useQuery } from '@apollo/react-hooks';
import { PROFILES_QUERY } from './gql';

const useProfilesQuery = (first, skip, filters) => {
	const { data, loading, fetchMore, updateQuery } = useQuery(PROFILES_QUERY, {
		variables: { first, skip, filters },
		// notifyOnNetworkStatusChange: true,
	});

	if (loading) return { loading, data };

	const loadMore = (first, skip, filters) => {
		return fetchMore({
			variables: { first, skip, filters },
			fetchPolicy: 'cache-and-network',
			notifyOnNetworkStatusChange: true,
			updateQuery: (previousResult,{ fetchMoreResult }) => {
				const newProfiles = fetchMoreResult.profiles;
				return newProfiles.length
					? {
							profiles: [...previousResult.profiles, ...newProfiles]
					  }
					: previousResult;
			}
		});
	};
	return {
		data,
		loading,
		loadMore: loading ? () => {} : loadMore,
		updateQuery
	};
};

export default useProfilesQuery;
