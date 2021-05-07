export const sidebarUser = {
	view: "template",
	css: "sidebarUser",
	height: 204,
	template() {
		let html = `
            <div class="userWrapp">
                <div class="userImg">
                    <img src="./photos/avatar.png">
                    <span class="userStatus"></span>
                </div>
                <div class="userInfo">
                    <span class="userName">Oliver Brenson</span>
                    <span class="userPosition">Project Manager</span>
                </div>
            </div>
        `;
		return html;
	}
};
