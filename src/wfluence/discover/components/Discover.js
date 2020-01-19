import React from "react";
import { Row, Col } from "antd";
import CommonFilter from "../../../core/filter/components/CommonFilter";
import { FILTER_KEYS } from "../../../core/filter/constants";
import ProfileCard from "../../profile/components/ProfileCard";
import { useProfilesQuery } from "../useProfiles";

const Discover = () => {
	const { loading, data, error } = useProfilesQuery(9, 0);
	const { profiles } = loading ? { profiles: [] } : data;
	console.log("data", data);
	console.log("error", error);
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
						filterName="category"
						filterKey={FILTER_KEYS.category}
					/>
					<CommonFilter
						filterName="language"
						filterKey={FILTER_KEYS.language}
					/>
					<CommonFilter filterName="country" filterKey={FILTER_KEYS.country} />
					<CommonFilter filterName="city" filterKey={FILTER_KEYS.country} />
					<CommonFilter filterName="size" filterKey={FILTER_KEYS.country} />
				</React.Fragment>
			</div>

			<div className="dicover-profiles-wrapper">
				{[1, 2, 3].map((j, pi) => {
					const profilesRow = profiles.slice(pi * 3,  3);
					console.log(profilesRow)
					return (
						<Row className="profiles-row">
							{[1, 2, 3].map((i, ci) => (
								<Col className="profile-card-wrapper">
									<ProfileCard
										loading={loading}
										profile={profiles[pi * ci + i]}
									/>
								</Col>
							))}
						</Row>
					);
				})}
			</div>
		</div>
	);
};

export default Discover;
