import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { format } from 'date-fns';
import { getDayOfTheWeekAsString } from '../../utils/dateUtils';

const options = (title, data, startDate, endDate) => ({
	chart: {
		zoomType: 'x',
		marginTop: 20,
		marginLeft: 45,
		marginRight: 45
	},
	title: {
		text: ''
	},
	tooltip: {
		enabled: true,
		shared: true,
		hideDelay: 0,
		followTouchMove: true,
		formatter: function() {
			let date = new Date(this.x);
			let fdate = format(date, 'MMM d, HH:mm');
			console.log(this);
			if (this.points.length === 1) {
				return `<div>
				<b>Date: </b>
				<span>${getDayOfTheWeekAsString(date.getDay())}, ${fdate}</span>
				<br>
				<b>${this.points[0].series.name}: </b>
				<span>${this.points[0].y}</span>
			</div>`;
			} else
				return `<div>
					<b>Date: </b>
					<span>${getDayOfTheWeekAsString(date.getDay())}, ${fdate}</span>
					<br>
					<b>Likes: </b>
					<span>${this.points[0].y}</span>
					<br>
					<b>Comments: </b>
					<span>${this.points[1].y}</span>
				</div>`;
		}
	},
	xAxis: {
		type: 'datetime',
		min: startDate,
		max: endDate,
		endOnTick: true
	},
	yAxis: [
		{
			margin: 0,
			title: {
				text: 'Likes',
				align: 'high',
				offset: 0,
				rotation: 0,
				y: -10,
				x: 5
			}
		},
		{
			margin: 0,
			title: {
				text: 'Comments',
				align: 'high',
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
			name: 'Likes'
		},
		{
			data: data.commentsArray,
			pointStart: startDate,
			yAxis: 1,
			pointInterval: 24 * 3600 * 1000,
			name: 'Comments'
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
