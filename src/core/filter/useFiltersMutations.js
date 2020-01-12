import { useMutation } from '@apollo/react-hooks'
import { updateSelectedGender, updateSelectedCountries } from './gql'

export const useGenderFilter = () => useMutation(updateSelectedGender)
export const useCountriesFilter = () => useMutation(updateSelectedCountries)