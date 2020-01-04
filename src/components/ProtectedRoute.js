import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../signupLogin/auth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const token = auth.getAccessToken();
	console.log("token", token)
	return token ? (
		<Route {...rest} render={matchProps => <Component {...matchProps} />} />
	) : (
		<Redirect to="/login" />
	);
};

export default ProtectedRoute;
