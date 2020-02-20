import { useQuery } from '@apollo/react-hooks';
import { PROFILES_QUERY } from './gql';

const useProfilesQuery = (first, skip) => {
	const { data, loading, fetchMore } = useQuery(PROFILES_QUERY, {
		variables: { first, skip },
		// notifyOnNetworkStatusChange: true,
	});

	if (loading) return { loading, data };

	const loadMore = (first, skip) => {
		return fetchMore({
			variables: { first, skip },
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
		loadMore: loading ? () => {} : loadMore
	};
};

export default useProfilesQuery;
