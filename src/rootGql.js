import gql from 'graphql-tag';

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

export const MY_NOTIFICATIONS = gql`
	query MY_NOTIFICATIONS {
		myNotifications {
			id
			isRead
			title
			createdAt
			updatedAt
			body
			href
			from
		}
	}
`;
