import React, { useState } from 'react';
import { Menu, Divider, Checkbox, Icon, Spin, Input, Slider } from 'antd';
import Link from '../../form/components/Link';
import { FILTER_KEYS } from './constants';
import {
	useGenderFilter,
	useCountriesFilter,
	useFollowersFilter,
	useLangaugeFilter,
	useCategoriesFilter,
	useCreatorsSizeFilter
} from './useFiltersMutations';

const loadingIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export const getCheckboxMenu = (filterName, filterKey, options = []) => {
	let [loading, setLoading] = useState(false);
	
	const [originalOptions, setOriginalOptions] = useState(options);
	const [filteredOptions, setFilteredOptions] = useState(options);
	const [selectedOptions, setSelectedOptions] = useState([]);

	let [countries] = useCountriesFilter();
	let [genders] = useGenderFilter();
	let [languages] = useLangaugeFilter();
	let [categories] = useCategoriesFilter();
	let [creatorsSize] = useCreatorsSizeFilter();

	return (
		<Menu className="filter-options">
			{shouldShowSearchBox(filterKey) && (
				<div className="filter-input">
					<Spin spinning={loading} indicator={loadingIcon}>
						<Input
							placeholder={`Search ${filterName}`}
							onChange={e => {
								let filteredData = originalOptions.filter(i =>
									i.label.toLowerCase().includes(e.target.value.toLowerCase())
								);
								setFilteredOptions(filteredData);
							}}
							style={{ border: 0 }}
						/>
					</Spin>
				</div>
			)}

			<div style={{ overflowY: 'auto' }}>
				<Checkbox.Group
					defaultValue={[0]}
					onChange={selectedOptions => {
						console.log('selectedOptions', selectedOptions);
						setSelectedOptions(selectedOptions);
					}}
					className="filter-checkbox-options"
					value={selectedOptions}
				>
					{filteredOptions.map((option, index) => {
						return (
							<Checkbox value={option.value} style={{ marginBottom: '15px' }} >
								{option.label}
							</Checkbox>
						);
					})}
				</Checkbox.Group>
			</div>
			<div className="filter-options-footer-wrapper">
				<Divider className="filter-footer-divider" />
				<div className="filter-options-footer">
					<Link
						label="Clear"
						blackLink
						onClick={() => {
							setSelectedOptions([]);
							if (filterKey === FILTER_KEYS.gender) {
								genders({ variables: { list: [] } });
							} else if (filterKey === FILTER_KEYS.country) {
								countries({ variables: { list: [] } });
							} else if (filterKey === FILTER_KEYS.languages) {
								languages({ variables: { list: [] } });
							} else if (filterKey === FILTER_KEYS.categories) {
								categories({ variables: { list: [] } });
							} else if (filterKey === FILTER_KEYS.creatorsSize) {
								creatorsSize({ variables: { list: [] } });
							}
						}}
					/>
					<button
						className="save-btn"
						onClick={() => {
							if (filterKey === FILTER_KEYS.gender) {
								genders({ variables: { list: selectedOptions } });
							} else if (filterKey === FILTER_KEYS.country) {
								countries({ variables: { list: selectedOptions } });
							} else if (filterKey === FILTER_KEYS.languages) {
								languages({ variables: { list: selectedOptions } });
							} else if (filterKey === FILTER_KEYS.categories) {
								categories({ variables: { list: selectedOptions } });
							} else if (filterKey === FILTER_KEYS.creatorsSize) {
								creatorsSize({ variables: { list: selectedOptions } });
							}
						}}
					>
						Save
					</button>
				</div>
			</div>
		</Menu>
	);
};

export const getSliderMenu = (filterName, filterKey) => {
	const [values, setValues] = useState([]);
	let [followersFilter] = useFollowersFilter();

	const marks = {
		5000: '',
		10000: '',
		30000: '',
		50000: '',
		100000: '100K',
		500000: '500K',
		1000000: '1M'
	};

	return (
		<Menu className="filter-options">
			<div style={{ overflowY: 'auto' }}>
				<Slider
					max={1000000}
					step={5000}
					range={true}
					className="followers-slider"
					marks={marks}
					defaultValue={[5000, 20000]}
					onChange={e => setValues(e)}
				/>
			</div>
			<div className="filter-options-footer-wrapper">
				<Divider className="filter-footer-divider" />
				<div className="filter-options-footer">
					<Link label="Clear" blackLink />
					<button
						className="save-btn"
						onClick={e => {
							followersFilter({ variables: { list: values } });
						}}
					>
						Save
					</button>
				</div>
			</div>
		</Menu>
	);
};

export const shouldShowSearchBox = filterKey => {
	return filterKey !== FILTER_KEYS.gender && filterKey !== FILTER_KEYS.followers;
};

export const buildWhereFilter = filterData => {
	let results = { where: {} };

	if (filterData) {
		let { filters } = filterData;
		let { followersCount, countries, gender, languages, categories, creatorsSize } = filters;

		if (followersCount && followersCount.length > 0) {
			results.where.followersCount_gte = followersCount[0];
			results.where.followersCount_lte = followersCount[1];
		}

		if (countries && countries.length > 0) {
			results.where.location_in = countries;
		}

		if (gender && gender.length > 0) {
			results.where.gender_in = gender;
		}

		if (languages && languages.length > 0) {
			results.where.language_in = languages;
		}

		if (categories && categories.length > 0) {
			results.where.categories_in = categories;
		}

		console.log('creatorsSize', creatorsSize);
		if (creatorsSize && creatorsSize.length > 0) {
			results.where.followersCount_gte = creatorsSize[0][0];
			results.where.followersCount_lte = creatorsSize[0][1];
		}
	}

	return results;
};
