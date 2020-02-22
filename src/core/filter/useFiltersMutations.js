import { useMutation } from '@apollo/react-hooks';
import {
	updateSelectedGender,
	updateSelectedCountries,
	updateFolllowersFilter,
	updateSelectedLanguages,
	updateSelectedCategories,
    updateSelectedCreatorsSize
} from './gql';

export const useGenderFilter = () => useMutation(updateSelectedGender);
export const useCountriesFilter = () => useMutation(updateSelectedCountries);
export const useFollowersFilter = () => useMutation(updateFolllowersFilter);
export const useLangaugeFilter = () => useMutation(updateSelectedLanguages);
export const useCategoriesFilter = () => useMutation(updateSelectedCategories);
export const useCreatorsSizeFilter = () => useMutation(updateSelectedCreatorsSize);
