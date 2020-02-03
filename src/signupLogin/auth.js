import { ACCESS_TOKEN, CREATOR_FIRST_TIME } from "../constants";

export const auth = {
	logIn: token => {
		auth.setAccessToken(token);
	},

	logOut: () => {
		auth.removeAccessToken();
	},

	creatorFirstTime: value => {
		auth.setFirstTime(value);
	},

	// Access Token
	setAccessToken: token => localStorage.setItem(ACCESS_TOKEN, token),
	getAccessToken: () => localStorage.getItem(ACCESS_TOKEN),
	setFirstTime: value => localStorage.setItem(CREATOR_FIRST_TIME, value),
	getFirstTime: () => localStorage.getItem(CREATOR_FIRST_TIME),
	removeAccessToken: () => localStorage.removeItem(ACCESS_TOKEN)
};
