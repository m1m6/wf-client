import { useMutation } from "@apollo/react-hooks";
import { signupBrandMutation } from "./gql";

export const useBrandSignup = () => useMutation(signupBrandMutation);
