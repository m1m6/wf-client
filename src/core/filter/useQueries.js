import { getAllFilters } from './gql';
import { useQuery } from '@apollo/react-hooks';

export const useFiltersQuery = () => useQuery(getAllFilters);
