import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = (title, data) => ({
	chart: {
		renderTo: "container",
		type: "pie"
	},
	title: {
		text: title
	},
	plotOptions: {
		enabled: false,
		pie: {
			shadow: false
		},
		series: {
			states: {
				hover: {
					enabled: false
				}
			}
		},
		series: {
			enableMouseTracking: false
		}
	},
	tooltip: {
		enabled: false,
		formatter: function() {
			return "<b>" + this.point.name + "</b>: " + this.y + " %";
		}
	},
	series: [
		{
			name: "Browsers",
			data: data,
			size: "50%",
			innerSize: "60%",
			showInLegend: true,
			dataLabels: {
				enabled: false
			}
		}
	]
});

const RingPie = ({ title, data }) => {
	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options(title, data)} />
		</div>
	);
};

export default RingPie;
