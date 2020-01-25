import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = (title, data) => ({
	chart: {
		zoomType: "x",
		type: "line"
	},
    title: {
        text: title
    },
	xAxis: {
		type: "datetime",
		// startOnTick: false,
		// endOnTick: false
	},
    yAxis: {
        title: {
            text: 'Number of '+title
        }
    },
	series: [
		{
			data: data
		}
	]
});

const BasicLine = ({ title, data }) => {
	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options(title, data)} />
		</div>
	);
};

export default BasicLine;
