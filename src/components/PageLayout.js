import React, { useLayoutEffect } from "react";
import { auth } from "../signupLogin/auth";
import { Icon } from "antd";

const PageLayout = ({ history, Component, title, ...rest }) => {
	return (
		<div className="page-layout">
			<span><Icon type="left-circle" onClick={()=> history.goBack()}/></span>
			<h1 className="page-title">{title}</h1>
			<Component routerHistory={history} {...rest}/>
		</div>
	);
};

export default PageLayout;
