import $ from 'jquery';

export const state = () => ({
	name: "red"
});

// commit 设置本地参数
export const mutations = {
	/// 设置语言字典
	/// state: 状态
	/// data: 传递的参数, 语言字典模型
	set(state, data) {
		state.name = data;
		$.cookie('style', data, 7200);
	}
}

// dispatch 从远程获取参数
export const actions = {
	set(store, name) {
		store.commit('set', name);
	}
}