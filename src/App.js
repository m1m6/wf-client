import React from "react";
import Layout from "./layout/Layout";
import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";
import Routes from "./routes";
import { ACCESS_TOKEN } from "./constants";
import { auth } from "./signupLogin/auth";

const token = auth.getAccessToken();

const App = () =>
	token ? (
		<>
			<Layout>
				<Sidebar />
				<Content className="app-page-wrapper">
					<Routes />
				</Content>
			</Layout>
		</>
	) : (
		<Routes />
	);

export default App;
