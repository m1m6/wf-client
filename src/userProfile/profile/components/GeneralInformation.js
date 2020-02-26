import React from "react";
import { Col, Row, Typography, Divider, Icon, Button, Rate } from "antd";
const { Title, Paragraph, Text } = Typography;

const GeneralInformation = ({}) => {
    return (
        <Col lg={24} md={24} sm={22}>
            <Row className="about-section">
                <Col className="username-location-wrapper">
                    <Title class="profile-username" level={5}>
                        Abeer ALshaer
                    </Title>
                    <Col lg={8} md={12} sm={12}>
                        <Icon type="environment" className="location-icon" />
                        <Text className="user-location">
                            NY, California, USA
                        </Text>
                    </Col>
                </Col>
                <Row type="flex" justify="space-between">
                    <Col class="profile-statistics-item">
                        <Col>
                            <Text class="profile-statistics-value">241.3K</Text>
                        </Col>
                        <Text class="profile-statistics-label">Followers</Text>
                    </Col>
                    <Col class="profile-statistics-item">
                        <Col>
                            <Text class="profile-statistics-value">241.3K</Text>
                        </Col>
                        <Text class="profile-statistics-label">Following</Text>
                    </Col>
                    <Col class="profile-statistics-item">
                        <Col>
                            <Text class="profile-statistics-value">234</Text>
                        </Col>
                        <Text class="profile-statistics-label">Campaigns</Text>
                    </Col>
                </Row>

                <Rate allowHalf defaultValue={2.5} className="rating-section" />
                <Row
                    type="flex"
                    justify="space-between"
                    className="buttons-wrapper"
                >
                    <Button
                        type="primary"
                        ghost
                        icon="message"
                        className="userprofile-button"
                    >
                        Send a message
                    </Button>
                    <Button type="primary" className="userprofile-button">
                        Follow
                    </Button>
                </Row>
            </Row>
            <Col className="contact-information-container">
                <Divider orientation="left">Contact information</Divider>
                <div className="contact-info-rows-wrapper">
                    <Row type="flex" className="info-row">
                        <Icon
                            type="mail"
                            className="contact-information-icon"
                        ></Icon>
                        <Paragraph>abeer@gmail.com</Paragraph>
                    </Row>
                    <Row type="flex" className="info-row">
                        <Icon
                            type="instagram"
                            className="contact-information-icon"
                        ></Icon>
                        <Paragraph>@abeerels</Paragraph>
                    </Row>
                    <Row type="flex" className="info-row">
                        <Icon
                            type="phone"
                            className="contact-information-icon"
                        ></Icon>
                        <Paragraph>+972595610447</Paragraph>
                    </Row>
                    <Row type="flex" className="info-row">
                        <Icon
                            type="facebook"
                            className="contact-information-icon"
                        ></Icon>
                        <Paragraph>Abeer Els</Paragraph>
                    </Row>
                    <Row type="flex" className="info-row">
                        <Icon
                            type="calendar"
                            className="contact-information-icon"
                        ></Icon>
                        <Paragraph>28/11/1993</Paragraph>
                    </Row>
                    <Row type="flex" className="info-row">
                        <Icon
                            type="woman"
                            className="contact-information-icon"
                        ></Icon>
                        <Paragraph>Female </Paragraph>
                    </Row>
                </div>
            </Col>
        </Col>
    );
};

export default GeneralInformation;
