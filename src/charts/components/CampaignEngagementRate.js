import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { colors } from "../HighChartTheme";
import noData from "highcharts/modules/no-data-to-display";

noData(Highcharts);
const options = (title, xLabels, yData, arrayOfObjectsSeries) => ({
	chart: {
		type: "column"
	},
	title: {
		text: title
	},

	xAxis: {
		categories: xLabels,
		crosshair: true,
		title: {
			text: "Post Date"
		}
	},
	yAxis: {
		min: 0,
		title: {
			text: "Engagement Rate (%)"
		}
	},
	tooltip: {
		formatter: function(tooltip) {
			console.log(this, tooltip);
			return (
				"Post by: <b>" +
				this.point.name +
				"</b> <br>Has <b>" +
				this.y +
				"% ER</b><br>At Date: <b>" +
				this.x +"</b>"
			);
		}
	},
	plotOptions: {
		column: {
			pointPadding: 0.2,
			borderWidth: 0
		}
	},
	colors: [colors[Math.floor(Math.random() * 4)]],
	series: [
		{
			data: yData,
			showInLegend: false,
			pointWidth: 30
		}
	]
});

const CampaignEngagementRate = ({
	title,
	xLabels,
	yData,
	arrayOfObjectsSeries
}) => {
	return (
		<div>
			<HighchartsReact
				highcharts={Highcharts}
				options={options(title, xLabels, yData, arrayOfObjectsSeries)}
			/>
		</div>
	);
};

export default CampaignEngagementRate;
