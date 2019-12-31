import React from "react";
import "antd/dist/antd.css";
import Layout from "./layout/Layout";
import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";
import Routes from "./routes";
import { AUTH_TOKEN } from "./constants";
import LoginPage from "./components/LoginPage";

const token = localStorage.getItem(AUTH_TOKEN);

const App = () =>
	token ? (
		<>
			<Layout>
				<Sidebar />
				<Content>
					<Routes />
				</Content>
			</Layout>
		</>
	) : (
		<Routes />
	);

export default App;
