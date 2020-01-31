import { useQuery } from "@apollo/react-hooks";
import { PROFILES_QUERY } from "./gql";

const useProfilesQuery = (first, skip) => {
	const { data, loading, fetchMore } = useQuery(PROFILES_QUERY, {
		variables: { first, skip },
		notifyOnNetworkStatusChange: true,
		fetchPolicy: 'network-only'
	});

	if (loading) return { loading, profiles: [] };

	const loadMore = (first, skip) => {
		return fetchMore({
			query: PROFILES_QUERY,
			notifyOnNetworkStatusChange: true,
			variables: { first, skip },
			fetchPolicy: 'no-cache',
			updateQuery: (previousResult, x) => {
				const { fetchMoreResult } = x;
				const newProfiles = fetchMoreResult.profiles;
				debugger;
				return newProfiles.length
					? {
							profiles: [...previousResult.profiles, ...newProfiles]
					  }
					: previousResult;
			}
		});
	};
	debugger;
	console.log("fetched data", data);
	return {
		profiles: data.profiles ,
		loading,
		loadMore: loading ? () => {} : loadMore
	};
};

export default useProfilesQuery;
