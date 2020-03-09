import { useQuery } from '@apollo/react-hooks';
import { ME_QUERY, ME_QUERY_CLIENT, MY_NOTIFICATIONS } from './rootGql';

export const useMeQuery = () => useQuery(ME_QUERY);
export const useMeQueryClient = () => useQuery(ME_QUERY_CLIENT);
export const useMyNotificaitonsQuery = () => useQuery(MY_NOTIFICATIONS);
