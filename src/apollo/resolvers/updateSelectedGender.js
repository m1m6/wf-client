import gql from 'graphql-tag';
import { apolloClient } from '../apolloClient';

export default (_, { list }, { cache }) => {
	const query = gql`
		query getGenderList {
			filters @client {
				gender
			}
		}
	`;

	const previousState = apolloClient.readQuery({ query });

	const data = {
		filters: {
			...previousState.filters,
			gender: list
		}
	};

	setTimeout(() => {
		apolloClient.writeData({
			query,
			data
		});
	}, 0);

	return null;
};
