import React from "react";
import CommonFilter from "../../../core/filter/components/CommonFilter";

const Discover = () => {
	return (
		<div className="discover-wrapper">
			<div className="discover-filters-wrapper">
				<React.Fragment>
					<CommonFilter />
					<CommonFilter />
					<CommonFilter />
				</React.Fragment>
			</div>
			<div className="dicover-profiles-wrapper">profiles</div>
		</div>
	);
};

export default Discover;
