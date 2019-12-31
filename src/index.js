import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { apolloClient } from "./apolloClient";
import "./index.scss";
import App from "./App";
import { browserHistory } from "./browserHistory";

ReactDOM.render(
	<ApolloProvider client={apolloClient}>
		<ApolloHooksProvider client={apolloClient}>
			<Router history={browserHistory}>
				<App />
			</Router>
		</ApolloHooksProvider>
	</ApolloProvider>,
	document.getElementById("root")
);
