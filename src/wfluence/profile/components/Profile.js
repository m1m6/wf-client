import React, { useState } from "react";
import { Icon, Skeleton, Divider } from "antd";
import { Link } from "react-router-dom";
import { useProfileQuery } from "../useProfile";
import { nFormatter } from "../../../utils/numberUtils";
import General from "./General";
import AQS from "./AQS";
import CountryOrCity from "./audience/CountryOrCity";
import {
	mapFollowersAudienceToLabelOrValue,
	getAgeAndGenderSeries,
	getAudienceTypeData,
	getFollowersFollowingData,
	getProfileContentTypes,
	getContentTypesSeries,
	getPostsHeatMap,
	getSuggestedPostTime
} from "../utils";
import { AGE_GROUPS, DAYS } from "../../../charts/constants";
import RingPie from "../../../charts/components/RingPie";
import FollowersOrFollowing from "./audience/FollowersOrFollowing";
import uniqBy from "lodash/uniqBy";
import BasicHeatMap from "../../../charts/components/BasicHeatMap";
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
	media
}) => {
	const { countries, cities, states } = followersGeography;
	const [showAllInterests, setShowAllInterests] = useState(false);
	const uniqMediaType = uniqBy(media, "mediaType");
	const postsHeatmap = getPostsHeatMap(media);
	const suggestedPostTime = getSuggestedPostTime(postsHeatmap)
	return (
		<div className="profile-full-row">
			<div className="chart-header">
				<span className="c-header">Audience</span>
			</div>
			<div className="charts-area-wrapper">
				<div className="chart-area">
					<CountryOrCity
						title="Audience Countries"
						xLabels={mapFollowersAudienceToLabelOrValue(countries, "name")}
						yData={mapFollowersAudienceToLabelOrValue(countries, "value")}
					/>
				</div>
				<div className="chart-area">
					<CountryOrCity
						title="Audience Cities"
						xLabels={mapFollowersAudienceToLabelOrValue(cities, "name")}
						yData={mapFollowersAudienceToLabelOrValue(cities, "value")}
					/>
				</div>
				<div className="chart-area">
					<CountryOrCity
						title="Audience US States"
						xLabels={mapFollowersAudienceToLabelOrValue(states, "name")}
						yData={mapFollowersAudienceToLabelOrValue(states, "value")}
					/>
				</div>
			</div>
			<div className="charts-area-wrapper">
				<div className="chart-area">
					<CountryOrCity
						title="Audience Cities"
						xLabels={mapFollowersAudienceToLabelOrValue(
							audienceEthnicity,
							"name"
						)}
						yData={mapFollowersAudienceToLabelOrValue(
							audienceEthnicity,
							"value"
						)}
					/>
				</div>
				<div className="chart-area">
					<CountryOrCity
						title="Followers Languages"
						xLabels={mapFollowersAudienceToLabelOrValue(
							followersLanguages,
							"code"
						)}
						yData={mapFollowersAudienceToLabelOrValue(
							followersLanguages,
							"value"
						)}
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
					<RingPie
						title="Audience Type"
						data={getAudienceTypeData(followersReach)}
					/>
				</div>
				<div className="chart-area">
					<RingPie
						title="Most Frequent Post Type"
						data={getProfileContentTypes(media)}
					/>
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
				<div style={{ marginTop: "20px" }}>
					<div>
						The best time to post is{" "}
						{suggestedPostTime.map((item, i) => {
							console.log(i, suggestedPostTime.length)
							return <span>{`${DAYS[item[1]]} at ${item[0]}${i < suggestedPostTime.length - 1 ? ', ': '.'}` }</span>
						})}
					</div>
					<BasicHeatMap title="Best Time To Post" data={postsHeatmap} />
				</div>
			</div>
			<Divider />

			<div className="audience-reach">
				<div className="aud-item">
					<div className="aud-title">Audience Reachability</div>
					<div className="aud-desc">
						<div className="aud-score">{followersReachability.title}</div>
						<div className="aud-results">
							{`${followersReachability.value}% of audience have less than 1,500 followings, similar
							accounts have ${followersReachability.avg}% in average`}
						</div>
					</div>
				</div>
				<div className="aud-item">
					<div className="aud-title">Audience Authenticity</div>
					<div className="aud-desc">
						<div className="aud-score">{followersQuality.title}</div>
						<div className="aud-results">
							{`${followersQuality.value}% of audience look authentic, similar accounts have ${followersQuality.avg}% of
							authentic audience on average`}
						</div>
					</div>
				</div>
				<div className="aud-item">
					<div className="aud-title">Growth</div>
					<div className="aud-desc">
						<div className="aud-score">{growth.title}</div>
						<div className="aud-results">{growth.description}</div>
					</div>
				</div>
				<div className="aud-item">
					<div className="aud-title">Audience Interests</div>
					<div className="aud-desc">
						<div className="aud-sub-title">{growth.title}</div>
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
															width: `${(thematic[1] * 100).toFixed(0)}%`,
															backgroundColor: "#264679",
															display: "flex",
															height: "16px"
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
								textDecoration: "underline",
								color: "blue",
								cursor: "pointer"
							}}
							onClick={() => setShowAllInterests(!showAllInterests)}
						>
							{showAllInterests ? "Hide" : "Show All"}
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
						<div className="aud-score">
							2.2% of audience like or comment the content, similar accounts
							receive 1.32% engagements
						</div>
						<div className="aud-results">
							{`2.2% Excellent, compared to other 1M+ followers accounts`}
						</div>
					</div>
				</div>
				<div className="aud-item">
					<div className="aud-title">Average Likes</div>
					<div className="aud-desc">
						<div className="aud-sub-title">762K</div>
					</div>
				</div>
				<div className="aud-item">
					<div className="aud-title">Average Comments</div>
					<div className="aud-desc">
						<div className="aud-sub-title">762K</div>
					</div>
				</div>
				<div className="aud-item">
					<div className="aud-title">Estimated post price</div>
					<div className="aud-desc">
						<div className="aud-sub-title">762K</div>
					</div>
				</div>
				<div className="aud-item">
					<div className="aud-title">Estimated stories price</div>
					<div className="aud-desc">
						<div className="aud-sub-title">762K</div>
					</div>
				</div>
			</div>
			<Divider />
			<div className="audience-reach">
				<div className="aud-item">
					<div className="aud-title">Brand Mentions</div>
					<div className="brands-mention-wrapper">
						{brandsMentions &&
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
							})}
					</div>
				</div>
			</div>
		</div>
	);
};

