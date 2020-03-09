import React from 'react';
import { Col, Row, Avatar, Tabs } from 'antd';
import GeneralInformation from './GeneralInformation';
import ChangePassword from './ChangePassword';
const { TabPane } = Tabs;

const Profile = ({}) => {
    return (
        <Row>
            <Col className="user-profile-container" lg={24} md={20}>
                <Col className="user-profile-left-section">
                    <Col lg={7} md={24}>
                        <Avatar
                            src="https://image.shutterstock.com/image-photo/close-portrait-beautiful-young-black-260nw-623123291.jpg"
                            shape="square"
                            size="large"
                            className="user-profile-avatar"
                        />
                    </Col>
                    <Col lg={15} md={24} sm={22}>
                        <Tabs defaultActiveKey="1" onChange={() => {}}>
                            <TabPane tab="General Information" key="1">
                                <GeneralInformation />
                            </TabPane>
                            <TabPane tab="Password" key="3">
                                <ChangePassword />
                            </TabPane>
                            <TabPane tab="Payments" key="2">
                                Coming Soon...
                            </TabPane>
                        </Tabs>
                    </Col>
                </Col>
            </Col>
        </Row>
    );
};

export default Profile;
