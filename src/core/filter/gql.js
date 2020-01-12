import gql from "graphql-tag";

export const updateSelectedGender = gql`
	mutation updateSelectedGender($list: [String]!) {
		updateSelectedGender(list: $list) @client {
			gender
		}
	}
`;

export const updateSelectedCountries = gql`
	mutation updateSelectedCountries($list: [String]!) {
		updateSelectedCountries(list: $list) @client {
			countries
		}
	}
`;
