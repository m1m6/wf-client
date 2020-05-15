import React from 'react';
import { Route } from 'react-router-dom';

// const hasAccess = (roles, userRole) => {
//     return roles.includes(userRole);
// };

const ProtectedRoute = ({ component: Component, userRole, roles, ...rest }) => {
    return <Route {...rest} render={(matchProps) => <Component {...matchProps} />} />;
};

export default ProtectedRoute;
