import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import PageLayout from './components/PageLayout';
// import AuthPageLayout from './components/AuthPageLayout';
// import Login from './signupLogin/login/components/Login';
import ProtectedRoute from './components/ProtectedRoute';
// import Discover from './wfluence/discover/components/Discover';
// import Profile from './wfluence/profile/components/Profile';
// import Campaigns from './wfluence/campaign/components/Campaigns';
// import NewCampaign from './wfluence/campaign/components/NewCampaign';
// import CampaignView from './wfluence/campaign/components/CampaignView';
// import Signup from './signupLogin/signup/components/Signup';
import { ROLES } from './signupLogin/constants';
import Privacy from './components/Privacy';
// import { auth } from './signupLogin/auth';
// import Connect from './socialIntegration/instagram/components/Connect';
// import CreatorCampaigns from './wfluence/campaign/components/CreatorCampaigns';
// import CampaignOffer from './wfluence/campaign/components/CampaignOffer';
// import UserProfile from './userProfile/profile/components/UserProfile';
// import Notifications from './user/notifications/Notifications';

export const ROUTE_PATHS = {
    home: '/',
    brands: '/brands/:id',
    privacyPolicy: '/privacy-policy',
    notFound: '*',
    app: {
        discover: '/discover',
        profile: '/profile/:id',
        campaign: '/campaigns',
        newCampaign: '/campaigns/new',
        campaignView: '/campaign-view/:id',
        connectIg: '/connect',
        creatorCampaigns: '/creator-campaigns',
        campaignOffer: '/campaign-offer/:id',
        notifications: '/notifications',
    },
    auth: {
        me: '/me', // TODO add
        signup: '/signup',
        login: '/login',
        logout: '/logout',
        passwordForgot: '/password-forgot', // TODO add
        passwordReset: '/password-reset/:token', // TODO add
        brands: '/brands',
        creators: '/creators',
        accountSettings: '/account-settings',
    },
};

