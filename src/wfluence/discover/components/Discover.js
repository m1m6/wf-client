import React from "react";
import CommonFilter from "../../../core/filter/components/CommonFilter";
import { FILTER_KEYS } from "../../../core/filter/constants";
import List from "./List";

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

			<List />
		</div>
	);
};

export default Discover;
