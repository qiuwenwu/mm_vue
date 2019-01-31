import $ from 'jquery';

export const state = () => ({
	user_info: {
		username: "",
		nickName: "",
		email: "",
		phone: "15817188815",
		gid: 1, //用户组ID
		aid: 0 //管理组ID
	},
	channel: [{
		cid: 1,
		name: "技术支持",
		cid: 2,
		name: "新闻动态"
	}]
});

export const mutations = {
	/// 设置用户信息
	/// state: 状态
	/// value: 用户信息模型
	setUserInfo(state, value) {
		$.eachObj(state.user_info, value);
	}
}
