import { useQuery } from "@apollo/react-hooks";
import {ME_QUERY} from './rootGql'

export const useMeQuery = () => useQuery(ME_QUERY);