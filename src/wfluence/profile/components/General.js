import React from 'react';
import { nFormatter } from '../../../utils/numberUtils';

const General = ({
    title,
    globalRank,
    followersReach,
    erValue,
    followersCount,
    contactDetials
}) => {
    const qualityAudience = followersReach
        ? followersCount * (followersReach.real / 100 + followersReach.infs / 100)
        : '-';
    const authenticEngagement = followersReach
        ? erValue * followersCount * (followersReach.real / 100 + followersReach.infs / 100)
        : '-';
    return (
        <div className="profile-half-row">
            <div className="half-chart-header">
                <span className="h-header">{title}</span>
            </div>
            <div className="general-area">
                <div className="g-area-item">
                    <div className="ga-label">Global Rank</div>
                    <div className="ga-value">{globalRank}</div>
                </div>
                <div className="g-area-item">
                    <div className="ga-label">Quality Audience</div>
                    <div className="ga-value">{nFormatter(qualityAudience)}</div>
                </div>
                <div className="g-area-item">
                    <div className="ga-label">Authentic Engagement</div>
                    <div className="ga-value">
                        {nFormatter(authenticEngagement)} <span>Per Post</span>
                    </div>
                </div>
            </div>
            <div className="contact-details">
                <div className="g-area-item">
                    <div className="ga-label">Email:</div>
                    <div className="ga-value">
                        {contactDetials && contactDetials.emails && contactDetials.emails.length
                            ? contactDetials.emails.map(email => <div>{email}</div>)
                            : '-'}
                    </div>
                </div>
                <div className="g-area-item">
                    <div className="ga-label">Phone:</div>
                    <div className="ga-value">
                        {contactDetials && contactDetials.phones && contactDetials.phones.length
                            ? contactDetials.phones.map(phone => <div>{phone}</div>)
                            : '-'}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default General;
