import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import highchartsHeatmap from "highcharts/modules/heatmap";
import { DAYS } from "../constants";
highchartsHeatmap(Highcharts);

const options = (title, data) => ({
	chart: {
		type: "heatmap",
		plotBorderWidth: 1,
		marginTop: 40,
		marginBottom: 80
	},
	title: {
		text: title
	},
	xAxis: {
		min: 1,
		max: 24,
		tickInterval: 8,
		labels: {
			step: 1,
			style: {
				fontSize: "12px"
			}
		},
		gridLineWidth: 0,
		lineWidth: 0.5,
		lineColor: "rgba(0,0,0,0.75)",
		tickWidth: 0.5,
		tickLength: 3,
		tickColor: "rgba(0,0,0,0.75)",
		title: {
			text: "Hour"
		}
	},
	yAxis: {
		categories: DAYS,
		title: null
	},
	tooltip: { enabled: false },

	colorAxis: {
		minColor: "#ffffff",
		maxColor: "#2682FF",
		min: 1
	},
	legend: {
		// align: "right",
		// layout: "vertical",
		// margin: 0,
		// verticalAlign: "top",
		// y: 25,
		// symbolHeight: 320
		enabled: false
	},
	series: [
		{
			name: "Sales per employee",
			borderWidth: 1,
			// colsize: 1,
			// states: { hover: { enabled: false } },
			data: data, //[[2, 3,100] , [5,4,200], [12,5,300]],
			// dataLabels: {
			// 	enabled: true,
			// 	color: "#000000"
			// }
		}
	]
});

const BasicHeatMap = ({ title, data }) => {
	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options(title, data)} />
		</div>
	);
};

export default BasicHeatMap;
