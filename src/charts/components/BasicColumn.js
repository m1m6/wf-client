import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = (title, xLabels, yData) => ({
	chart: {
		type: "column"
	},
	title: {
		text: title
	},

	xAxis: {
		categories: ["Jan", "Feb", "Mar", "Apr"],
		crosshair: true
	},
	yAxis: {
		min: 0,
		title: {
			text: "%"
		}
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat:
			'<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
	series: [
		{
			data: [49.9, 40, 30, 55]
		}
	]
});

const BasicColumn = ({ title, xLabels, yData }) => {
	return (
		<div>
			<HighchartsReact
				highcharts={Highcharts}
				options={options(title, xLabels, yData)}
			/>
		</div>
	);
};

export default BasicColumn;
