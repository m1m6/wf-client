import gql from "graphql-tag";
import {apolloClient} from '../apolloClient'

export default (_, { name, id, email }, { cache }) => {
	const query = gql`
		query getUserData {
			userData @client {
				name
				email
				id
			}
		}
	`;
	const previousState = apolloClient.readQuery({ query });
	const data = {
		userData: {
			...previousState.userData,
			name,
			id,
			email
		}
	};
    console.log("data", data )

	apolloClient.writeData({
		query,
		data
	});

	return null;
};