const Routes = ({ userRole }) => {
    return (
        <Switch>
            <ProtectedRoute
                path={ROUTE_PATHS.home}
                component={(matchProps) => (
                    <PageLayout Component={Home} {...matchProps} title="Home page" />
                )}
                exact
                roles={[ROLES.ADMIN, ROLES.BRANDS, ROLES.CREATORS]}
                userRole={userRole}
            />

            <ProtectedRoute
                path={ROUTE_PATHS.brands}
                component={(matchProps) => (
                    <PageLayout Component={Home} {...matchProps} title="Home page" />
                )}
                roles={[ROLES.ADMIN, ROLES.BRANDS, ROLES.CREATORS]}
                userRole={userRole}
            />
            <ProtectedRoute
                path={ROUTE_PATHS.privacyPolicy}
                component={(matchProps) => (
                    <PageLayout Component={Privacy} {...matchProps} title="Home page" />
                )}
            />
            {/* <ProtectedRoute
                path={ROUTE_PATHS.home}
                exact
                component={matchProps => (
                    <PageLayout Component={Home} {...matchProps} title="Home page" />
                )}
                roles={[ROLES.ADMIN, ROLES.BRANDS, ROLES.CREATORS]}
                userRole={userRole}
            /> */}
            {/* <ProtectedRoute
                path={ROUTE_PATHS.app.discover}
                component={matchProps => (
                    <PageLayout Component={Discover} {...matchProps} title="Discover" />
                )}
                roles={[ROLES.ADMIN, ROLES.BRANDS]}
            /> */}
            {/* 
            <ProtectedRoute
                path={ROUTE_PATHS.auth.accountSettings}
                component={matchProps => (
                    <PageLayout Component={UserProfile} {...matchProps} title="User Profile" />
                )}
                roles={[ROLES.ADMIN, ROLES.BRANDS]}
                userRole={userRole}
            /> */}
            {/* 
            <ProtectedRoute
                path={ROUTE_PATHS.app.profile}
                component={matchProps => (
                    <PageLayout Component={Profile} {...matchProps} title="Profile" />
                )}
                roles={[ROLES.ADMIN, ROLES.BRANDS]}
                userRole={userRole}
            /> */}
            {/* 
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
                roles={[ROLES.ADMIN, ROLES.BRANDS]}
                userRole={userRole}
            /> */}

            {/* <ProtectedRoute
                path={ROUTE_PATHS.app.campaign}
                exact
                component={matchProps => (
                    <PageLayout Component={Campaigns} {...matchProps} title="Campaigns List" />
                )}
                roles={[ROLES.ADMIN, ROLES.BRANDS, ROLES.CREATORS]}
                userRole={userRole}
            /> */}
            {/* <ProtectedRoute
                path={ROUTE_PATHS.app.newCampaign}
                exact
                component={matchProps => (
                    <PageLayout
                        Component={NewCampaign}
                        {...matchProps}
                        title="Create New Campaign"
                    />
                )}
                roles={[ROLES.ADMIN, ROLES.BRANDS]}
                userRole={userRole}
            /> */}
            {/* <ProtectedRoute
                path={ROUTE_PATHS.app.campaignView}
                exact
                component={matchProps => (
                    <PageLayout
                        Component={CampaignView}
                        {...matchProps}
                        title="Campaign Tracking"
                    />
                )}
                roles={[ROLES.ADMIN, ROLES.BRANDS, ROLES.CREATORS]}
                userRole={userRole}
            /> */}

            {/* <ProtectedRoute
                path={ROUTE_PATHS.app.creatorCampaigns}
                exact
                component={matchProps => (
                    <PageLayout
                        Component={CreatorCampaigns}
                        {...matchProps}
                        title="My Participation In Campaigns"
                    />
                )}
                roles={[ROLES.ADMIN, ROLES.CREATORS]}
                userRole={userRole}
            /> */}

            {/* <ProtectedRoute
                path={ROUTE_PATHS.app.campaignOffer}
                exact
                component={matchProps => (
                    <PageLayout Component={CampaignOffer} {...matchProps} title="Campaign Offer" />
                )}
                roles={[ROLES.ADMIN, ROLES.CREATORS]}
                userRole={userRole}
            /> */}
            {/* 
            <ProtectedRoute
                path={ROUTE_PATHS.app.notifications}
                component={matchProps => (
                    <PageLayout
                        Component={Notifications}
                        {...matchProps}
                        title="My Notifications"
                    />
                )}
                roles={[ROLES.ADMIN, ROLES.CREATORS, ROLES.BRANDS]}
                userRole={userRole}
            /> */}

            {/* <Route
                path={ROUTE_PATHS.auth.brands}
                exact
                render={matchProps => (
                    <AuthPageLayout Component={Signup} title="Signup As Brand" {...matchProps} />
                )}
            /> */}

            {/* <ProtectedRoute
                path={ROUTE_PATHS.app.connectIg}
                component={matchProps => (
                    <PageLayout
                        Component={Connect}
                        {...matchProps}
                        title="Connect Your Instagram Account"
                    />
                )}
                roles={[ROLES.ADMIN, ROLES.CREATORS]}
                userRole={userRole}
            /> */}

            {/* <Route
                path={ROUTE_PATHS.auth.creators}
                exact
                render={matchProps => (
                    <AuthPageLayout
                        Component={Signup}
                        title="Signup As Creator"
                        role="CREATOR"
                        {...matchProps}
                    />
                )}
            /> */}
            {/* 
            <Route
                path={ROUTE_PATHS.auth.login}
                exact
                render={matchProps => (
                    <AuthPageLayout Component={Login} title="Log In" {...matchProps} />
                )}
            /> */}
            {/* <ProtectedRoute
			<ProtectedRoute
				path={ROUTE_PATHS.app.campaignOffer}
				exact
				component={matchProps => (
					<PageLayout Component={CampaignOffer} {...matchProps} title="Campaign Offer" />
				)}
				roles={[ROLES.ADMIN, ROLES.CREATORS]}
				userRole={userRole}
			/>

			<ProtectedRoute
				path={ROUTE_PATHS.app.connectIg}
				component={matchProps => (
					<PageLayout Component={Connect} {...matchProps} title="Connect Your Instagram Account" />
				)}
				roles={[ROLES.ADMIN, ROLES.CREATORS]}
				userRole={userRole}
			/>

			

			<Route
				path={ROUTE_PATHS.auth.brands}
				exact
				render={matchProps => (
					<AuthPageLayout Component={Signup} title="Signup As Brand" {...matchProps} />
				)}
			/>

			<Route
				path={ROUTE_PATHS.auth.creators}
				exact
				render={matchProps => (
					<AuthPageLayout
						Component={Signup}
						title="Signup As Creator"
						role="CREATOR"
						{...matchProps}
					/>
				)}
			/>

			<Route
				path={ROUTE_PATHS.auth.login}
				exact
				render={matchProps => <AuthPageLayout Component={Login} title="Log In" {...matchProps} />}
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
};

export default Routes;
