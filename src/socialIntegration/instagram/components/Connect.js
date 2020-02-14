/*global FB*/
import React, { useEffect, useState } from "react";
import { message } from "antd";
import { linkIgAccountToProfileMutation } from "../gql";
import { useLinkIgProfileMutation } from "../useProfile";
import Link from "../../../form/components/Link";

const FACEBOOK_APP_ID = "439988173597089";
const FACEBOOK_API_VERSION = "v5.0"; // e.g. v2.10

const Connect = ({}) => {
	const [loading, setLoading] = useState(false);
	const [loadingJS, setLoadingJS] = useState(false);
	const [successLinking, setSuccessLinking] = useState(false);
	const [lingProfileMutation] = useLinkIgProfileMutation();

	useEffect(() => {
		initializeFacebookSDK();
	}, []);

	const initializeFacebookSDK = () => {
		setLoadingJS(true);
		// Load the SDK asynchronously
		(function(d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		})(document, "script", "facebook-jssdk");

		window.fbAsyncInit = function() {
			FB.init({
				appId: FACEBOOK_APP_ID,
				cookie: true, // enable cookies to allow the server to access the session
				version: FACEBOOK_API_VERSION // use Facebook API version
			});
		};
		setLoadingJS(false);
	};

	const handleFBLogin = async () => {
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
		setLoading(true);
		if (facebookResponse.status === "connected") {
			await getMeAccounts();
		} else {
			message.warning("Unable to connect your instagram account.");
			console.warn(`User did not authorize the Facebook application.`);
			setLoading(false);
		}
	};

	const getMeAccounts = async () => {
		// Testing Graph API after login.  See statusChangeCallback() for when this call is made.
		console.log("Welcome!  Fetching your information.... ");
		FB.api("/me/accounts", function(response) {
			if (
				response &&
				response.data &&
				response.data[0] &&
				response.data[0].id
			) {
				const { id: pageId, access_token } = response.data[0];
				fetchConnectedIgAccounts(pageId, access_token);
			} else {
				message.warning("Unable to find connected instagram account.");
				setLoading(false);
			}
		});
	};

	const fetchConnectedIgAccounts = (pageId, access_token) => {
		FB.api(
			`${pageId}?fields=instagram_business_account&access_token=${access_token}`,
			function(response) {
				console.log("fetchConnectedIgAccounts", response);
				if (response && response.instagram_business_account) {
					const { id: igUserId } = response.instagram_business_account;
					fetchIgMetaData(igUserId, pageId, access_token);
				}
			}
		);
	};

	const fetchIgMetaData = (igUserId, pageId, access_token) => {
		FB.api(
			`${igUserId}?fields=username&access_token=${access_token}`,
			async function(response) {
				if (response && response.username) {
					const { username } = response;

					message.success(
						`You've successfully linked your instagram account.\nYour profile setup will be done in 1 hour at most. `,
						10
					);
					setSuccessLinking(true);

					await lingProfileMutation({
						variables: { username, igUserId, pageId, accessToken: access_token }
					});
				}

				setLoading(false);
			}
		);
	};

	return loadingJS ? (
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

					{loading ? (
						<div>Fetching your data...</div>
					) : successLinking ? (
						<Link
							style={{ marginTop: "15px", fontSize: "20px", display: "block" }}
							label="Go To Your Campaigns"
							to="/my-campaigns"
						/>
					) : (
						<button
							class="loginBtn loginBtn--facebook"
							onClick={async () => handleFBLogin()}
						>
							Log in With Facebook
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
export default Connect;
