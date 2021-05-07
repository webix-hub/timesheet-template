import {dataTaskProgress} from "../data/dataTaskProgress";

export const taskProgress = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			margin: 16,
			cols: [
				{
					view: "label",
					label: "Task progress"
				},
				{}
			]
		},
		{
			view: "chart",
			type: "donut",
			value: "#value#",
			color: "#color#",
			padding: 30,
			innerRadius: 70,
			legend: {
				layout: "y",
				width: 120,
				toggle: false,
				values: [
					{text: "Tasks Final", color: "#55CD97"},
					{text: "Tasks Draft", color: "#1CA1C1"}
				],
				marker: {type: "round", width: 4, height: 4},
				valign: "middle",
				align: "right"
			},
			data: dataTaskProgress
		}
	]
};
