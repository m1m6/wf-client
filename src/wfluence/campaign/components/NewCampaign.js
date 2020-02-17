import React, { useState } from 'react';
import Button from '../../../form/components/Button';
import { Row, Icon, message } from 'antd';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../../../form/components/InputField';
import Dragger from 'antd/lib/upload/Dragger';
import RangeDatePicker from '../../../form/components/RangeDatePicker';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import moment from 'moment';
import { useNewCampaign } from '../useMutations';
import { showAllGraphQLErrors } from '../../../helper/graphqlErrors';
const initialValues = {
	name: '',
	description: '',
	budget: 0,
	dateRange: null,
	tagsAndMentions: '',
	media: null
};

const loginSchema = Yup.object().shape({
	email: Yup.string().required('*Required'),
	password: Yup.string().required('*Required')
});

const UPLOAD_MUTATION = gql`
	mutation uploadFile($file: Upload!) {
		uploadFile(file: $file)
	}
`;

const NewCampaign = ({ routerHistory }) => {
	const [upload] = useMutation(UPLOAD_MUTATION);
	const [uploadedFiles, setUploadedFiles] = useState([]);
	const [newCamapgin] = useNewCampaign();
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
					const formValues = {
						...values,
						media: uploadedFiles,
						startDate: moment(values.dateRange[0].toIso).toISOString(),
						endDate: moment(values.dateRange[1]).toISOString()
					};

					try {
						const result = await newCamapgin({ variables: { ...formValues } });
						if (result && result.data && result.data.createCampaign) {
							routerHistory.push(`/campaign-view/${result.data.createCampaign.id}`);
						}
					} catch (error) {
						setSubmitting(false);
						showAllGraphQLErrors(error.graphQLErrors);
					}
				}}
			>
				{({ values, isSubmitting, setFieldValue }) => (
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
								setFieldValue={setFieldValue}
							/>
							<span>*Campaigns are limited to a maximum of 90 days.</span>
						</Row>
						<Row className="new-campaign-row">
							<InputField
								iconType="number"
								name="tagsAndMentions"
								type="text"
								label="Campaign Tags And Mentions"
								placeholder="#Hashtag @Mention"
							/>
						</Row>
						<Row className="new-campaign-row">
							<span className="custom-label">Promoted Brand:</span>
							<Dragger
								name="media"
								multiple={true}
								customRequest={event => {
									_uploadFile(event);
								}}
								onDownload={e => {
									if (e.response && e.response.data) {
										window.open(e.response.data.uploadFile, '_blank');
									}
								}}
								onChange={info => {
									const { status, response } = info.file;
									if (status !== 'uploading') {
										console.log(info.file, info.fileList);
									}
									if (status === 'done') {
										message.success(`${info.file.name} file uploaded successfully.`);

										if (response.uploadFile) {
											setUploadedFiles([...uploadedFiles, response.uploadFile]);
										}
									} else if (status === 'error') {
										message.error(`${info.file.name} file upload failed.`);
									}
								}}
							>
								<p className="ant-upload-drag-icon">
									<Icon type="inbox" />
								</p>
								<p className="ant-upload-text">Promoted Brand</p>
								<p className="ant-upload-hint">Drag and drop image here, or click to upload.</p>
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
									'PROCESSING...'
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
