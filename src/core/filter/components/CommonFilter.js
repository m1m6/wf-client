import React from "react";
import { Menu, Dropdown, Divider } from "antd";
import Link from "../../../form/components/Link";
import capitalize from "lodash/capitalize";
import { FILTER_KEYS } from "../constants";
import { GENDER_LIST, getCheckboxMenu, getSliderMenu } from "../utils";
import { getCountriesList } from "../../../assets/js/countries";
import { getCategoriesList } from "../../../assets/js/categories";

const getMenuOptions = (filterName, filterKey) => {
	switch (filterKey) {
		case FILTER_KEYS.gender:
			return getCheckboxMenu(filterName, filterKey, GENDER_LIST);

		case FILTER_KEYS.country:
			return getCheckboxMenu(filterName, filterKey, getCountriesList());

            case FILTER_KEYS.category:
            return getCheckboxMenu(filterName, filterKey, getCategoriesList());
            
		case FILTER_KEYS.followers:
			return getSliderMenu(filterName, filterKey);
	}

	return (
		<Menu className="filter-options" key={filterKey}>
			<Menu.Item key="0">
				<a href="http://www.alipay.com/">1st menu item</a>
			</Menu.Item>
			<Menu.Item key="1">
				<a href="http://www.taobao.com/">2nd menu item</a>
			</Menu.Item>

			<div className="filter-options-footer-wrapper">
				<Divider className="filter-footer-divider" />
				<div className="filter-options-footer">
					<Link label="Clear" blackLink />
					<button className="save-btn">SAVE</button>
				</div>
			</div>
		</Menu>
	);
};

const CommonFilter = ({ filterName, filterKey }) => {
	return (
		<div className="common-filter-wrapper">
			<Dropdown
				overlay={getMenuOptions(filterName, filterKey)}
				trigger={["click"]}
				className="filter-dropdown"
			>
				<button className="common-filter-button" href="#">
					{capitalize(filterName)}
				</button>
			</Dropdown>
		</div>
	);
};

export default CommonFilter;
