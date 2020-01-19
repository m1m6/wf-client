import React, { useLayoutEffect } from "react";
import { auth } from "../signupLogin/auth";

const PageLayout = ({ history, Component, title, ...rest }) => {
	return (
		<div className="page-layout">
			<h1 className="page-title">{title}</h1>
			<Component routerHistory={history} {...rest}/>
		</div>
	);
};

export default PageLayout;
