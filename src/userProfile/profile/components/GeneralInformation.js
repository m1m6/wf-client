import React from 'react';
import { Col, Row, Typography, Divider, Icon, Button, Rate, Skeleton } from 'antd';
import { useMeQueryClient } from '../../../rootUseQuery';
const { Title, Paragraph, Text } = Typography;

const GeneralInformation = ({}) => {
    const { loading, error, data } = useMeQueryClient();

    if (loading) {
        return <Skeleton />;
    }

    const {
        me: { role, email, name }
    } = data;

    return (
        <Col lg={24} md={24} sm={22}>
            <Row className="about-section">
                <Col className="username-location-wrapper">
                    <Title class="profile-username" level={5}>
                      Username:  {name}
                    </Title>
                </Col>
                <Title class="profile-username" level={5}>
                      Role:  {role}
                    </Title>
                {/* <Row type="flex" justify="space-between" className="buttons-wrapper">
                    <Button type="primary" ghost icon="message" className="userprofile-button">
                        Send a message
                    </Button>
                    <Button type="primary" className="userprofile-button">
                        Follow
                    </Button>
                </Row> */}
            </Row>
            <Col className="contact-information-container">
                <div className="contact-info-rows-wrapper">
                    <Row type="flex" className="info-row">
                        <Icon type="mail" className="contact-information-icon"></Icon>
                        <Paragraph>{email}</Paragraph>
                    </Row>
                    <Row type="flex" className="info-row">
                        <Icon type="instagram" className="contact-information-icon"></Icon>
                        <Paragraph>N/A</Paragraph>
                    </Row>
                    <Row type="flex" className="info-row">
                        <Icon type="phone" className="contact-information-icon"></Icon>
                        <Paragraph>N/A</Paragraph>
                    </Row>
                    <Row type="flex" className="info-row">
                        <Icon type="facebook" className="contact-information-icon"></Icon>
                        <Paragraph>N/A</Paragraph>
                    </Row>
                    <Row type="flex" className="info-row">
                        <Icon type="calendar" className="contact-information-icon"></Icon>
                        <Paragraph>N/A</Paragraph>
                    </Row>
                    <Row type="flex" className="info-row">
                        <Icon type="woman" className="contact-information-icon"></Icon>
                        <Paragraph>N/A </Paragraph>
                    </Row>
                </div>
            </Col>
        </Col>
    );
};

export default GeneralInformation;
