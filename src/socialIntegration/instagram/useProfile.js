import { useMutation, useQuery } from "@apollo/react-hooks";
import { linkIgAccountToProfileMutation } from "./gql";

export const useLinkIgProfileMutation = () =>
	useMutation(linkIgAccountToProfileMutation);
