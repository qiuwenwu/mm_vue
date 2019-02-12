export default {
	props: {
		list: {
			type: Array,
			default: function() {
				return [{
					id: 1,
					icon: '', // 图标
					img: '', // 图片
					name: '', // 名称
					title: '春节活动规则说明', // 标题
					desc: '', // 摘要
					content: '', // 内容
					url: '/home/article?aid=11', // 跳转链接
					mode: '', // 页面打开方式 0为默认，1为新页面
					source: '', // 来源
					source_url: '', // 来源链接
					time: '', // 时间
					tip: '', // 角标提示
				},
				{
					id: 2,
					icon: '', // 图标
					img: '', // 图片
					name: '', // 名称
					title: '[限时邀请]新年微信群', // 标题
					desc: '', // 摘要
					content: '', // 内容
					url: '/home/article?aid=12', // 跳转链接
					mode: '', // 页面打开方式 0为默认，1为新页面
					source: '', // 来源
					source_url: '', // 来源链接
					time: '', // 时间
					tip: '', // 角标提示
				},
				{
					id: 3,
					icon: '', // 图标
					img: '', // 图片
					name: '', // 名称
					title: '大锄旷利 上线VIP尊享权益公告', // 标题
					desc: '', // 摘要
					content: '',// 内容
					url: '/home/article?aid=13', // 跳转链接
					mode: '', // 页面打开方式 0为默认，1为新页面
					source: '', // 来源
					source_url: '', // 来源链接
					time: '', // 时间
					tip: '', // 角标提示
				}
				]
			}
		},
		vm: {
			id: {
				type: String,
				default: 'id',
			},
			icon: {
				type: String,
				default: 'icon',
			},
			img: {
				type: String,
				default: 'img',
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
			content: {
				type: String,
				default: 'content',
			},
			url: {
				type: String,
				default: 'url',
			},
			mode: {
				type: String,
				default: 'mode',
			},
			source: {
				type: String,
				default: 'source',
			},
			source_url: {
				type: String,
				default: 'source_url',
			},
			time: {
				type: String,
				default: 'time',
			},
			tip: {
				type: String,
				default: 'tip',
			}
		}
	}
};
