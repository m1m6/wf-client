import gql from "graphql-tag";

export const ME_QUERY = gql`
	query MeQuery {
		me {
			id
			email
			name
			role
		}
	}
`;

export const ME_QUERY_CLIENT = gql`
	query MeQuery {
		me @client {
			id
			email
			name
			role
		}
	}
`;
