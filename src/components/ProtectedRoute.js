import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../signupLogin/auth";

const hasAccess = (roles, userRole) => {
	return roles.includes(userRole);
};

const ProtectedRoute = ({ component: Component, userRole, roles, ...rest }) => {
	const token = auth.getAccessToken();
	const isAuthorizedToAccess = hasAccess(roles, userRole);
	return token ? (
		isAuthorizedToAccess ? (
			<Route {...rest} render={matchProps => <Component {...matchProps} />} />
		) : (
			<Redirect to="/" />
		)
	) : (
		<Redirect to="/login" />
	);
};

export default ProtectedRoute;
