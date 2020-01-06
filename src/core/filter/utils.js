import React, { useState } from "react";
import { Menu, Divider, Checkbox, Icon, Spin, Input, Slider } from "antd";
import Link from "../../form/components/Link";
import { FILTER_KEYS } from "./constants";

export const GENDER_LIST = [
	{ value: "ML", label: "Male" },
	{ value: "FE", label: "Female" }
];

const loadingIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export const getCheckboxMenu = (filterName, filterKey, options = []) => {
	let [loading, setLoading] = useState(false);
	return (
		<Menu className="filter-options">
			{shouldShowSearchBox(filterKey) && (
				<div className="filter-input">
					<Spin spinning={loading} indicator={loadingIcon}>
						<Input
							placeholder={`Search ${filterName}`}
							onChange={v => {}}
							style={{ border: 0 }}
						/>
					</Spin>
				</div>
			)}

			<div style={{ overflowY: "auto" }}>
				<Checkbox.Group
					defaultValue={[0]}
					onChange={selectedOptions => console.log(selectedOptions)}
					className="filter-checkbox-options"
				>
					{options.map((option, index) => {
						return (
							<Checkbox value={option.value} style={{ marginBottom: "15px" }}>
								{option.label}
							</Checkbox>
						);
					})}
				</Checkbox.Group>
			</div>
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

export const getSliderMenu = (filterName, filterKey) => {
	const marks = {
		5000: "",
		10000: "",
        30000: "",
        50000: "",
        100000: "100K",
        500000: "500K",
        1000000: "1M",
	};

	return (
		<Menu className="filter-options">
			<div style={{ overflowY: "auto" }}>
				<Slider max={1000000} step={5000} range={true} className="followers-slider" marks={marks} defaultValue={[5000, 20000]} />
			</div>
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

export const shouldShowSearchBox = filterKey => {
    return filterKey !== FILTER_KEYS.gender && filterKey !== FILTER_KEYS.followers
};
