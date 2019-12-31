import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, token, ...rest }) => {
	return token ? (
		<Route {...rest} render={matchProps => <Component {...matchProps} />} />
	) : (
		<Redirect to="/login" />
	);
};

export default ProtectedRoute;
