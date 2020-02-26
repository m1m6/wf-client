import React, { useState } from "react";
import {
    Col,
    Row,
    Typography,
    Divider,
    Form,
    Button,
    Input,
    message
} from "antd";
const { Title, Paragraph, Text } = Typography;

const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 8 }
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 2 }
};

const ChangePassword = props => {
    const [payload, setPayload] = useState({});
    const [sendingRequest, setSendingChangePassowrdRequest] = useState(false);
    const validateValues = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                onChangePassword(values);
                console.info("success");
            } else {
            }
        });
    };

    const onChangePassword = values => {
        setSendingChangePassowrdRequest(true);
        setTimeout(() => {
            setSendingChangePassowrdRequest(false);
            message.success("password successfully changed");
            props.form.resetFields();
        }, 1000);
        //TODO:  Should add API call here
    };

    const { getFieldDecorator } = props.form;
    return (
        <Col lg={24} md={24} sm={22}>
            <Divider orientation="left">Change Password</Divider>
            <Form onSubmit={validateValues}>
                <Form.Item {...formItemLayout} label="Old Password">
                    {getFieldDecorator("oldPassword", {
                        rules: [
                            {
                                required: true,
                                message: "Please input your password"
                            }
                        ]
                    })(<Input placeholder="" />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="New Password">
                    {getFieldDecorator("newPassword", {
                        rules: [
                            {
                                required: true,
                                message: "Please input your new password"
                            }
                        ]
                    })(<Input placeholder="" />)}
                </Form.Item>
                <Form.Item {...formTailLayout}>
                    <Button
                        type="primary"
                        loading={sendingRequest}
                        htmlType="submit"
                    >
                        Change
                    </Button>
                </Form.Item>
            </Form>
        </Col>
    );
};

export default Form.create({ name: "change_password" })(ChangePassword);
