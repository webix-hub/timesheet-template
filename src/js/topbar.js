export const topbar = {
	margin: 10,
	cols: [
		{
			view: "label",
			label: "Dashboard",
			width: 76
		},
		{
			view: "search",
			placeholder: "Search..",
			width: 230
		},
		{
			view: "daterangepicker",
			icon: "mdi mdi-calendar-month",
			width: 230,
			value: {start: new Date(2021, 4, 3), end: new Date(2021, 4, 9)},
			format: "%d-%M-%Y",
			suggest: {
				view: "daterangesuggest",
				body: {
					calendarCount: 1
				}
			}
		},
		{}
	]
};
