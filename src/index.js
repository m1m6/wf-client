import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import {apolloClient} from './apolloClient'
import "tachyons";
import "./index.scss";
import RootContainer from "./components/RootContainer";
import { AUTH_TOKEN } from "./constants";

const token = localStorage.getItem(AUTH_TOKEN);

ReactDOM.render(
	<ApolloProvider client={apolloClient}>
    <ApolloHooksProvider client={apolloClient}>
		{/* <Router>
			<Fragment>
				<nav className="pa3 pa4-ns">
					<Link
						className="link dim black b f6 f5-ns dib mr3"
						to="/"
						title="Feed"
					>
						Blog
					</Link>
					<NavLink
						className="link dim f6 f5-ns dib mr3 black"
						activeClassName="gray"
						exact={true}
						to="/"
						title="Feed"
					>
						Feed
					</NavLink>
					<NavLink
						className="link dim f6 f5-ns dib mr3 black"
						activeClassName="gray"
						exact={true}
						to="/drafts"
						title="Drafts"
					>
						Drafts
					</NavLink>
					<Link
						to="/create"
						className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
					>
						+ Create Draft
					</Link>
				</nav>
				<div className="fl w-100 pl4 pr4">
					<Switch>
						<Route exact path="/" component={FeedPage} />
						<Route path="/drafts" component={DraftsPage} />
						<Route path="/create" component={CreatePage} />
						<Route path="/post/:id" component={DetailPage} />
					</Switch>
				</div>
			</Fragment>
		</Router> */}
		<RootContainer token={token} />
    </ApolloHooksProvider>
	</ApolloProvider>,
	document.getElementById("root")
);
