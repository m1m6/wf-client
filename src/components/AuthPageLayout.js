import React, { useLayoutEffect } from 'react';
import { auth } from '../signupLogin/auth';
import authBg from '../assets/imgs/background/authBg.jpg';

const AuthPageLayout = ({ history, Component, title, ...rest }) => {
	useLayoutEffect(() => {
		const token = auth.getAccessToken();
		if (token !== null) {
			history.push('/');
		}
	}, []);
	return (
		<div className="auth-page-layout">
			<div style={{ width: '40%', height: '100%' }}>
				<img src={authBg} class="responsive" />
			</div>

			<div class="auth-page-container">
				<h1>{title}</h1>
				<Component routerHistory={history} {...rest} />
			</div>
		</div>
	);
};

export default AuthPageLayout;
