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
	const [userRole, setUserRole] = useState(undefined);

	const [setUserData] = useUserData();

	async function setUserDataAsync() {
		if (!loading) {
			const { id, name, email, role } = data.me;
			setUserRole(role);
			await setUserData({ variables: { id, name, email, role } });
		}
	}

	if (loading) {
		return <Spin spinning={loading} size="large" delay={500} />;
	}

	if (userRole === undefined && data && data.me) {
		setUserDataAsync();
	}

	return token ? (
		<Layout>
			<Sidebar userRole={userRole} />
			<Content className="app-page-wrapper" id="app-page-wrapper-id">
				<Routes userRole={userRole} />
			</Content>
		</Layout>
	) : (
		<Routes />
	);
};
export default App;
