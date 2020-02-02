import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import PageLayout from "./components/PageLayout";
import AuthPageLayout from "./components/AuthPageLayout";
import Login from "./signupLogin/login/components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Discover from "./wfluence/discover/components/Discover";
import Profile from "./wfluence/profile/components/Profile";
import Campaigns from "./wfluence/campaign/components/Campaigns";
import NewCampaign from "./wfluence/campaign/components/NewCampaign";
import CampaignView from "./wfluence/campaign/components/CampaignView";

export const ROUTE_PATHS = {
	home: "/",
	notFound: "*",
	app: {
		discover: "/discover",
		profile: "/profile/:id",
		campaign: "/campaigns",
		newCampaign: "/campaigns/new",
		campaignView: "/campaign-view/:id"
	},
	auth: {
		me: "/me", // TODO add
		signup: "/signup",
		login: "/login",
		logout: "/logout",
		passwordForgot: "/password-forgot", // TODO add
		passwordReset: "/password-reset/:token", // TODO add
		brands: "/brands"
	}
};

const Routes = () => (
	<Switch>
		<ProtectedRoute
			path={ROUTE_PATHS.home}
			exact
			component={matchProps => (
				<PageLayout Component={Home} {...matchProps} title="Home page" />
			)}
		/>

		<ProtectedRoute
			path={ROUTE_PATHS.app.discover}
			component={matchProps => (
				<PageLayout Component={Discover} {...matchProps} title="Discover" />
			)}
		/>

		<ProtectedRoute
			path={ROUTE_PATHS.app.profile}
			component={matchProps => (
				<PageLayout Component={Profile} {...matchProps} title="Profile" />
			)}
		/>

		<ProtectedRoute
			path={ROUTE_PATHS.app.campaign}
			exact
			component={matchProps => (
				<PageLayout
					Component={Campaigns}
					{...matchProps}
					title="Campaigns List"
				/>
			)}
		/>
		<ProtectedRoute
			path={ROUTE_PATHS.app.newCampaign}
			exact
			component={matchProps => (
				<PageLayout
					Component={NewCampaign}
					{...matchProps}
					title="Create New Campaign"
				/>
			)}
		/>
		<ProtectedRoute
			path={ROUTE_PATHS.app.campaignView}
			exact
			component={matchProps => (
				<PageLayout
					Component={CampaignView}
					{...matchProps}
					title="Campaign Tracking"
				/>
			)}
		/>
		<Route
			path={ROUTE_PATHS.auth.brands}
			exact
			render={matchProps => (
				<AuthPageLayout
					Component={SignupPage}
					title="Sign Up"
					{...matchProps}
				/>
			)}
		/>
		<Route
			path={ROUTE_PATHS.auth.login}
			exact
			render={matchProps => (
				<AuthPageLayout Component={Login} title="Log In" {...matchProps} />
			)}
		/>
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
