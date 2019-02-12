export default {
	props: {
		list: {
			type: Array,
			default: function() {
				return [{
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
				]
			}
		},
		vm: {
			id: {
				type: String,
				default: 'id',
			},
			fid: {
				type: String,
				default: 'fid',
			},
			icon: {
				type: String,
				default: 'icon',
			},
			name: {
				type: String,
				default: 'name',
			},
			title: {
				type: String,
				default: 'title',
			},
			desc: {
				type: String,
				default: 'desc',
			},
			url: {
				type: String,
				default: 'url',
			},
			mode: {
				type: String,
				default: 'mode',
			},
			tip: {
				type: String,
				default: 'tip',
			}
		}
	}
};
