import gql from "graphql-tag";

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
	const previousState = cache.readQuery({ query });
	const data = {
		userData: {
			...previousState.userData,
			name,
			id,
			email
		}
	};
    console.log("data", data )

	cache.writeQuery({
		query,
		data
	});

	return null;
};
