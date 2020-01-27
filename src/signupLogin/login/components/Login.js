import React from "react";
import { Row, Icon } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../../form/components/InputField";
import Button from "../../../form/components/Button";
import Link from "../../../form/components/Link";
import { useLogin } from "../useLogin";
import { showAllGraphQLErrors } from "../../../helper/graphqlErrors";
import { auth } from "../../auth";
import { useUserData } from "../useUserDataMutations";

const initialValues = {
	email: "",
	password: ""
};

const loginSchema = Yup.object().shape({
	email: Yup.string().required("*Required"),
	password: Yup.string().required("*Required")
});

const Login = ({routerHistory}) => {
	const [login] = useLogin();
	return (
		<div className="login-wrapper">
			<p>
				Don’t have an account? <Link to="/signup" label="Create an account" />
			</p>
			<Formik
				initialValues={initialValues}
				validationSchema={loginSchema}
				onSubmit={async (values, { setSubmitting }) => {
					try {
						const result = await login({ variables: { ...values } });
						if (result) {
							auth.logIn(result.data.login.token);
							window.location.assign("/");
						}
					} catch (error) {
						setSubmitting(false);
						showAllGraphQLErrors(error.graphQLErrors);
					}
				}}
			>
				{({ values, isSubmitting }) => (
					<Form>
						<Row className="auth-row">
							<InputField
								iconType="user"
								name="email"
								type="text"
								label="Email"
								placeholder="name@company.com"
							/>
						</Row>
						<Row className="auth-row">
							<InputField
								iconType="lock"
								name="password"
								type="password"
								label="Password"
								placeholder="***********"
							/>
						</Row>
						<Row className="forgot-pwd-link">
							<p>
								<Link to="/signup" label="Forgot your password?" />
							</p>
						</Row>
						<Row>
							<Button
								htmlType="submit"
								type="primary"
								disabled={isSubmitting}
								className="wf-btn-primary"
							>
								{isSubmitting ? (
									"LOGGING IN..."
								) : (
									<>
										LOG IN
										<Icon type="arrow-right" />
									</>
								)}
							</Button>
						</Row>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Login;
