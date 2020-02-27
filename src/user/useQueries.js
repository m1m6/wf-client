import { useQuery } from '@apollo/react-hooks';
import { MY_NOTIFICATIONS } from './gql';

export const useMyNotificaitonsQuery = () =>
	useQuery(MY_NOTIFICATIONS, { fetchPolicy: 'network-only' });
