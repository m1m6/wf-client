import React, { useState } from "react";
import { Menu, Divider, Checkbox, Icon, Spin, Input, Slider } from "antd";
import Link from "../../form/components/Link";

export const GENDER_LIST = [
	{ value: "ML", label: "Male" },
	{ value: "FE", label: "Female" }
];

const loadingIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export const getCheckboxMenu = (filterName, options = []) => {
	let [loading, setLoading] = useState(false);
	return (
		<Menu className="filter-options">
			<div className="filter-input">
				<Spin spinning={loading} indicator={loadingIcon}>
					<Input
						placeholder={`Search ${filterName}`}
						onChange={v => {}}
						style={{ border: 0 }}
					/>
				</Spin>
			</div>
			<div style={{ overflowY: "auto" }}>
				<Checkbox.Group
					defaultValue={[0]}
					onChange={selectedOptions => console.log(selectedOptions)}
					// setSelectedOptions(selectedOptions, filterKey)
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

export const getSliderMenu = filterName => {
	const marks = {
		0: "0",
		26: "26",
		37: "37",
		100: {
			style: {
				color: "#f50"
			},
			label: <strong>100</strong>
		}
	};

	return (
		<Menu className="filter-options">
			<div style={{ overflowY: "auto" }}>
				<Slider marks={marks} defaultValue={37} />
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
