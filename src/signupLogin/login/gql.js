import gql from 'graphql-tag'

export const LOGIN_USER_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

export const setUserDataMutation = gql`
	mutation setUserData($name: String!, $id: ID!, $email: String!) {
		setUserData(name: $name, id: $id, email: $email) @client {
			name
			id 
			email
		}
	}
`;
