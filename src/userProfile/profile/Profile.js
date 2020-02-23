import React from "react";
import {
  Col,
  Row,
  Avatar,
  Typography,
  Divider,
  Icon,
  Tag,
  Button,
  Rate
} from "antd";
const { Title, Paragraph, Text } = Typography;

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
            <Divider orientation="left">About</Divider>
            <Row className="about-section">
              <Col className="username-location-wrapper">
                <Title class="profile-username" level={5}>
                  Abeer ALshaer
                </Title>
                <Col lg={8} md={12} sm={12}>
                  <Icon type="environment" className="location-icon"></Icon>
                  <Text className="user-location">NY, California, USA</Text>
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
          </Col>
        </Col>
        <Row type="flex">
          <Col lg={7}>
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
              {["Photography", "Running", "Sports"].map(interest => (
                <Tag
                  class="profile-skills"
                  color={"lightgrey"}
                  className="interest-tag"
                >
                  {interest}
                  {"\n"}
                </Tag>
              ))}
            </div>
          </Col>
          <Col lg={17}>
            <Col className="contact-information-container">
              <Divider orientation="left">Contact information</Divider>
              <div className="contact-info-rows-wrapper">
                <Row type="flex">
                  <Icon type="mail" className="contact-information-icon"></Icon>
                  <Paragraph> abeer@gmail.com </Paragraph>
                </Row>
                <Row type="flex">
                  <Icon
                    type="instagram"
                    className="contact-information-icon"
                  ></Icon>
                  <Paragraph>@abeerels </Paragraph>
                </Row>
                <Row type="flex">
                  <Icon
                    type="phone"
                    className="contact-information-icon"
                  ></Icon>
                  <Paragraph>+972595610447 </Paragraph>
                </Row>
                <Row type="flex">
                  <Icon
                    type="facebook"
                    className="contact-information-icon"
                  ></Icon>
                  <Paragraph>Abeer Els </Paragraph>
                </Row>
                <Row type="flex">
                  <Icon
                    type="calendar"
                    className="contact-information-icon"
                  ></Icon>
                  <Paragraph>28/11/1993 </Paragraph>
                </Row>
                <Row type="flex">
                  <Icon
                    type="woman"
                    className="contact-information-icon"
                  ></Icon>
                  <Paragraph>Female </Paragraph>
                </Row>
              </div>
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Profile;
