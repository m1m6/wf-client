import { useMutation, useQuery } from "@apollo/react-hooks";
import { PROFILES_QUERY } from "./gql";

export const useProfilesQuery = (first, skip) =>
	useQuery(PROFILES_QUERY, { variables: { first, skip } });
