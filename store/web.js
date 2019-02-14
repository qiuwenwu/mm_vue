import $ from 'jquery';

export const state = () => ({
	nav_foot: [{
			id: 1,
			title: '首页', // 标题
			name: '', // 名称
			url: '/', // 跳转链接
		},
		{
			id: 2,
			title: '算力', // 标题
			name: '', // 名称
			url: '/calculation_list', // 跳转链接
		},
		{
			id: 3,
			title: '导航3', // 标题
			name: '', // 名称
			url: '/home/article?aid=13', // 跳转链接
		}
	],
	nav_friend: [],
	nav_head: [{
			id: 1,
			fid: 0,
			icon: '', // 图标
			name: '', // 名称
			title: '导航1', // 标题
			desc: '', // 摘要
			url: '/home/article?aid=11', // 跳转链接
			mode: '', // 页面打开方式 0为默认，1为新页面
			tip: '' // 角标提示

		},
		{
			id: 2,
			fid: 0,
			icon: '', // 图标
			name: '', // 名称
			title: '导航2', // 标题
			desc: '', // 摘要
			url: '/home/article?aid=12', // 跳转链接
			mode: '', // 页面打开方式 0为默认，1为新页面
			tip: '' // 角标提示
		},
		{
			id: 3,
			fid: 0,
			icon: '', // 图标
			name: '', // 名称
			title: '导航3', // 标题
			desc: '', // 摘要
			url: '/home/article?aid=13', // 跳转链接
			mode: '', // 页面打开方式 0为默认，1为新页面
			tip: '' // 角标提示
		}
	],
	nav_main: [{
			id: 1,
			title: '首页', // 标题
			name: 'Home', // 名称
			url: '/', // 跳转链接
		},
		{
			id: 2,
			title: '钱包', // 标题
			name: 'Wallet', // 名称
			url: '/mall/product_view?title=钱包', // 跳转链接
		},
		{
			id: 3,
			title: '算力', // 标题
			name: 'Calculation', // 名称
			url: '/mall/calculation_list', // 跳转链接
		},
		{
			id: 4,
			title: '芯片', // 标题
			name: 'Chip', // 名称
			url: '/mall/product_view?title=芯片', // 跳转链接
		},
		{
			id: 5,
			title: '关于我们', // 标题
			name: 'About_us', // 名称
			url: '/about', // 跳转链接
		},
		{
			id: 6,
			title: '新闻动态', // 标题
			name: 'News', // 名称
			url: '/home/news_list?cid=2', // 跳转链接
		}
	],
	nav_path: [],
	nav_quick: [],
	nav_side: [],
	nav_tag: [],
	nav_type: [],
	nav_top: []
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
