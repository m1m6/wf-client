import React, { useState, useEffect, useMemo } from "react";
import { Row, Col, Skeleton } from "antd";
import CommonFilter from "../../../core/filter/components/CommonFilter";
import { FILTER_KEYS } from "../../../core/filter/constants";
import ProfileCard from "../../profile/components/ProfileCard";
import Button from "../../../form/components/Button";
import useProfilesQuery from "../useProfiles";

const Discover = () => {
	const [pagingFirst, setPagingFirst] = useState(9);
	const [pagingSkip, setPagingSkip] = useState(0);
	const [allProfiles, setAllProfiles] = useState([]);
	const { profiles, loading, loadMore } = useProfilesQuery(
		pagingFirst,
		pagingSkip
	);

	if (loading) return <Skeleton active paragraph title loading />;
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
				<Row className="profiles-row">
					{profiles &&
						profiles.length > 0 &&
						profiles.map((profile, i) => {
							return (
								<Col className="profile-card-wrapper">
									<ProfileCard loading={loading} profile={profile} />
								</Col>
							);
						})}
				</Row>
			</div>
			<div className="footer">
				<Button
					className="wf-btn-primary"
					onClick={e => {
						loadMore(18, 9);

						setPagingSkip(pagingFirst);
						setPagingFirst(pagingFirst + 9);
					}}
				>
					Load More
				</Button>
			</div>
		</div>
	);
};

export default Discover;
