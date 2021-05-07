import {dataProdScore} from "../data/dataProdScore";

export const prodScore = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			margin: 16,
			cols: [
				{
					view: "label",
					label: "Productivity score"
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
					{text: "84h very productive", color: "#8664C6"}
				],
				marker: {type: "round", width: 4, height: 4},
				valign: "middle",
				align: "right"
			},
			data: dataProdScore
		}
	]
};
