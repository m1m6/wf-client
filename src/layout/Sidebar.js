import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;

const Sidebar = () => {
	return (
		<Sider
			style={{
				overflow: "auto",
				height: "100vh",
				position: "fixed",
				left: 0
			}}
		>
			<div className="logo" />
			<Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
				<Menu.Item key="1">
					<Icon type="user" />
					<span className="nav-text">Notifications</span>
				</Menu.Item>
				<Menu.Item key="2">
					<Icon type="video-camera" />
					<span className="nav-text">Dashboard</span>
				</Menu.Item>
				<Menu.Item key="3">
					<Icon type="upload" />
					<span className="nav-text">Discover</span>
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
				<Menu.Item key="7">
					<Icon type="team" />
					<span className="nav-text">Campaigns</span>
				</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default Sidebar;
