import { useMutation, useQuery } from "@apollo/react-hooks";
import { PROFILE_QUERY } from "./gql";

export const useProfileQuery = id =>
					useQuery(PROFILE_QUERY, { variables: { id } });
