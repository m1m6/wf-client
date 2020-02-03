/*global FB*/
import React, { useEffect, useState } from "react";

const FACEBOOK_APP_ID = "439988173597089";
const FACEBOOK_API_VERSION = "v6.0"; // e.g. v2.10

const Connect = () => {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		initializeFacebookSDK();
		setLoading(false);
	}, []);

	const initializeFacebookSDK = () => {
		(function(d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = `//connect.facebook.net/en_US/sdk.js#xfbml=1&version=${FACEBOOK_API_VERSION}&appId=${FACEBOOK_APP_ID}`;
			fjs.parentNode.insertBefore(js, fjs);
		})(document, "script", "facebook-jssdk");

		window.fbAsyncInit = function() {
			FB.init({
				appId: FACEBOOK_APP_ID,
				cookie: true, // enable cookies to allow the server to access the session
				version: FACEBOOK_API_VERSION // use Facebook API version
			});
		};
	};

	const handleFBLogin = () => {
		FB.login(
			response => {
				facebookCallback(response);
			},
			{
				scope: "instagram_basic,pages_show_list,instagram_manage_insights"
			}
		);
	};

	const facebookCallback = async facebookResponse => {
		if (facebookResponse.status === "connected") {
			const facebookToken = facebookResponse.authResponse.accessToken;
			console.log("FAcebook token", facebookToken);
			//   const graphcoolResponse = await this.props.authenticateUserMutation({variables: { facebookToken }})
			//   const graphcoolToken = graphcoolResponse.data.authenticateUser.token
			//   localStorage.setItem('graphcoolToken', graphcoolToken)
			//   window.location.reload()
		} else {
			console.warn(`User did not authorize the Facebook application.`);
		}
	};

	const logout = () => {
		localStorage.removeItem("graphcoolToken");
		window.location.reload();
	};

	return loading ? (
		<div>LOADING....</div>
	) : (
		<div className="connect-wrapper">
			<h3>
				WFLUENCE helps Instagram content creators identify their most successful
				content pieces and compare them to other creators on the network.
			</h3>
			<div className="try-it-wrapper">
				<div className="header">Why become an Influencer</div>
				<div className="item">IT PAYS TO BE INFLUENTIAL</div>
				<div className="item">INCREASED FOLLOWERS. ENHANCED ENGAGEMENT.</div>
				<div className="item">RIDE THE CAMPAIGN WAVE</div>

				<div className="login-with-fb">
					<div className="lgh">
						Simply sign in with your Facebook account below to unlock the true
						potential of your content.
					</div>
					<div
						class="fb-login-button"
						data-size="large"
						data-button-type="login_with"
						data-auto-logout-link="false"
                        data-use-continue-as="false"
                        onClick={handleFBLogin}
					>
						Log in With Facebook
					</div>
				</div>
			</div>
		</div>
	);
};
export default Connect;
