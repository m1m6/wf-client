import React from "react";
import BasicColumn from "../../../../charts/components/BasicColumn";

const CountryOrCity = props => {
	return (
		<div className="audience-countries">
			<BasicColumn {...props} />
		</div>
	);
};
export default CountryOrCity;
