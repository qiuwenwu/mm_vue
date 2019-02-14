export default {
	props: {
		col: {
			type: Number,
			default: 4
		},
		label: {
			type: String,
			default: ""
		},
		display: {
			type: String,
			default: "1"
		},
		url: {
			type: String,
			default: "/"
		},
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
						hot: 50,
						price: 240 //价格
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
						hot: 100,
						price: 320 //价格
					},
					{
						id: 3,
						icon: '', // 图标
						img: '', // 图片
						name: '', // 名称
						title: '大锄旷利 上线VIP尊享权益公告', // 标题
						desc: '', // 摘要
						content: '', // 内容
						url: '/home/article?aid=13', // 跳转链接
						mode: '', // 页面打开方式 0为默认，1为新页面
						source: '', // 来源
						source_url: '', // 来源链接
						time: '', // 时间
						tip: '', // 角标提示
						hot: 99,
						price: 580 //价格
					}
				]
			}
		},
		vm: {
			type: Object,
			default: function() {
				return {
					id: 'id',
					icon: 'icon',
					img: 'img',
					name: 'name',
					title: 'title',
					desc: 'desc',
					content: 'content',
					url: 'url',
					mode: 'mode',
					source: 'source',
					source_url: 'source_url',
					time: 'time',
					tip: 'tip', // 提示
					hot: 'hot', // 热度
					rating: 'comment', // 评分
					views: 'comment', // 访问量
					price: 'price' // 价格
				}
			}
		}
	}
};
