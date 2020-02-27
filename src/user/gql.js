import gql from 'graphql-tag';

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

export const updateNotification = gql`
	mutation updateNotification($notificationId: ID!, $status: Boolean!) {
		updateNotification(notificationId: $notificationId, status: $status)
	}
`;
