import React from 'react';
import BasicColumn from '../../../../charts/components/BasicColumn';
import TwoYAxis from '../../../../charts/components/TwoYAxis';
import {
	getCampaignEngagementTimeLineData,
	getUTCDate,
	getEngagementRateData,
	getTopCountriesData,
	getCitiesData,
	getAgeData
} from '../../utils';
import CampaignEngagementRate from '../../../../charts/components/CampaignEngagementRate';
import { useCampaignMetricsQuery } from '../../useQueries';
import { Skeleton } from 'antd';

const Analytics = ({ campaign }) => {
	const { mediaPosts, startDate, endDate, id } = campaign;
	const { loading, error, data } = useCampaignMetricsQuery(id);

	if (loading) {
		return <Skeleton active loading paragraph avatar />;
	}

	const { campaignMetrics } = data;
	const topCountriesData = getTopCountriesData(campaignMetrics);
	const topCitiesData = getCitiesData(campaignMetrics);
	const ageAndGenderData = getAgeData(campaignMetrics);

	// const topCountriesData = getTopCountriesData()
	console.log('ageAndGenderData', ageAndGenderData);
	const engagementTimeLine = getCampaignEngagementTimeLineData(mediaPosts);
	const engagementRate = getEngagementRateData(mediaPosts);
	console.log('engagementRate', engagementRate);
	return (
		<div className="analytics-tab">
			<div>
				<div style={{ width: '60%' }}>
					<div className="title">Engagement Rate</div>
					<CampaignEngagementRate {...engagementRate} />
				</div>
				<div style={{ width: '40%' }}>
					<div className="title">Engagement Timeline</div>
					<TwoYAxis
						engagementTimeLine={engagementTimeLine}
						startDate={getUTCDate(startDate)}
						endDate={getUTCDate(endDate)}
					/>
				</div>
			</div>

			<div>
				<div style={{ width: '25%' }}>
					<div className="title">Top Countries</div>
					<BasicColumn {...topCountriesData} maxValue={100} />
				</div>
				<div style={{ width: '25%' }}>
					<div className="title">Top Cities </div>
					<BasicColumn {...topCitiesData} maxValue={100} />
				</div>
				<div style={{ width: '25%' }}>
					<div className="title">Age</div>
					<BasicColumn xLabels={ageAndGenderData.xLabels} yData={ageAndGenderData.yData} />
				</div>
				<div style={{ width: '25%' }}>
					<div className="title">Gender</div>
					<BasicColumn xLabels={ageAndGenderData.genderLabels} yData={ageAndGenderData.genderYData} />
				</div>
			</div>
		</div>
	);
};

export default Analytics;
