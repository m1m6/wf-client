import React from "react";
import { Row, Col, Icon } from "antd";
import ReactCountryFlag from "react-country-flag";
import CommonFilter from "../../../core/filter/components/CommonFilter";
import { FILTER_KEYS } from "../../../core/filter/constants";
import ProfileCard from "./ProfileCard";

const Discover = () => {
	return (
		<div className="discover-wrapper">
			<div className="discover-filters-wrapper">
				<React.Fragment>
					<CommonFilter
						filterName="followers"
						filterKey={FILTER_KEYS.followers}
					/>
					<CommonFilter filterName="gender" filterKey={FILTER_KEYS.gender} />
					<CommonFilter
						filterName="categories"
						filterKey={FILTER_KEYS.category}
					/>
					<CommonFilter
						filterName="languages"
						filterKey={FILTER_KEYS.language}
					/>
					<CommonFilter
						filterName="countries"
						filterKey={FILTER_KEYS.country}
					/>
				</React.Fragment>
			</div>
			<div className="dicover-profiles-wrapper">
				 {[1, 2, 3].map(i => (
					<Row className="profiles-row">
						{[1, 2, 3].map(i => (
							<Col className="profile-card-wrapper">
								<ProfileCard />
							</Col>
						))}
					</Row>
				))}
			</div>
		</div>
	);
};

export default Discover;
