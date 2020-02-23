import React from "react";
import { Row, Icon, Layout, Col } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../../form/components/InputField";
import Button from "../../../form/components/Button";
import Link from "../../../form/components/Link";
import { useBrandSignup } from "../useMutations";
import { auth } from "../../auth";
import { showAllGraphQLErrors } from "../../../helper/graphqlErrors";
import { ROUTE_PATHS } from "../../../routes";

const background = require("../../../assets/imgs/signupLogin/signin_background.jpg");

const initialValues = {
    email: "",
    password: "",
    name: "",
    role: "BRAND"
};

const signupSchema = Yup.object().shape({
    email: Yup.string().required("*Required"),
    password: Yup.string().required("*Required"),
    name: Yup.string().required("*Required")
});

const Signup = ({ routerHistory, role }) => {
    const [signup] = useBrandSignup();
    if (role) {
        initialValues.role = role;
    }
    return (
        <div className="login-wrapper">
            <p>
                Already have an account? <Link to="/login" label="Login" />
            </p>
            <Formik
                initialValues={initialValues}
                validationSchema={signupSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        const result = await signup({
                            variables: { ...values }
                        });
                        if (result) {
                            auth.logIn(result.data.signup.token);
                            auth.creatorFirstTime(true);
                            window.location.assign(ROUTE_PATHS.app.connectIg);
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
                                name="name"
                                type="text"
                                label="Your Name"
                                placeholder="John Doe"
                            />
                        </Row>

                        <Row className="auth-row">
                            <InputField
                                iconType="email"
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
                        <Row>
                            <Button
                                htmlType="submit"
                                type="primary"
                                disabled={isSubmitting}
                                className="wf-btn-primary"
                            >
                                {isSubmitting ? (
                                    "SIGNING UP..."
                                ) : (
                                    <>
                                        SIGN UP
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

export default Signup;
