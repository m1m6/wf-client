import React from "react";
import { Layout, Menu, Icon, Skeleton, Avatar } from "antd";
import headerLogo from "../assets/imgs/sidebar/header-logo@3x.png";
import { Link } from "react-router-dom";
import { useMeQueryClient } from "../rootUseQuery";
import { isAdmin, isBrand, isCreator } from "../signupLogin/utils";
import { SubMenu } from "rc-menu";

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
                    <SubMenu
                         className="siderbar-profile-section"
                         key="0"
                         title={
                              <span>
                                   <Avatar
                                        shape="square"
                                        src={
                                             "https://image.shutterstock.com/image-photo/close-portrait-beautiful-young-black-260nw-623123291.jpg"
                                        }
                                        className="siderbar-avatar"
                                   />
                                   <span className="siderbar-username">
                                        Abeer Alshaer
                                   </span>
                              </span>
                         }
                    >
                         <Menu.Item key="01" className="profile-submenu-item">
                              <Link to="/profile">Profile</Link>
                         </Menu.Item>
                         <Menu.Item key="02" className="profile-submenu-item">
                              Sign out
                         </Menu.Item>
                         <Menu.Item key="03" className="profile-submenu-item">
                              Reset Password
                         </Menu.Item>
                    </SubMenu>

                    <Menu.Item key="1">
                         <Icon type="bell" />
                         <Link to="/notifications">
                              <span className="nav-text">Notifications</span>
                         </Link>
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
                                   <span className="nav-text">
                                        My Campaigns
                                   </span>
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
