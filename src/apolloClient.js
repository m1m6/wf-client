import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink, split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { WebSocketLink } from "apollo-link-ws";

import { ACCESS_TOKEN } from "./constants";

const httpLink = createHttpLink({ uri: "http://localhost:4000" });

const middlewareLink = new ApolloLink((operation, forward) => {
	const tokenValue = localStorage.getItem(ACCESS_TOKEN);
	operation.setContext({
		headers: {
			Authorization: tokenValue ? `Bearer ${tokenValue}` : ""
		}
	});
	return forward(operation);
});

const wsLink = new WebSocketLink({
	uri: `ws://localhost:4000`,
	options: {
		reconnect: true,
		connectionParams: {
			Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
		}
	}
});

const httpLinkAuth = middlewareLink.concat(httpLink);

const link = split(
	// split based on operation type
	({ query }) => {
		const { kind, operation } = getMainDefinition(query);
		return kind === "OperationDefinition" && operation === "subscription";
	},
	wsLink,
	httpLinkAuth
);

// // apollo client setup
export const apolloClient = new ApolloClient({
	link: ApolloLink.from([link]),
	cache: new InMemoryCache(),
	connectToDevTools: true
});
