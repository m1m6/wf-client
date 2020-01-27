import React from "react";
import Button from "../../../form/components/Button";
const Campaigns = props => {
	console.log("props", props)
	const {routerHistory} = props
	return (
		<div className="followers-following-charts">
			Campaign List, nothing found!
			<div>
				<Button onClick={() => routerHistory.push('/campaign/new')}>New Campaign</Button>
			</div>
		</div>
	);
};
export default Campaigns;
