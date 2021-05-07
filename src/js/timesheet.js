import {dataTimesheet} from "../data/dataTimesheet";

export const timesheet = {
	gravity: 1.5,
	rows: [
		{
			view: "toolbar",
			padding: {left: 10, right: 10, top: 4, bottom: 4},
			height: 40,
			margin: 16,
			cols: [
				{
					view: "label",
					label: "My Timesheet"
				},
				{},
				{
					view: "richselect",
					css: "filter",
					label: "<span class='mdi mdi-filter'></span>",
					labelWidth: 18,
					width: 88,
					icon: "mdi mdi-menu-down",
					placeholder: "Filters",
					options: {
						view: "suggest",
						fitMaster: false,
						width: 74,
						body: {
							view: "list",
							css: "filterList",
							data: [
								{id: 1, value: ""},
								{id: 2, value: "Filter 1"},
								{id: 3, value: "Filter 2"}
							]
						}
					}
				},
				{
					view: "button",
					css: "webix_primary smButton",
					type: "icon",
					icon: "mdi mdi-plus",
					label: "Add New",
					width: 96
				}
			]
		},
		{
			view: "datatable",
			css: "timesheetTable webix_data_border",
			type: {
				customCheckbox(obj, common, value) {
					if (value) return '<span class="webix_table_checkbox customIcon mdi mdi-24px mdi-checkbox-marked"></span>';
					return '<span class="webix_table_checkbox customIcon mdi mdi-24px mdi-checkbox-blank-outline"></span>';
				}
			},
			checkboxRefresh: true,
			columns: [
				{id: "ch1", header: {content: "masterCheckbox"}, template: "{common.customCheckbox()}", width: 41},
				{id: "tags", header: "Tags", width: 60, css: "flexCol", template: "<span class='mdi mdi-tag mdi-18px #tags#'></span>"},
				{id: "project", header: "Project", width: 120},
				{id: "tasks", header: "Tasks", minWidth: 400, fillspace: true, template: "<span class='ellipsis'>#tasks#</span>"},
				{id: "status", header: "Status", width: 70, css: "flexCol", template: "<span class='status #status#'>#status#</span>"},
				{id: "mon", header: "Mon, 03 May", width: 108, css: "flexCol smallTextCol"},
				{id: "tue", header: "Tue, 04 May", width: 108, css: "flexCol smallTextCol"},
				{id: "wed", header: "Wed, 05 May", width: 108, css: "flexCol smallTextCol"},
				{id: "thu", header: "Thu, 06 May", width: 108, css: "flexCol smallTextCol"},
				{id: "fri", header: "Fri, 07 May", width: 108, css: "flexCol smallTextCol"},
				{id: "sat", header: "Sat, 08 May", width: 108, css: "flexCol smallTextCol"},
				{id: "sun", header: "Sun, 09 May", width: 108, css: "flexCol smallTextCol"},
				{id: "total", header: "Total time", width: 98, css: "flexCol smallTextCol"}

			],
			rowHeight: 36,
			data: dataTimesheet
		}
	]
};
