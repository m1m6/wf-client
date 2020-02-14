import gql from "graphql-tag";

export const linkIgAccountToProfileMutation = gql`
	mutation linkIgAccountToProfile(
		$username: String!
		$igUserId: String!
		$pageId: String!
		$accessToken: String!
	) {
		linkIgAccountToProfile(
			username: $username
			igUserId: $igUserId
			pageId: $pageId
			accessToken: $accessToken
		)
	}
`;
