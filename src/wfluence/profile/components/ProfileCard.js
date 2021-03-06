import React from 'react';
import { Icon, Skeleton } from 'antd';
import uniq from 'lodash/uniq';
import ReactCountryFlag from 'react-country-flag';
import { getCountryCode } from '../../../assets/js/countries';
import { nFormatter } from '../../../utils/numberUtils';
import { Link } from 'react-router-dom';
import { parseProfileCategories, getProfileTags } from '../utils';

const ProfileCard = ({ loading, profile }) => {
    if (loading) {
        return <Skeleton avatar loading={loading} active />;
    }
    const countryCode = getCountryCode(profile.location);
    const categories = parseProfileCategories(profile.categories);
    const mostUsedTags = getProfileTags(profile.media);
    const tagsKeys = Object.keys(mostUsedTags);
    return (
        <Link to={`/profile/${profile.id}`} className="pointer">
            <div className="profile-card pointer">
                <div className="profile-image">
                    <img src={profile.profilePic} width={110} height={110} />
                </div>
                <div className="profile-data">
                    <div className="fullname">{profile.name}</div>

                    <div className="username">
                        <Link to={`/profile/${profile.id}`}>
                            <Icon type="instagram" /> {profile.username}
                        </Link>
                    </div>

                    <div className="metadata">
                        <span>
                            <ReactCountryFlag countryCode={countryCode} /> {countryCode}
                        </span>
                        <span>Female</span>
                        <span>Fashion</span>
                    </div>
                    <div className="top-tags">
                        <React.Fragment>
                            {tagsKeys.length > 0 &&
                                [0, 1, 2].map(i => {
                                    const key = tagsKeys[i];
                                    return (
                                        mostUsedTags[key] && (
                                            <span className="tag-item" onClick={e => {}}>
                                                {mostUsedTags[key].substring(0, 6)}
                                            </span>
                                        )
                                    );
                                })}
                            {tagsKeys.length > 3 && (
                                <span
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {}}
                                    className="more-counter"
                                >{`+${tagsKeys.length - 3} more`}</span>
                            )}
                        </React.Fragment>
                    </div>

                    <div className="card-footer">
                        <div className="footer-item">
                            <div className="count">{nFormatter(profile.followersCount)}</div>
                            <div className="label">Followers</div>
                        </div>
                        <div className="footer-item">
                            <div className="count">{nFormatter(profile.mediaCount)}</div>
                            <div className="label">Posts</div>
                        </div>
                        <div className="footer-item">
                            <div className="count">
                                {profile.engRateValue
                                    ? `${nFormatter(profile.engRateValue.toFixed(2))}%`
                                    : 'N/A'}
                            </div>
                            <div className="label">Eng. Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProfileCard;
