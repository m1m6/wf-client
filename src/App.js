import React, { useEffect, useState } from "react";
import Layout from "./layout/Layout";
import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";
import Routes from "./routes";
import { auth } from "./signupLogin/auth";
import { useMeQuery } from "./rootUseQuery";
import { Spin } from "antd";
import { useUserData } from "./signupLogin/login/useUserDataMutations";
const token = auth.getAccessToken();

const App = () => {
	const { loading, data, error } = useMeQuery();
	const [setUserData] = useUserData();

	async function setUserDataAsync() {
		if (!loading) {
			const {id, name, email} = data.me
			await setUserData({ variables: { id, name, email } });
		}
	}
	useEffect( () => {
		setUserDataAsync();
	}, []);

	return loading ? (
		<Spin spinning={loading} size="large" delay={500} />
	) : token ? (
		<Layout>
			<Sidebar />
			<Content className="app-page-wrapper">
				<Routes />
			</Content>
		</Layout>
	) : (
		<Routes />
	);
};
export default App;
