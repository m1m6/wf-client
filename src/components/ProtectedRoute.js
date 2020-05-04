import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from '../signupLogin/auth';

const hasAccess = (roles, userRole) => {
    return roles.includes(userRole);
};

const ProtectedRoute = ({ component: Component, userRole, roles, ...rest }) => {
    return <Route {...rest} render={(matchProps) => <Component {...matchProps} />} />;
};

export default ProtectedRoute;
