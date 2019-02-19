export default {
	props: {
		func: {
			type: Object,
			default: function(fun, param1, param2) {
				return null;
			}
		},
		label: {
			type: String,
			default: ""
		},
		url: {
			type: String,
			default: "/"
		},
		display: {
			type: String,
			default: "1"
		},
		loading: {
			type: Boolean,
			default: false
		},
		index: {
			type: Number,
			default: false
		},
		col: {
			type: Number,
			default: 4
		},
		obj: {
			type: Object,
			default: function() {
				return {}
			}
		},
		list: {
			type: Array,
			default: function() {
				return []
			}
		},
		vm: {
			type: Object,
			default: function() {
				return {
					id: 'id', // 当前ID
					fid: 'fid', // 上级ID
					icon: 'icon', // 图标
					title: 'title', // 标题
					desc: 'desc', // 描述
					url: 'url', // 链接
					mode: 'mode', // 方式
					name: 'name', // 名称
					value: 'value', // 值
					tip: 'tip', // 提示
				}
			}
		}
	},
	computed: {
		item() {
			if (this.list.length > 0) {
				return this.list[this.index]
			} else {
				return {};
			}
		}
	}
};
