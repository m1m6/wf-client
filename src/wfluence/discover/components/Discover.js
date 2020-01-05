import React from "react";
import CommonFilter from "../../../core/filter/components/CommonFilter";
import { FILTER_KEYS } from "../../../core/filter/constants";

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
			<div className="dicover-profiles-wrapper">profiles</div>
		</div>
	);
};

export default Discover;
