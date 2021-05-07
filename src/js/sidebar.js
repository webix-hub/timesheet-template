import {sidebarUser} from "./sidebarUser";
import {sidebarMenu} from "./sidebarMenu";
import {sidebarTags} from "./sidebarTags";

export const sidebar = {
	view: "scrollview",
	scroll: "auto",
	css: "leftSidebar",
	width: 300,
	body: {
		margin: 10,
		rows: [
			sidebarUser,
			sidebarMenu,
			sidebarTags
		]
	}
};
