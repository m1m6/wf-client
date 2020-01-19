import React from "react";
import { Icon, Skeleton } from "antd";
import { Link } from "react-router-dom";
import BasicArea from "../../../charts/components/BasicArea";
import { useProfileQuery } from "../useProfile";
import { nFormatter } from "../../../utils/numberUtils";
import General from "./General";
import AQS from "./AQS";

const FullWidthChart = ({ data }) => {
	return (
		<div className="profile-full-row">
			<div className="chart-header">
				<span className="c-header">Audience</span>
			</div>
			<div className="charts-area-wrapper">
				<div className="chart-area">
					<BasicArea />
				</div>
				<div className="chart-area">
					<BasicArea />
				</div>
			</div>
		</div>
	);
};

const HalfWidthChart = ({ title }) => {
	return (
		<div className="profile-half-row">
			<div className="half-chart-header">
				<span className="h-header">{title}</span>
			</div>
			<div className="half-chart-area">bla blab bla</div>
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
			<FullWidthChart />
		</div>
	);
};

export default Profile;
