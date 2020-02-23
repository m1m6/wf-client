import React, { useLayoutEffect } from "react";
import { Row, Col } from "antd";
import { auth } from "../signupLogin/auth";

const AuthPageLayout = ({ history, Component, title, ...rest }) => {
    useLayoutEffect(() => {
        const token = auth.getAccessToken();
        if (token !== null) {
            history.push("/");
        }
    }, []);
    return (
        <Col span={24} className="auth-page-layout">
            <Col span={24} className="auth-page-container">
                <Col span={12} className="auth-title-wrapper">
                    <h1 className="auth-title">{title}</h1>
                </Col>
                <Component routerHistory={history} {...rest} />
            </Col>
        </Col>
    );
};

export default AuthPageLayout;
