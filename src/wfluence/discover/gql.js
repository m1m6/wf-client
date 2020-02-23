import gql from 'graphql-tag';

export const PROFILES_QUERY = gql`
	query getProfiles($first: Int!, $skip: Int!, $filters: Json) {
		profiles(first: $first, skip: $skip, filters: $filters) {
			id
			engRateValue
			engRateAvg
			username
			name
			profilePic
			followingCount
			followersCount
			mediaCount
			location
			categories
			media {
				tags {
					name
				}
			}
		}
	}
`;