const Profile = ({ match }) => {
	let profilesId = match.params.id;
	const { loading, data, error } = useProfileQuery(profilesId);
	console.log("profile query", data);

	if (loading) {
		return <Skeleton avatar active title paragraph />;
	}

	const { profile } = data;
	return (
		<div className="influencer-profile">
			<div className="header">
				<div className="img-wrapper">
					<img className="img" src={profile.profilePic} />
				</div>
				<div className="user-info">
					<Link
						className="personal"
						to={`https://www.instagram.com/${profile.username}/`}
						target="_blank"
					>
						<span className="username">@{profile.name}</span>
						<Icon type="environment" />{" "}
						<span className="country">{profile.location}</span>
					</Link>
					<div className="biography">{profile.biography}</div>
				</div>
				<div className="header-stats">
					<div className="stats-item">
						<div className="label">Followers</div>
						<div className="value">{nFormatter(profile.followersCount)}</div>
					</div>
					<div className="stats-item">
						<div className="label">ER</div>
						<div className="value">{`${profile.engRateValue}%`}</div>
					</div>
				</div>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginBottom: "27px"
				}}
			>
				<General
					title="General"
					globalRank={profile.globalRank}
					followersReach={profile.metrics[0].followersReach}
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
				followersGeography={profile.metrics[0].followersGeography}
				audienceEthnicity={profile.metrics[0].audienceEthnicity}
				followersLanguages={profile.metrics[0].followersLanguages}
				demographyByAge={profile.metrics[0].demographyByAge}
				demography={profile.metrics[0].demography}
				followersReach={profile.metrics[0].followersReach}
				followersReachability={profile.metrics[0].followersReachability}
				followersQuality={profile.metrics[0].followersQuality}
				growth={profile.metrics[0].growth}
				audienceThematics={profile.metrics[0].audienceThematics}
				followersChart={profile.metrics[0].followersChart}
				followingChart={profile.metrics[0].followingChart}
				brandsMentions={profile.metrics[0].advertisingData.brands_mentions}
				media={profile.media}
			/>
		</div>
	);
};

export default Profile;
