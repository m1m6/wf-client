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
		<div className="auth-page-layout">
			<div class="auth-page-container">
				<h1>{title}</h1>
				<Component routerHistory={history} {...rest} />
			</div>
		</div>
	);
};

export default AuthPageLayout;
