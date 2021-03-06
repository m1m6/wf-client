import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { colors } from "../HighChartTheme";
import noData from "highcharts/modules/no-data-to-display";

noData(Highcharts);
const options = (title, xLabels, yData, arrayOfObjectsSeries, maxValue) => ({
	chart: {
		type: "column"
	},
	title: {
		text: title
	},

	xAxis: {
		categories: xLabels,
		crosshair: true
	},
	yAxis: {
		min: 0,
		max: maxValue,
		title: {
			text: ""
		}
	},
	tooltip: {
		headerFormat:
			'<span style="font-size:10px">{point.key}: {point.y}%</span><table>',
		pointFormat: "",
		footerFormat: "</table>",
		shared: true,
		useHTML: true
	},
	plotOptions: {
		column: {
			pointPadding: 0.2,
			borderWidth: 0
		}
	},
	colors: [colors[Math.floor(Math.random() * 4)]],
	series: arrayOfObjectsSeries
		? yData
		: [
				{
					data: yData,
					showInLegend: false,
						pointWidth: 30
				}
		  ]
});

const BasicColumn = ({ title, xLabels, yData, arrayOfObjectsSeries, maxValue = undefined }) => {
	return (
		<div>
			<HighchartsReact
				highcharts={Highcharts}
				options={options(title, xLabels, yData, arrayOfObjectsSeries, maxValue)}
			/>
		</div>
	);
};

export default BasicColumn;
