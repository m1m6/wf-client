import React from "react";
import { getAqsStatus } from "../utils";
import classNames from "classnames";

const AQS = ({ aqs, aqsName, aqsDescription }) => {
	const aqsDescList = aqsDescription ? aqsDescription.split(";") : [];
	return (
		<div className="profile-half-row">
			<div className="half-chart-header">
				<span className="h-header">Audience Quality Score</span>
			</div>
			<div className="aqs-description">
				AQS is a 1 to 100 metric which combines audience quality (not number),
				engagement rate and it’s authenticity into one metric
			</div>
			<div className="aqs-area-wrapper">
				<div className="aqs-area">
					<div className={classNames('aqs-score-area', getAqsStatus(aqs))}>
						<span className="aqs-score-value">{aqs}</span>
						<span className="aqs-out-of">Of 100</span>
					</div>
					<div className="aqs-sub">{aqsName}</div>
				</div>
				<div className="aqs-list">
					{aqsDescList &&
						aqsDescList.map(descItem => {
							return (
								<div className="aqs-desc-item">
									<div className="aqs-desc-mark"></div>
									{descItem}
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};
export default AQS;
