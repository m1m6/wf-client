import React from "react";
import { Layout, Menu, Icon, Skeleton } from "antd";
import headerLogo from "../assets/imgs/sidebar/header-logo@3x.png";
import { Link } from "react-router-dom";
import { useMeQueryClient } from "../rootUseQuery";
import { isAdmin, isBrand, isCreator } from "../signupLogin/utils";

const { Sider } = Layout;

const HeaderLogo = () => (
	<div className="header-logo">
		<img src={headerLogo} />
	</div>
);

const Sidebar = () => {
	const { loading, error, data } = useMeQueryClient();

	if (loading) {
		return <Skeleton active loading paragraph />;
	}

	const {
		me: { role }
	} = data;

	const isAdminUser = isAdmin(role);
	const isBrandUser = isBrand(role);
	const isCreatorUser = isCreator(role);

	return (
		<Sider width={270} className="sidebar-wrapper">
			<HeaderLogo />
			<Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
				<Menu.Item key="1">
					<Icon type="bell" />
					<Link to="/notifications">
						<span className="nav-text">Notifications</span>
					</Link>
				</Menu.Item>
				{(isBrandUser || isAdminUser) && (
					<Menu.Item key="2">
						<Icon type="profile" />
						<Link to="/discover">
							<span className="nav-text">Discover</span>
						</Link>
					</Menu.Item>
				)}

				<Menu.Item key="7">
					<Icon type="team" />
					<Link to="/campaigns">
						<span className="nav-text">Campaigns</span>
					</Link>
				</Menu.Item>

				<Menu.Item key="4">
					<Icon type="bar-chart" />
					<span className="nav-text">Analytics</span>
				</Menu.Item>

				<Menu.Item key="5">
					<Icon type="cloud-o" />
					<span className="nav-text">Insights</span>
				</Menu.Item>

				<Menu.Item key="6">
					<Icon type="appstore-o" />
					<span className="nav-text">Media</span>
				</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default Sidebar;
