import React from "react";
import { Icon } from "antd";
import ReactCountryFlag from "react-country-flag";

const ProfileCard = () => {
	return (
		<div className="profile-card">
			<div className="profile-image">
				<img
					src="https://instagram.fjrs3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/80303825_3616970831661251_217778120629944320_n.jpg?_nc_ht=instagram.fjrs3-1.fna.fbcdn.net&_nc_ohc=-kVdHubUwvoAX_8nJJo&oh=e730261f34bbf4d3953e8051c575e109&oe=5EB3043C"
					width={110}
					height={110}
				/>
			</div>
			<div className="profile-data">
				<div className="fullname">Laura Cobain</div>
				<div className="username">
					<Icon type="instagram" /> @leiba
				</div>
				<div className="metadata">
					<span>
						<ReactCountryFlag countryCode="US" /> USA
					</span>
					<span>Female</span>
					<span>Fashion</span>
				</div>
				<div className="top-tags">
					<React.Fragment>
						{[
							{ id: 0, key: "Fashion" },
							{ id: 0, key: "Sport" },
							{ id: 0, key: "Photographer" }
						].map(index => (
							<span className="tag-item" onClick={e => {}}>
								{index.key}
							</span>
						))}
						<span
							style={{ cursor: "pointer" }}
							onClick={() => {}}
							className="more-counter"
						>{`+4 more`}</span>
					</React.Fragment>
				</div>

				<div className="card-footer">
					<div className="footer-item">
						<div className="count">5.3M</div>
						<div className="label">Followers</div>
					</div>
					<div className="footer-item">
						<div className="count">11.3M</div>
						<div className="label">Followings</div>
					</div>
					<div className="footer-item">
						<div className="count">1.93%</div>
						<div className="label">Eng. Rate</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
