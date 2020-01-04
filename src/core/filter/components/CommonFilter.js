import React from "react";
import { Menu, Dropdown, Divider } from "antd";
import Link from "../../../form/components/Link";

const CommonFilter = () => {
	const menu = (
		<Menu className="filter-options">
			<Menu.Item key="0">
				<a href="http://www.alipay.com/">1st menu item</a>
			</Menu.Item>
			<Menu.Item key="1">
				<a href="http://www.taobao.com/">2nd menu item</a>
			</Menu.Item>

			<div className="filter-options-footer-wrapper">
				<Divider className="filter-footer-divider"/>
				<div className="filter-options-footer">
					<Link label="Clear" blackLink />
					<button className="save-btn">SAVE</button>
				</div>
			</div>
		</Menu>
	);

	return (
		<div className="common-filter-wrapper">
			<Dropdown overlay={menu} trigger={["click"]} className="filter-dropdown">
				<button className="common-filter-button" href="#">
					Followers
				</button>
			</Dropdown>
		</div>
	);
};

export default CommonFilter;
