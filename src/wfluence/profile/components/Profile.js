import React, { useState } from 'react';
import { Icon, Skeleton, Divider } from 'antd';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useProfileQuery } from '../useProfile';
import { nFormatter } from '../../../utils/numberUtils';
import General from './General';
import AQS from './AQS';
import CountryOrCity from './audience/CountryOrCity';
import {
    mapFollowersAudienceToLabelOrValue,
    getAgeAndGenderSeries,
    getAudienceTypeData,
    getFollowersFollowingData,
    getProfileContentTypes,
    getContentTypesSeries,
    getPostsHeatMap,
    getSuggestedPostTime,
    getScoreStatus
} from '../utils';
import { AGE_GROUPS, DAYS } from '../../../charts/constants';
import RingPie from '../../../charts/components/RingPie';
import FollowersOrFollowing from './audience/FollowersOrFollowing';
import uniqBy from 'lodash/uniqBy';
import BasicHeatMap from '../../../charts/components/BasicHeatMap';
const AudienceCountryAndCity = ({
    followersGeography,
    audienceEthnicity,
    followersLanguages,
    demographyByAge,
    demography,
    followersReach,
    followersReachability,
    followersQuality,
    growth,
    audienceThematics,
    followersChart,
    followingChart,
    brandsMentions,
    media,
    engRateValue,
    engRateTitle,
    engRateAvg,
    avgComments,
    avgLikes
}) => {
    const { countries, cities, states } = followersGeography ? followersGeography : {};
    console.log('followersGeography', followersGeography);
    const [showAllInterests, setShowAllInterests] = useState(false);
    const uniqMediaType = uniqBy(media, 'mediaType');
    const postsHeatmap = getPostsHeatMap(media);
    const suggestedPostTime = getSuggestedPostTime(postsHeatmap);
    return (
        <div className="profile-full-row">
            <div className="chart-header">
                <span className="c-header">Audience</span>
            </div>
            <div className="charts-area-wrapper">
                <div className="chart-area">
                    <CountryOrCity
                        title="Audience Countries"
                        xLabels={mapFollowersAudienceToLabelOrValue(countries, 'name')}
                        yData={mapFollowersAudienceToLabelOrValue(countries, 'value')}
                    />
                </div>
                <div className="chart-area">
                    <CountryOrCity
                        title="Audience Cities"
                        xLabels={mapFollowersAudienceToLabelOrValue(cities, 'name')}
                        yData={mapFollowersAudienceToLabelOrValue(cities, 'value')}
                    />
                </div>
                <div className="chart-area">
                    <CountryOrCity
                        title="Audience US States"
                        xLabels={mapFollowersAudienceToLabelOrValue(states, 'name')}
                        yData={mapFollowersAudienceToLabelOrValue(states, 'value')}
                    />
                </div>
            </div>
            <div className="charts-area-wrapper">
                <div className="chart-area">
                    <CountryOrCity
                        title="Audience Cities"
                        xLabels={mapFollowersAudienceToLabelOrValue(audienceEthnicity, 'name')}
                        yData={mapFollowersAudienceToLabelOrValue(audienceEthnicity, 'value')}
                    />
                </div>
                <div className="chart-area">
                    <CountryOrCity
                        title="Followers Languages"
                        xLabels={mapFollowersAudienceToLabelOrValue(followersLanguages, 'code')}
                        yData={mapFollowersAudienceToLabelOrValue(followersLanguages, 'value')}
                    />
                </div>
                <div className="chart-area">
                    <CountryOrCity
                        title="Age & Gender"
                        xLabels={AGE_GROUPS}
                        yData={getAgeAndGenderSeries(demographyByAge, demography)}
                        arrayOfObjectsSeries
                    />
                </div>
            </div>
            <div className="charts-area-wrapper">
                <div className="chart-area">
                    <RingPie title="Audience Type" data={getAudienceTypeData(followersReach)} />
                </div>
                <div className="chart-area">
                    <RingPie title="Most Frequent Post Type" data={getProfileContentTypes(media)} />
                </div>
                <div className="chart-area">
                    <CountryOrCity
                        title="Most Engaging Posts Types"
                        xLabels={uniqMediaType.map(i => i.mediaType)}
                        yData={getContentTypesSeries(media)}
                    />
                </div>
            </div>
            <div className="profile-full-row">
                <div style={{ marginTop: '20px' }}>
                    <BasicHeatMap title="Best Time To Post" data={postsHeatmap} />
                    <div
                        style={{
                            marginLeft: '30px',
                            paddingTop: '10px',
                            fontSize: '24px',
                            paddingBottom: '40px',
                            color: 'black'
                        }}
                    >
                        The best time to post is{' '}
                        {suggestedPostTime.map((item, i) => {
                            return (
                                <span>{`${DAYS[item[1]]} at ${item[0]}${
                                    i < suggestedPostTime.length - 1 ? ', ' : '.'
                                }`}</span>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* <Divider /> */}

            <div className="audience-reach">
                <div className="aud-item">
                    <div className="aud-title">Audience Reachability</div>
                    <div className="aud-desc">
                        {followersReachability && (
                            <div
                                className={classNames(
                                    'aud-score',
                                    getScoreStatus(followersReachability.title)
                                )}
                            >
                                {followersReachability ? followersReachability.title : 'N/A'}
                            </div>
                        )}

                        <div className="aud-results">
                            {followersReachability
                                ? `${followersReachability.value}% of audience have less than 1,500 followings, similar
							accounts have ${followersReachability.avg}% in average`
                                : '-'}
                        </div>
                    </div>
                </div>
                <div className="aud-item">
                    <div className="aud-title">Audience Authenticity</div>
                    <div className="aud-desc">
                        {followersQuality && (
                            <div
                                className={classNames(
                                    'aud-score',
                                    getScoreStatus(followersQuality.title)
                                )}
                            >
                                {followersQuality ? followersQuality.title : 'N/A'}
                            </div>
                        )}

                        <div className="aud-results">
                            {followersQuality
                                ? `${followersQuality.value}% of audience look authentic, similar accounts have ${followersQuality.avg}% of
							authentic audience on average`
                                : '-'}
                        </div>
                    </div>
                </div>
                <div className="aud-item">
                    <div className="aud-title">Growth</div>
                    <div className="aud-desc">
                        {growth && (
                            <div className={classNames('aud-score', getScoreStatus(growth.title))}>
                                {growth ? growth.title : 'N/A'}
                            </div>
                        )}

                        <div className="aud-results">{growth ? growth.description : '-'}</div>
                    </div>
                </div>
                <div className="aud-item">
                    <div className="aud-title">Audience Interests</div>
                    <div className="aud-desc">
                        <div className="aud-sub-title">{growth ? growth.title : '-'}</div>
                        <div className="aud-results">
                            {audienceThematics &&
                                (showAllInterests
                                    ? audienceThematics
                                    : [
                                          audienceThematics[0],
                                          audienceThematics[1],
                                          audienceThematics[2]
                                      ]
                                ).map((thematic, i) => {
                                    if (i === 3 && showAllInterests === false) {
                                        return false;
                                    }
                                    return (
                                        <div className="aud-thematic">
                                            <span className="thematic-name">{thematic[0]}</span>
                                            <span className="right-aud-wrap">
                                                <span className="thematic-value">{`${(
                                                    thematic[1] * 100
                                                ).toFixed(0)}%`}</span>
                                                <span className="thematic-prog">
                                                    <span
                                                        style={{
                                                            width: `${(thematic[1] * 100).toFixed(
                                                                0
                                                            )}%`,
                                                            backgroundColor: '#264679',
                                                            display: 'flex',
                                                            height: '16px'
                                                        }}
                                                    ></span>
                                                </span>
                                            </span>
                                        </div>
                                    );
                                })}
                        </div>
                        <span
                            style={{
                                textDecoration: 'underline',
                                color: 'blue',
                                cursor: 'pointer'
                            }}
                            onClick={() => setShowAllInterests(!showAllInterests)}
                        >
                            {showAllInterests ? 'Hide' : 'Show All'}
                        </span>
                    </div>
                </div>
            </div>
            <div className="charts-area-wrapper">
                <div className="chart-area">
                    <FollowersOrFollowing
                        title="Followers"
                        data={getFollowersFollowingData(followersChart)}
                    />
                </div>
                <div className="chart-area">
                    <FollowersOrFollowing
                        title="Following"
                        data={getFollowersFollowingData(followingChart)}
                    />
                </div>
            </div>
            <Divider />
            <div className="audience-reach">
                <div className="aud-item">
                    <div className="aud-title">Engagement Rate</div>
                    <div className="aud-desc">
                        <div className={classNames('aud-score', getScoreStatus(engRateTitle))}>
                            {engRateValue.toFixed(2)}
                            <span style={{ marginLeft: '5px' }}>{engRateTitle}</span>
                        </div>
                        <div className="aud-results">
                            {engRateValue.toFixed(1)}% of audience like or comment the content,
                            similar accounts receive {engRateAvg}% engagements
                        </div>
                    </div>
                </div>
                <div className="aud-item">
                    <div className="aud-title">Average Likes</div>
                    <div className="aud-desc">
                        <div className="aud-sub-title">{nFormatter(avgLikes)}</div>
                    </div>
                </div>
                <div className="aud-item">
                    <div className="aud-title">Average Comments</div>
                    <div className="aud-desc">
                        <div className="aud-sub-title">{nFormatter(avgComments)}</div>
                    </div>
                </div>
                <div className="aud-item">
                    <div className="aud-title">Estimated post price</div>
                    <div className="aud-desc">
                        <div className="aud-sub-title">-</div>
                    </div>
                </div>
                <div className="aud-item">
                    <div className="aud-title">Estimated stories price</div>
                    <div className="aud-desc">
                        <div className="aud-sub-title">-</div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="audience-reach">
                <div className="aud-item">
                    <div className="aud-title">Brand Mentions</div>
                    <div className="brands-mention-wrapper">
                        {brandsMentions ? (
                            brandsMentions.map(brand => {
                                return (
                                    <div className="brand-wrapper">
                                        <div className="brand-logo-wrapper">
                                            <img src={brand.avatar} />
                                        </div>
                                        <div className="brand-mention-details">
                                            <div className="brand-mention-username">
                                                @{brand.username}
                                            </div>
                                            <div className="brand-mention-name">{brand.name}</div>
                                            <div className="brand-mention-count">
                                                Count: {brand.mentions_count}
                                            </div>
                                            <div className="brand-mention-er">
                                                ER: {brand.mention_er}%
                                            </div>
                                            <div className="brand-mention-category">
                                                {brand.category}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <span style={{ marginLeft: '15px', marginTop: '2px' }}>N/A</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Profile = ({ match }) => {
    let profilesId = match.params.id;
    const { loading, data, error } = useProfileQuery(profilesId);

    if (loading) {
        return <Skeleton avatar active title paragraph />;
    }

    const { profile } = data;
    console.log('profile', profile);
    return (
        <div className="influencer-profile">
            <div className="header">
                <a href={`https://www.instagram.com/${profile.username}/`} target="_blank">
                    <div className="img-wrapper">
                        <img className="img" src={profile.profilePic} />
                    </div>
                </a>
                <div className="user-info">
                    <a
                        className="personal"
                        href={`https://www.instagram.com/${profile.username}/`}
                        target="_blank"
                    >
                        <span className="username">@{profile.name}</span>
                        <Icon type="environment" />{' '}
                        <span className="country">{profile.location}</span>
                    </a>
                    <div className="biography">{profile.biography}</div>
                </div>
                <div className="header-stats">
                    <div className="stats-item">
                        <div className="label">Followers</div>
                        <div className="value">{nFormatter(profile.followersCount)}</div>
                    </div>
                    <div className="stats-item">
                        <div className="label">ER</div>
                        <div className="value">
                            {profile.engRateValue ? `${profile.engRateValue.toFixed(2)}%` : 'N/A'}
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '27px'
                }}
            >
                <General
                    title="General"
                    globalRank={profile.globalRank}
                    followersReach={getMetricValue(profile, 'followersReach')}
                    erValue={profile.engRateValue}
                    followersCount={profile.followersCount}
                />

                <AQS
                    aqs={profile.aqs}
                    aqsName={profile.aqsName}
                    aqsDescription={profile.aqsDescription}
                />
            </div>
            <AudienceCountryAndCity
                followersGeography={getMetricValue(profile, 'followersGeography')}
                audienceEthnicity={getMetricValue(profile, 'audienceEthnicity')}
                followersLanguages={getMetricValue(profile, 'followersLanguages')}
                demographyByAge={getMetricValue(profile, 'demographyByAge')}
                demography={getMetricValue(profile, 'demography')}
                followersReach={getMetricValue(profile, 'followersReach')}
                followersReachability={getMetricValue(profile, 'followersReachability')}
                followersQuality={getMetricValue(profile, 'followersQuality')}
                growth={getMetricValue(profile, 'growth')}
                audienceThematics={getMetricValue(profile, 'audienceThematics')}
                followersChart={getMetricValue(profile, 'followersChart')}
                followingChart={getMetricValue(profile, 'followingChart')}
                brandsMentions={
                    profile &&
                    profile.metrics &&
                    profile.metrics[0] &&
                    profile.metrics[0].advertisingData
                        ? profile.metrics[0].advertisingData.brands_mentions
                        : undefined
                }
                media={profile.media}
                engRateValue={profile.engRateValue}
                engRateTitle={profile.engRateTitle}
                engRateAvg={profile.engRateAvg}
                avgComments={profile.avgComments}
                avgLikes={profile.avgLikes}
            />
        </div>
    );
};

const getMetricValue = (profile, key) => {
    return profile && profile.metrics && profile.metrics[0] ? profile.metrics[0][key] : undefined;
};
export default Profile;
