import React from "react";
import { Col, Row, Avatar, Tabs } from "antd";
import GeneralInformation from "./GeneralInformation";
import ChangePassword from "./ChangePassword";
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
                            <TabPane tab="Payment" key="2">
                                Coming Soon...
                            </TabPane>
                            <TabPane tab="Password" key="3">
                                <ChangePassword />
                            </TabPane>
                        </Tabs>
                    </Col>
                </Col>
                <Row type="flex">
                    {/* <Col lg={7}>
                        <Divider orientation="left">Work</Divider>
                        <div className="contact-info-rows-wrapper">
                            <Col class="profile-title">
                                <Title level={4}>
                                    Introduction <Text code>Primary</Text>
                                </Title>
                                <Paragraph> Gaza </Paragraph>
                                <Paragraph> 122 william street </Paragraph>

                                <Title level={4}>
                                    Introduction <Text code>secondary</Text>
                                </Title>
                                <Paragraph> Gaza </Paragraph>
                                <Paragraph> 122 william street </Paragraph>
                            </Col>
                            <Divider orientation="left">Interests</Divider>
                            {["Photography", "Running", "Sports"].map(
                                interest => (
                                    <Tag
                                        class="profile-skills"
                                        color={"lightgrey"}
                                        className="interest-tag"
                                    >
                                        {interest}
                                        {"\n"}
                                    </Tag>
                                )
                            )}
                        </div>
                    </Col> */}
                    <Col lg={17}></Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Profile;
