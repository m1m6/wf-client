import React, { useState } from 'react';
import { Modal, Steps, Button, message, Input, Tooltip, Icon, Spin } from 'antd';
import { validateEmail } from '../../../../utils/emailUtils';
import { useUpdateCampaignCreatorEmailMutation } from '../../useMutations';

const InviteByEmail = ({ inviteByEmailModalVisible, setInviteByEmailModalVisible, profile }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [email, setEmail] = useState(undefined);
    const [updateCampaignCreatorEmail] = useUpdateCampaignCreatorEmailMutation();

    const handleClose = async () => {
        setInviteByEmailModalVisible(false);
    };

    const handleSubmit = async () => {
        if (validateEmail(email)) {
            setIsSubmitting(true);
            // send request
            await updateCampaignCreatorEmail({
                variables: { id: profile.campaignCreatorId, email }
            });
            setTimeout(() => {
                setIsSubmitting(false);

                setIsSubmitted(true);
                setInviteByEmailModalVisible(false);
                message.success(`Great! ${profile.name} invited to this campaign`);
            }, 2000);
        } else {
            message.warning('Please enter a valid email address.');
        }
    };

    return (
        <Modal
            centered
            title={`Invite Influencer ${profile.name}:`}
            visible={inviteByEmailModalVisible}
            onOk={handleSubmit}
            onCancel={handleClose}
            closable={true}
            maskClosable={false}
            width={'40vw'}
        >
            <div class="invite-by-email">
                <div class="profile-image-container">
                    <img
                        src={profile.profile_pic_url}
                        class="profile-image"
                        width={40}
                        height={40}
                    />
                </div>
                <div class="influencer-details">
                    <div class="influencer-info">
                        <div class="influencer-name">{profile.name}</div>
                        <div class="influencer-data">
                            <div className={`status ${profile.status.toLowerCase()}`}>
                                {profile.status}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="email-input">
                    <label>Email: </label>
                    <Spin spinning={isSubmitting}>
                        <Input
                            suffix={
                                <Tooltip title="Insert Your Instagram Influencer email">
                                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                                </Tooltip>
                            }
                            disabled={isSubmitted || isSubmitting}
                            placeholder="Influencer email, EX: john@site.com"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            width={'60vw'}
                        />
                    </Spin>
                </div>
            </div>
        </Modal>
    );
};

export default InviteByEmail;
