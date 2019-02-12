import $ from 'jquery';

export const state = () => ({
	nav_foot: [],
	nav_friend: [],
	nav_head: [],
	nav_main: [],
	nav_path: [],
	nav_quick: [],
	nav_side: [],
	nav_tag: [],
	nav_type: []
});

// commit 设置本地参数
export const mutations = {
	/// 设置语言字典
	/// state: 状态
	/// data: 传递的参数, 语言字典模型
	set(state, data) {
// 		state.now = data.now;
// 		$.obj.push(state.dict, data.dict);
	}
}

// dispatch 从远程获取参数
export const actions = {
	set(store, lang) {
		var _this = this;
// 		$.http.get('/lang/' + lang + '.json', function(data, status) {
// 			if (data) {
// 				$.cookie('lang', lang, 7200);
// 				store.commit('set', {
// 					now: lang,
// 					dict: data
// 				});
// 			}
// 		});
	}
}
