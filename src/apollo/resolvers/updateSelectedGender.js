import gql from "graphql-tag";

export default (_, { list }, { cache }) => {
	const query = gql`
		query getGenderList {
			filters @client {
				gender
			}
		}
	`;

	const previousState = cache.readQuery({ query });

	const data = {
		filters: {
			...previousState.filters,
			gender: list
		}
	};

	cache.writeQuery({
		query,
		data
	});

	return null;
};
