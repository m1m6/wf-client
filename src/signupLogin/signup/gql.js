import gql from "graphql-tag";

export const signupBrandMutation = gql`
	mutation brandsSignupMutation($name: String!, $email: String!, $password: String!, $role: UserRole!) {
		signup(name: $name, email: $email, password: $password, role: $role) {
			token
			user {
				id
				name
				email
			}
		}
	}
`;