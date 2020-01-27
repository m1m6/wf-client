import React, { useState } from "react";
import Button from "../../../form/components/Button";
import { Row, Icon,  message } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../../form/components/InputField";
import Dragger from "antd/lib/upload/Dragger";
import RangeDatePicker from "../../../form/components/RangeDatePicker";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const initialValues = {
	name: "",
	description: "",
	budget: 0,
	dateRange: null,
	tagAndMentions: "",
	media: null
};

const loginSchema = Yup.object().shape({
	email: Yup.string().required("*Required"),
	password: Yup.string().required("*Required")
});

const UPLOAD_MUTATION = gql`
	mutation uploadFile($file: Upload!) {
		uploadFile(file: $file)
	}
`;

const NewCampaign = props => {
	const [upload] = useMutation(UPLOAD_MUTATION);
	const [uploadedFiles, setUploadedFiles] = useState([]);

	const _uploadFile = async event => {
		const file = event.file;

		try {
			event.onProgress(event);
			const response = await upload({
				variables: {
					file
				}
			});
			event.onSuccess(response.data);
		} catch (e) {
			console.log(e);
			event.onError(e);
		}
	};
	return (
		<div className="new-campaign-wrapper">
			<Formik
				initialValues={initialValues}
				// validationSchema={loginSchema}
				onSubmit={async (values, { setSubmitting }) => {
					// try {
					// 	const result = await login({ variables: { ...values } });
					// 	if (result) {
					// 		auth.logIn(result.data.login.token);
					// 		window.location.assign("/");
					// 	}
					// } catch (error) {
					// 	setSubmitting(false);
					// 	showAllGraphQLErrors(error.graphQLErrors);
					// }
				}}
			>
				{({ values, isSubmitting }) => (
					<Form>
						<Row className="new-campaign-row">
							<InputField
								iconType="retweet"
								name="name"
								type="text"
								label="Campaign Name"
								placeholder="Campaign Name"
							/>
						</Row>
						<Row className="new-campaign-row">
							<InputField
								iconType="align-left"
								name="description"
								type="text"
								label="Campaign Description"
								placeholder="Campaign Description"
							/>
						</Row>
						<Row className="new-campaign-row">
							<InputField
								iconType="dollar"
								name="budget"
								type="number"
								label="Campaign Budget"
								placeholder="Campaign Budget"
							/>
						</Row>
						<Row className="new-campaign-row">
							<span className="custom-label">Campaign Range Date</span>
							<RangeDatePicker
								iconType="schedule"
								name="dateRange"
								type="number"
								label="Campaign Date Range"
								placeholder="Campaign Date Range"
							/>
							<span>*Campaigns are limited to a maximum of 90 days.</span>
						</Row>
						<Row className="new-campaign-row">
							<InputField
								iconType="number"
								name="tagAndMentions"
								type="text"
								label="Campaign Tags And Mentions"
								placeholder="#Hashtag @Mention"
							/>
						</Row>
						<Row className="new-campaign-row">
							<span className="custom-label">Promoted Brand:</span>
							<Dragger
								name="file"
								multiple={true}
								customRequest={event => {
									_uploadFile(event);
								}}
								onDownload={e => {
									console.log(e);
									if (e.response && e.response.data) {
										window.open(e.response.data.uploadFile, "_blank");
									}
								}}
								onChange={info => {
									const { status, response } = info.file;
									if (status !== "uploading") {
										console.log(info.file, info.fileList);
									}
									if (status === "done") {
										message.success(
											`${info.file.name} file uploaded successfully.`
										);

										if (response.uploadFile) {
                                            setUploadedFiles([...uploadedFiles, response.uploadFile]);
										}
									} else if (status === "error") {
										message.error(`${info.file.name} file upload failed.`);
									}
								}}
							>
								<p className="ant-upload-drag-icon">
									<Icon type="inbox" />
								</p>
								<p className="ant-upload-text">Promoted Brand</p>
								<p className="ant-upload-hint">
									Drag and drop image here, or click to upload.
								</p>
							</Dragger>
						</Row>
						<Row>
							<Button
								htmlType="submit"
								type="primary"
								disabled={isSubmitting}
								className="wf-btn-primary"
							>
								{isSubmitting ? (
									"PROCESSING..."
								) : (
									<>
										Create
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
export default NewCampaign;
