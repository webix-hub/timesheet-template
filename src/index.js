import {header} from "./js/header";
import {sidebar} from "./js/sidebar";
import {topbar} from "./js/topbar";
import {timesheet} from "./js/timesheet";
import {activity} from "./js/activity";
import {prodScore} from "./js/prodScore";
import {taskProgress} from "./js/taskProgress";
import "./js/headerCheckbox";


// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize) {
		webix.CustomScroll.init();
	}

	webix.ui({
		rows: [
			header,
			{
				type: "clean",
				cols: [
					sidebar,
					{
						type: "space",
						rows: [
							topbar,
							timesheet,
							{
								margin: 10,
								cols: [
									activity,
									prodScore,
									taskProgress
								]
							}
						]
					}
				]
			}
		]
	});
});
