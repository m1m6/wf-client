import gql from 'graphql-tag';

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

export const updateSelectedCategories = gql`
	mutation updateSelectedCategories($list: [String]!) {
		updateSelectedCategories(list: $list) @client {
			categories
		}
	}
`;

export const updateSelectedCreatorsSize = gql`
	mutation updateSelectedCreatorsSize($list: [String]!) {
		updateSelectedCreatorsSize(list: $list) @client {
			creatorsSize
		}
	}
`;

export const updateSelectedLanguages = gql`
	mutation updateSelectedLanguages($list: [String]!) {
		updateSelectedLanguages(list: $list) @client {
			languages
		}
	}
`;

export const updateFolllowersFilter = gql`
	mutation updateFolllowersFilter($list: [Int]!) {
		updateFolllowersFilter(list: $list) @client {
			followersCount
		}
	}
`;

export const getAllFilters = gql`
	query filters {
		filters @client {
			categories
			countries
			followersCount
			gender
			languages
			creatorsSize
		}
	}
`;
