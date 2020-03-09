import React from 'react';
import { Layout, Menu, Icon, Skeleton, Avatar, Dropdown, Button } from 'antd';
import headerLogo from '../assets/imgs/sidebar/header-logo@3x.png';
import { Link } from 'react-router-dom';
import { titleCase } from 'title-case';
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

    if (loading) {
        return <Skeleton active loading paragraph />;
    }

    const {
        me: { role, email, name }
    } = data;

	return (
		<Sider width={270} className="sidebar-wrapper">
			<HeaderLogo />
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Dropdown
                    trigger={['click']}
                    overlayClassName="profile-submenu-overlay"
                    overlay={() => (
                        <Menu className="user-menu">
                            <Menu.Item key="011" className="profile-submenu-item">
                                <Link to="/account-settings">Account Settings</Link>
                            </Menu.Item>
                            <Menu.Item key="022" className="profile-submenu-item">
                                Sign out
                            </Menu.Item>
                        </Menu>
                    )}
                >
                    <div className="pointer user-menu-wrapper">
                        <Avatar shape="square" icon="user" className="siderbar-avatar" />
                        <span onClick={e => e.isPropagationStopped()} className="siderbar-username">
                            {titleCase(name)}
                        </span>
                        <Icon type="down" className="arrow-down-angle" />
                    </div>
                </Dropdown>
                
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
