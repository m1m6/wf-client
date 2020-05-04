import gql from "graphql-tag";
import {apolloClient} from '../apolloClient'

export default (_, args, { cache }) => {
	const query = gql`
		query getSearchTerm {
			searchTerm @client 
		}
	`;
	const data = {
		searchTerm: args.searchTerm
	};

	apolloClient.writeData({
		query,
		data
	});

	return null;
};
