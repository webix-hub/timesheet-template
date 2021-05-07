import {dataActivity} from "../data/dataActivity";

export const activity = {
	gravity: 1.9,
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			margin: 16,
			cols: [
				{
					view: "label",
					label: "Activity"
				},
				{}
			]
		},
		{
			type: "clean",
			cols: [
				{
					view: "chart",
					type: "splineArea",
					xAxis: {
						template(obj) {
							return webix.Date.dateToStr("%D")(obj.day);
						}
					},
					yAxis: {
						start: 0,
						step: 20,
						end: 100
					},
					legend: {
						values: [
							{text: "Hours planned", color: "#8664C6"},
							{text: "Hours tracked", color: "#1CA1C1"}
						],
						marker: {type: "round", width: 4, height: 4},
						valign: "bottom",
						align: "center",
						width: 90,
						layout: "x"
					},
					eventRadius: 5,
					series: [
						{
							alpha: 0.5,
							value: "#activity#",
							color: "#8664C6"
						},
						{
							alpha: 0.5,
							value: "#activity2#",
							color: "#1CA1C1"
						}
					],
					data: dataActivity
				},
				{
					view: "template",
					css: "activityMap",
					width: 120,
					template() {
						let html = `
							<div class='activityTotal flex'>
								<div class='activityItem flex planned'>
									<span>41h planned</span>
								</div>
								<div class='activityItem flex tracked'>
									<span>7h tracked</span>
								</div>
							</div>
						`;
						return html;
					}
				}
			]
		}
	]
};
