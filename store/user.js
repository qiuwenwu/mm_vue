import $ from '@/plugins/mm_sdk';

export default  () => ({
	state: {
		// isLoad: false,
		// username: "qiuwenwu",
		// name: "邱文武",
		// nickName: "命天子",
		// group_user: [],
		// group_admin: [],
		token: "",
		// gm: 1,
		// vip: 5
		name: "",
		level: 0,
		isLoad: false,
		userId: 0,
		phone: "",
		loginRecords: [],
		email: "",
		avatar: "",
		nickname: "",
		state: 0,
		userPapers: [],
		assets: {
			"userId": 0,
			"dbd": 0.0,
			"inactivated": 0.0,
			"dbdFreeze": 0.0,
			"dbdFulfill": 0.0,
			"dbdFlows": [],
			"bitBalance": "0E-8",
			"miningFlows": [],
			"bitFreeze": "0E-8",
			"time": "2019-06-22 15:08:37"
		},
		achievement: {
			"userId": 0,
			"oneHuman": 0,
			"twoHuman": 0,
			"oneSales": 0.0,
			"twoSales": 0.0,
			"oneInterest": "0E-8",
			"twoInterest": "0E-8",
			"canExtractMoney": "0E-8",
			"frostMoney": "0E-8",
			"alreadyExtractMoney": "0E-8",
			"achievementFlows": []
		},
		rmbAddress: "",
		bitAddress: "",
		userPapers: [],
		registerTime: "2019-06-22 15:08:37",
		roles: [],
		hold: 0,
		hold1: 0,
		hold2: 0,
		level: 0,
		people: 0,
		people2: 0,
		percentage: 0,
		code: "",
		fatherCode: "",
		sonCode: []
	},
	mutations: {
		/// 设置用户信息
		/// state: 状态
		/// data: 传递的参数, 用户信息模型
		set_user(state, data) {
			if (data.userId) {
				data.isLoad = true;
			}
			if (data.avatar) {
				var t = new Date();
				data.avatar += "?temp=" + t.stamp();
			}
			if (data.rmbAddress) {
				var t = new Date();
				data.rmbAddress += "?temp=" + t.stamp();
			}
			$.obj.push(state, data);
		},
		/// 提现
		/// state: 状态
		/// num: 扣除的数量
		del_cny(state, num) {
			state.achievement.canExtractMoney -= num;
		},
		/// 提币
		/// state: 状态
		/// num: 扣除的数量
		del_btc(state, num) {
			state.assets.bitBalance -= num;
		},
		logout(state, data) {
			$.obj.clear(state);
			$.db.del("token");
		}
	},
	actions: {
		// 设置用户信息
		set_user(context, user_info) {
			context.commit('set_user', user_info)
		},
		logout(context) {
			context.commit('logout')
		}
	},
	getters: {}
});
