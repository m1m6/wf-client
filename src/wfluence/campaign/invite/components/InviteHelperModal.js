import React, { useState } from 'react';
import { Modal, Steps, Button, message } from 'antd';

const { Step } = Steps;

const InviteHelperModal = ({ helperModalVisible, setHelperModalVisible }) => {
	const [step, setStep] = useState(0);

	const handleClose = async () => {
		setHelperModalVisible(false);
	};

	const onChange = current => {
		setStep(current);
	};

	return (
		<Modal
			centered
			title="Invite Influencers to Share Their Instagram Stories & Posts Reach in 3 Easy
            Steps:"
			visible={helperModalVisible}
			onOk={handleClose}
			onCancel={handleClose}
			closable={true}
			maskClosable={false}
			width={'50vw'}
		>
			<div>
				<Steps current={step} onChange={onChange}>
					<Step
						title="Invite Influencers"
						description="We'll send a friendly branded email inviting influencers to join your campaign."
					/>
					<Step
						title="Influencer Verification"
						description="Influencers easily verify by logging into their Facebook profiles with one click."
					/>
					<Step
						title="Track"
						description={`Once an influencer is verified, you'll see an "accepted" status update in this dashboard. Then you're good to see Stories data for their campaign!`}
					/>
				</Steps>
			</div>
		</Modal>
	);
};

export default InviteHelperModal;
