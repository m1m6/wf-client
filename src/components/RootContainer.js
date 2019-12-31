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
import {ME_QUERY} from './test'
const ProtectedRoute = ({ component: Component, token, ...rest }) => {
	return token ? (
		<Route {...rest} render={matchProps => <Component {...matchProps} />} />
	) : (
		<Redirect to="/login" />
	);
};

const RootContainer = props => {
	const [token, setToken] = useState(props.token);
  const {loading, data, error} = useQuery(ME_QUERY)

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

	const renderNavBar = () => {
		return (
			<nav className="pa3 pa4-ns">
				<Link className="link dim black b f6 f5-ns dib mr3" to="/" title="Feed">
					Blog
				</Link>
				<NavLink
					className="link dim f6 f5-ns dib mr3 black"
					activeClassName="gray"
					exact={true}
					to="/"
					title="Feed"
				>
					Feed
				</NavLink>
				{data && data.me && data.me.email && token && (
					<NavLink
						className="link dim f6 f5-ns dib mr3 black"
						activeClassName="gray"
						exact={true}
						to="/drafts"
						title="Drafts"
					>
						Drafts
					</NavLink>
				)}
				{token ? (
					<div
						onClick={() => {
							refreshTokenFn &&
								refreshTokenFn({
									[AUTH_TOKEN]: null
								});
							window.location.href = "/";
						}}
						className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
					>
						Logout
					</div>
				) : (
					<Link
						to="/login"
						className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
					>
						Login
					</Link>
				)}
				{data && data.me && data.me.email && token && (
					<Link
						to="/create"
						className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
					>
						+ Create Draft
					</Link>
				)}
			</nav>
		);
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


export default RootContainer