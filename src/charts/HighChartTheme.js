import Highcharts from "highcharts";

export const colors = [
	{
		linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
		stops: [
			[0, "#2682FF"],
			[1, "#134180"]
		]
	},
	{
		linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
		stops: [
			[0, "#FF6A6A"],
			[1, "#9D0000"]
		]
	},
	{
		linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
		stops: [
			[0, "#FFBC52"],
			[1, "#D58100"]
		]
	},
	{
		linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
		stops: [
			[0, "#AA60FF"],
			[1, "#553080"]
		]
	}
];
Highcharts.theme = {
	colors: colors,
	chart: {
		backgroundColor: {
			linearGradient: [0, 0, 500, 500],
			stops: [
				[0, "rgb(255, 255, 255)"],
				[1, "rgb(255, 255, 255)"]
			]
		}
	},
	title: {
		style: {
			color: "#000",
			font: 'bold 16px "Montserrat", Verdana, sans-serif'
		}
	},
	subtitle: {
		style: {
			color: "#666666",
			font: 'bold 12px "Montserrat", Verdana, sans-serif'
		}
	},

	legend: {
		itemStyle: {
			font: "9pt Montserrat, Trebuchet MS, Verdana, sans-serif",
			color: "black"
		},
		itemHoverStyle: {
			color: "gray"
		}
	}
};

Highcharts.setOptions(Highcharts.theme);
