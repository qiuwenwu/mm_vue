export default {
	data() {
		url: "", // 提交网址
		key: "", // 主键
		page: 1, // 当前页
		size: 10, // 分页大小
		config: {}, // 配置
		query_default: {}, // 默认查询
		query: {}, // 查询
		list: [], // 列表
		obj: {}, // 对象
		form: {}, // 表单
		// 增
		add: {
			// 接口网址
			url: "/",
			// 增加一条
			one: function(obj) {
				return null;
			},
			// 增加多条
			list: function(list) {
				return [];
			}
		},
		// 删
		del: {
			// 接口网址
			url: "/",
			// 删除一条
			one: function(id) {
				return null;
			},
			// 删除多条
			list: function(query) {
				return [];
			}
		},
		// 改
		set: {
			// 接口网址
			url: "/",
			// 修改一条
			one: function(id, obj) {
				return null;
			},
			// 修改多条
			list: function(query, obj) {
				return [];
			}
		},
		// 查
		get: {
			// 接口网址
			url: "/",
			// 查询一条
			one: function(id) {
				return null;
			},
			// 查询多条
			list: function(query) {
				return [];
			}
		},
		/// 导入
		import: function() {},
		/// 导出
		export: function() {},
		/// 初始化
		init: function() {},
		/// 搜索
		search: function() {},
		/// 重置
		reset: function() {
			
		},
		/// 验证参数
		check: function() {
			return null;
		},
		/// 提交
		submit: function() {
			
		},
		events: function(fun, tense, param) {
			return null;
		},
		func: function(fun, param1, param2) {
			var funObj = this[fun];
			if(funObj)
			{
				return funObj(param1, param2);
			}
			else
			{
				return null;
			}
		},
		load: function(bl) {
			if(bl == undefined) {
				this.loading = !this.loading;
			}
			else {
				this.loading = bl;
			}
		}
	}
};
