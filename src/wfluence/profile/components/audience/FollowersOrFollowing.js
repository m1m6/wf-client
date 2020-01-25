import React from "react";
import BasicLine from "../../../../charts/components/BasicLine";

const FollowersOrFollowing = props => {
	return (
		<div className="followers-following-charts">
			<BasicLine {...props} />
		</div>
	);
};
export default FollowersOrFollowing;
