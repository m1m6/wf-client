import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = (title, data, startDate, endDate) => ({
	chart: {
		zoomType: "x",
		marginTop: 20,
		marginLeft: 45,
		marginRight: 45
	},
	title: {
		text: ""
	},
	xAxis: {
		type: "datetime",
		min: startDate,
		max: endDate,
		endOnTick: true
	},
	yAxis: [
		{
			margin: 0,
			title: {
				text: "Likes",
				align: "high",
				offset: 0,
				rotation: 0,
				y: -10,
				x: 5
			}
		},
		{
			margin: 0,
			title: {
				text: "Comments",
				align: "high",
				offset: 0,
				rotation: 0,
				y: -10,
				x: -20
			},
			opposite: true
		}
	],
	series: [
		{
			data: data.likesArray,
			pointStart: startDate,
			pointInterval: 24 * 3600 * 1000,
			name: "Likes"
		},
		{
			data: data.commentsArray,
			pointStart: startDate,
			yAxis: 1,
			pointInterval: 24 * 3600 * 1000,
			name: "Comments"
		}
	]
});

const TwoYAxis = ({ title, engagementTimeLine, startDate, endDate }) => {
	return (
		<div>
			<HighchartsReact
				highcharts={Highcharts}
				options={options(title, engagementTimeLine, startDate, endDate)}
			/>
		</div>
	);
};

export default TwoYAxis;
