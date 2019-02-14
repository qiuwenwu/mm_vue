import $ from 'jquery';

export const state = () => ({
	info: {
		username: "",
		nickName: "",
		email: "",
		phone: "15817188815",
		gid: 1, //用户组ID
		aid: 0 //管理组ID
	},
	account:{
		
	}
});

// commit 设置本地参数
export const mutations = {
	/// 设置用户信息
	/// state: 状态
	/// data: 传递的参数, 用户信息模型
	set(state, data) {
		$.obj.push(state.info, data);
	},
	sing_out(state, data){
		$.obj.clear(state.info);
	}
}

// dispatch 从远程获取参数
export const actions = {
	set(store, info) {
		store.commit('set', info);
	}
}
