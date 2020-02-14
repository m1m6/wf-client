import React from "react";
import BasicColumn from "../../../../charts/components/BasicColumn";
import TwoYAxis from "../../../../charts/components/TwoYAxis";
const Analytics = () => {
	return (
		<div className="analytics-tab">
			<div>
				<div style={{ width: "60%" }}>
					<div className="title">Engagement Rate</div>
					<BasicColumn />
				</div>
				<div style={{ width: "40%" }}>
					<div className="title">Engagement Timeline</div>
					<TwoYAxis />
				</div>
			</div>

			<div>
				<div style={{ width: "25%" }}>
					<div className="title">Top Countries</div>
					<BasicColumn />
				</div>
				<div style={{ width: "25%" }}>
					<div className="title">Top Locations </div>
					<BasicColumn />
				</div>
				<div style={{ width: "20%" }}>
					<div className="title">Age</div>
					<BasicColumn />
				</div>
				<div style={{ width: "20%" }}>
					<div className="title">Ethnicity</div>
					<BasicColumn />
				</div>
				<div style={{ width: "10%" }}>
					<div className="title">Gender</div>
					<BasicColumn />
				</div>
			</div>
		</div>
	);
};

export default Analytics;
