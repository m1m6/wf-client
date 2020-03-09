import { useQuery, useSubscription } from '@apollo/react-hooks';
import { MY_NOTIFICATIONS, MY_NOTIFICATIONS_SUBSCRIPTION } from './gql';

export const useMyNotificaitonsQuery = () =>
    useQuery(MY_NOTIFICATIONS, { fetchPolicy: 'network-only' });
export const useMyNotificaitonsSubscription = () =>
    useSubscription(MY_NOTIFICATIONS_SUBSCRIPTION, { fetchPolicy: 'network-only' });
