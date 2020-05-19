import React from 'react';
import * as Yup from 'yup';
import InputField from '../form/components/InputField';
import { Formik } from 'formik';
import { Form, Row, Icon, message } from 'antd';
import Button from '../form/components/Button';
import { useContactForm } from '../rootUseMutation';
import { showAllGraphQLErrors } from '../helper/graphqlErrors';

const initialValues = {
    email: '',
    message: '',
};

const loginSchema = Yup.object().shape({
    email: Yup.string().email().required('*Required'),
    message: Yup.string().required('*Required'),
});

const Footer = ({ history, Component, title, ...rest }) => {
    const [contactForm] = useContactForm();
    return (
        <div className="footer" style={{ width: '100%' }}>
            <div style={{ width: '50%' }} className="contact-form">
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
                    <div className="title">Would you like to get more reports? Let us know...</div>
                    <div style={{ width: '70%' }} className="inner-contact-form">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={loginSchema}
                            onSubmit={async (values, { setSubmitting, resetForm }) => {
                                console.log('qweqeqe');
                                try {
                                    console.log('qweqeqe');
                                    await contactForm({ variables: { ...values } });
                                    message.success(`We've received your message!`);
                                    resetForm();
                                } catch (error) {
                                    setSubmitting(false);
                                    showAllGraphQLErrors(error.graphQLErrors);
                                }
                            }}
                        >
                            {({ values, isSubmitting, handleSubmit }) => (
                                <Form>
                                    <Row className="row" style={{ marginTop: '0px' }}>
                                        <InputField
                                            iconType="user"
                                            name="email"
                                            type="text"
                                            label="Email"
                                            placeholder="name@company.com"
                                        />
                                    </Row>
                                    <Row className="row" style={{ marginTop: '20px' }}>
                                        <InputField
                                            iconType="lock"
                                            name="message"
                                            type="textarea"
                                            label="Message"
                                            placeholder="What's in your mind?"
                                        />
                                    </Row>

                                    <Row>
                                        <Button
                                            htmlType="submit"
                                            type="primary"
                                            disabled={isSubmitting}
                                            className="wf-btn-primary-v2"
                                            onClick={handleSubmit}
                                        >
                                            {isSubmitting ? (
                                                'SENDING...'
                                            ) : (
                                                <>
                                                    SEND
                                                    <Icon type="arrow-right" />
                                                </>
                                            )}
                                        </Button>
                                    </Row>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <div style={{ width: '50%' }} className="footer-links">
                2019-2020 © Brand Influencers Social. All rights reserved{' '}
               <div> <a href="/privacy-policy">Privacy Policy</a></div>
            </div>
        </div>
    );
};

export default Footer;
