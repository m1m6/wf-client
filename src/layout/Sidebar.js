import React from 'react';
import { Layout, Menu, Icon, Skeleton, Badge } from 'antd';
import headerLogo from '../assets/imgs/sidebar/header-logo@3x.png';
import { Link } from 'react-router-dom';
import { useMeQueryClient, useMyNotificaitonsQuery } from '../rootUseQuery';
import { isAdmin, isBrand, isCreator } from '../signupLogin/utils';

const { Sider } = Layout;

const HeaderLogo = () => (
	<div className="header-logo">
		<img src={headerLogo} />
	</div>
);

const Sidebar = () => {
	const { loading, error, data } = useMeQueryClient();
	const {
		loading: notificationsLoading,
		error: notificationsError,
		data: notificationsData
	} = useMyNotificaitonsQuery();
	if (loading) {
		return <Skeleton active loading paragraph />;
	}

	const {
		me: { role }
	} = data;

	const isAdminUser = isAdmin(role);
	const isBrandUser = isBrand(role);
	const isCreatorUser = isCreator(role);

	console.log('notificationsLoading', notificationsData);
	return (
		<Sider width={270} className="sidebar-wrapper">
			<HeaderLogo />
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
				<Menu.Item key="1">
					<Icon type="bell" />
					{notificationsLoading ? (
						<Link to="/notifications">
							<span className="nav-text">Notifications</span>
						</Link>
					) : (
						<Badge
							count={notificationsData.myNotifications.filter(i => !i.isRead).length}
							showZero
							style={{
								backgroundColor: 'red',
								color: '#fff',
								boxShadow: '0 0 0 0px #d9d9d9',
								marginTop: '25px',
								marginRight: '-15px'
							}}
						>
							<Link to="/notifications">
								<span className="nav-text">Notifications</span>
							</Link>
						</Badge>
					)}
				</Menu.Item>
				{(isBrandUser || isAdminUser) && (
					<Menu.Item key="21">
						<Icon type="profile" />
						<Link to="/discover">
							<span className="nav-text">Discover</span>
						</Link>
					</Menu.Item>
				)}

				{(isCreatorUser || isAdminUser) && (
					<Menu.Item key="2">
						<Icon type="profile" />
						<Link to="/creator-campaigns">
							<span className="nav-text">My Campaigns</span>
						</Link>
					</Menu.Item>
				)}

				{(isBrandUser || isAdminUser) && (
					<Menu.Item key="7">
						<Icon type="team" />
						<Link to="/campaigns">
							<span className="nav-text">Campaigns</span>
						</Link>
					</Menu.Item>
				)}
			</Menu>
		</Sider>
	);
};

export default Sidebar;
