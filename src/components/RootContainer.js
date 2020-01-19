import React, { Component, Fragment, useState, useEffect } from "react";
import {
	NavLink,
	Link,
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import FeedPage from "./FeedPage";
import DraftsPage from "./DraftsPage";
import CreatePage from "./CreatePage";
import DetailPage from "./DetailPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import PageNotFound from "./PageNotFound";
import LogoutPage from "./LogoutPage";
import { AUTH_TOKEN } from "../constants";
import { isTokenExpired } from "../helper/jwtHelper";
import { ME_QUERY } from "./test";
import ProtectedRoute from "./ProtectedRoute";

const RootContainer = props => {
	const [token, setToken] = useState(props.token);
	const { loading, data, error } = useQuery(ME_QUERY);

	useEffect(() => {
		try {
			const token = localStorage.getItem(AUTH_TOKEN);
			if (token !== null && token !== undefined) {
				const expired = isTokenExpired(token);
				if (!expired) {
					setToken(token);
				} else {
					localStorage.removeItem(AUTH_TOKEN);
					setToken(null);
				}
			}
		} catch (e) {
			console.log("error", e);
		}
	}, []);

	const refreshTokenFn = (data = {}) => {
		const token = data[AUTH_TOKEN];
		if (token) {
			localStorage.setItem(AUTH_TOKEN, token);
		} else {
			localStorage.removeItem(AUTH_TOKEN);
		}
		setToken(data[AUTH_TOKEN]);
	};

	const renderRoute = () => {
		return (
			<div className="fl w-100 pl4 pr4">
				<Switch>
					<Route exact path="/" component={FeedPage} />
					<ProtectedRoute token={token} path="/drafts" component={DraftsPage} />
					<ProtectedRoute token={token} path="/create" component={CreatePage} />
					<Route path="/post/:id" component={DetailPage} />
					<Route
						token={token}
						path="/login"
						render={props => <LoginPage refreshTokenFn={refreshTokenFn} />}
					/>
					<Route
						token={token}
						path="/signup"
						render={props => <SignupPage refreshTokenFn={refreshTokenFn} />}
					/>
					<Route path="/logout" component={LogoutPage} />
					<Route component={PageNotFound} />
				</Switch>
			</div>
		);
	};

	return (
		<Router>
			<Fragment>
				{renderNavBar()}
				{renderRoute()}
			</Fragment>
		</Router>
	);
};

export default RootContainer;
