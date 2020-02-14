import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = (title, data) => ({
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
		tickInterval: 6 * 3600 * 1000,
		min: Date.UTC(2013, 4, 22),
        max: Date.UTC(2013, 4, 23)
  
	},
	yAxis: [
		{
      margin: 0,
			title: {
				text: "Primary Axis",
                align: 'high',
                offset: 0,
                rotation: 0,
                y: -10,
                x: 30
			}
		},
		{
            margin: 0,
			title: {
                text: "Secondary Axis",
                align: 'high',
                offset: 0,
                rotation: 0,
                y: -10,
                x: -50
			},
			opposite: true
		}
	],
	series: [
		{
			data: [
				[1369206795000, 1],
				[1369225421000, 3],
				[1369230934000, 2]
			],
			pointStart: Date.UTC(2012, 5, 22),
			pointInterval: 24 * 3600 * 1000 // one day
		},
		{
			data: [
				[1369206795000, 1],
				[1369225421000, 4],
				[1369230934000, 6]
			],
			pointStart: Date.UTC(2012, 5, 22),
			yAxis: 1,
			pointInterval: 24 * 3600 * 1000 // one day
		}
	]
});

const TwoYAxis = ({ title, data }) => {
	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options(title, data)} />
		</div>
	);
};

export default TwoYAxis;
