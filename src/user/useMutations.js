import { useMutation } from '@apollo/react-hooks';
import { updateNotification, MY_NOTIFICATIONS } from './gql';
import { useMyNotificaitonsQuery } from './useQueries';

export const useUpdateNotificationMutation = () =>
	useMutation(updateNotification, {
		refetchQueries: [{ query: MY_NOTIFICATIONS }]
	});
