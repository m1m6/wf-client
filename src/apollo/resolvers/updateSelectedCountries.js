import gql from "graphql-tag";

export default (_, { list }, { cache }) => {
	const query = gql`
		query getCountriesist {
			filters @client {
				countries
			}
		}
	`;

	const previousState = cache.readQuery({ query });

	const data = {
		filters: {
			...previousState.filters,
			countries: list
		}
	};

	cache.writeQuery({
		query,
		data
	});

	return null;
};
