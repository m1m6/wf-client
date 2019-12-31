import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";

export const ROUTE_PATHS = {
	home: "/",
	notFound: "*",
	app: {
		main: "/main"
	},
	auth: {
		me: "/me", // TODO add
		signup: "/signup",
		login: "/login",
		logout: "/logout",
		passwordForgot: "/password-forgot", // TODO add
		passwordReset: "/password-reset/:token" // TODO add
	}
};

const Routes = () => (
	<Switch>
		<Route path={ROUTE_PATHS.home} exact component={Home} />
		<Route path={ROUTE_PATHS.auth.signup} exact component={SignupPage} />
		<Route path={ROUTE_PATHS.auth.login} exact component={LoginPage} />
		{/* <ProtectedRoute
      path={ROUTE_PATHS.blog.create}
      exact
      component={CreatePagePage}
    />
    <ProtectedRoute
      path={ROUTE_PATHS.blog.edit()}
      exact
      component={EditPagePage}
    />
    <Route path={ROUTE_PATHS.blog.detail()} exact component={DetailPage} />
    <ProtectedRoute path={ROUTE_PATHS.auth.me} exact component={MePage} />
    <Route path={ROUTE_PATHS.auth.register} exact component={RegisterPage} />
    <Route path={ROUTE_PATHS.auth.login} exact component={LoginPage} />
    <Route
      exact
      path={ROUTE_PATHS.auth.passwordForgot}
      component={PasswordForgotPage}
    />
    <Route
      exact
      path={ROUTE_PATHS.auth.passwordReset}
      component={PasswordResetPage}
    />
    <ProtectedRoute
      path={ROUTE_PATHS.auth.logout}
      exact
      component={LogoutPage}
    /> */}
		<Route path={ROUTE_PATHS.notFound} exact component={PageNotFound} />
	</Switch>
);

export default Routes;
