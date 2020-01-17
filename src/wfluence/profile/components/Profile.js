import React from "react";
import { Icon } from "antd";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";
import ChartButton from "../../../charts/components/ChartButton";
import BasicArea from "../../../charts/components/BasicArea";

const FullWidthChart = ({ data }) => {
	return (
		<div className="profile-full-row">
			<div className="chart-header">
				<span className="chart-header">Total Growth Fans</span>
				<span className="filter-buttons">
					<ChartButton>Week</ChartButton>
					<ChartButton>Month</ChartButton>
					<ChartButton>Year</ChartButton>
				</span>
			</div>
			<div className="chart-area">
				<BasicArea />
			</div>
		</div>
	);
};

const Profile = () => {
	return (
		<div className="influencer-profile">
			<div className="header">
				<div className="img-wrapper">
					<img
						className="img"
						src="https://app.hypeauditor.com/uploads/h/0/8/1/50b9d8ee342ed61ac0c9adb38dfc5a69.jpg?p=fczNAO9t1MDFeTFZwuYadTmaDNt%2FuRvBL8YIp%2Bu3lTLQKhord2anZmNsgc2zH64teJDxlvd%2BzNnS2AIQoHiT7onizaT1n%2BzcUlbgTS2u%2F6Erbc9X9T7YsQgK42fVODpEmLRxAx47BqHcvKq0aCrQFWpVpPtLHnKDyCUQcXvY0Aop878yKdQEHhMmnfvXOGxhZjb%2BHVeGLfxDalmB6A3QCraoi8tWtrfPmT7HPYBRCuubwcC%2B3Pup1ymtWO%2BeLgeVeBGF97e6H24X0WZICxxVPLii7Ei9Jkq4wymBxFS09ig%3D"
					/>
				</div>
				<div className="user-info">
					<Link
						className="personal"
						to="https://www.instagram.com/milliebobbybrown/"
					>
						<span className="username">@milliebobbybrown</span>
						<Icon type="environment" /> <span className="country">Brazil</span>
					</Link>
					<div className="biography">this is a bio example </div>
				</div>
				<div className="header-stats">
					<div className="stats-item">
						<div className="label">Followers</div>
						<div className="value">31.5M</div>
					</div>
					<div className="stats-item">
						<div className="label">ER</div>
						<div className="value">10.16%</div>
					</div>
				</div>
			</div>

			{/* Followers */}
			<FullWidthChart />
		</div>
	);
};

export default Profile;
