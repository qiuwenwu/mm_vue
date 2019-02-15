import $ from 'jquery';

export const state = () => ({
	now: "chinese",
	dict: {
			"nav_index": "首页",
			"nav_product": "产品",
			"nav_calculation": "算力",
			"nav_help": "技术支持",
			"nav_about": "关于我们",
			"nav_news": "新闻动态",
			"nav_sign_up": "注册",
			"nav_sign_in": "登录",
			"nav_panel": "控制面板",
			"nav_wallet": "硬件钱包",
			"nav_chip": "芯片",
			"nav_details": "文章详情",
			"title_register": "注册",
			"title_sign_in": "登录",
			"title_retrieve_account": "找回密码",
			"title_account": "账户",
			"title_password": "密码",
			"vcode": "验证码",
			"form_phone": "手机号码",
			"form_phone_tip": "不是国内需要添加区号",
			"form_email": "邮箱",
			"form_email_tip": "请使用每个人都知道的电子邮件地址。",
			"form_account": "用户名",
			"form_account_tip": "手机号码 / 邮箱",
			"form_password": "密码",
			"form_password_tip": "由6-12位数字和字母组成",
			"form_img_code": "验证码",
			"form_img_code_tip": "验证码",
			"remember_me": "记住我",
			"forgot_password": "忘记密码了？",
			"unit": "￥",
			"unit_name": "人民币",
			"hashrate": "算力",
			"weight": "重量",
			"delivery_date": "发货时间",
			"total": "合计",
			"day": "天",
			"solded": "已售",
			"buy_now": "立即购买",
			"btn_sign_out": "退出",
			"foot_slogan": "注册一个帐户，我们会向您推送最新消息。",
			"foot_contact_us": "联系我们",
			"foot_address": "深圳市南山区深圳湾科技生态园11栋38楼3802室",
			"foot_contact": "联系方式",
			"foot_join_us": "加入我们",
			"foot_disclaimer": "免责声明",
			"company": "公司",
			"public_wechat": "大锄公众号",
			"rrs_new": "订阅我们的新闻",
			"foot_copyright": "Copyright © 2017 digBig Systems Incorporated. All rights reserved.",
			"btn_sign_in": "登录",
			"btn_register": "注册",
			"btn_send_code": "发送验证码",
			"form_password_confirm": "确认密码",
			"form_password_confirm_tip": "再次输入密码",
			"form_code": "验证码",
			"form_code_tip": "输入验证码",
			"form_code_phone_tip": "输入短信验证码",
			"form_code_email_tip": "输入电子邮箱验证码",
			"no_data": "暂无数据...",
			"btn_update_password": "更新密码",
			"nav_user_panel": "控制面板",
			"nav_user_order": "我的订单",
			"nav_user_info": "个人中心",
			"nav_user_setting": "操作设置",
			"form_password_old": "旧密码",
			"form_password_old_tip": "你当前的密码",
			"form_password_new": "新密码",
			"form_password_new_tip": "登录的新密码",
			"form_nickname": "昵称",
			"form_nickname_tip": "由4-12个字符组成",
			"form_password_new_confirm_tip": "再次输入新密码",
			"btn_bind": "绑定",
			"btn_unbind": "解绑",
			"btn_update": "修改",
			"tab_basic_info": "基本信息",
			"tab_authentication": "实名认证",
			"tab_shipping_address": "收货地址",
			"tab_share_reward_coins": "分享奖励",
			"title_address": "已存地址",
			"tab_calculation_order": "算力套餐订单",
			"tab_maintenance_fee_order": "维护费订单",
			"tab_shopping_order": "产品购买订单",
			"tab_output_address": "收币地址",
			"tab_message_setting": "提醒设置",
			"product_description": "产品描述",
			"product_reminder": "温馨提示",
			"product_buy_way": "付款方式",
			"product_contact": "联系方式",
			"product_service": "售后服务",
			"product_help": "技术支持",
			"news_hot": "热点新闻",
			"news_new": "最新资讯",
			"news_related": "相关新闻",
			"add_shopping_cart": "加入购物车",
			"order_info": "订单信息",
			"order_currency": "币种",
			"order_miner": "机型",
			"order_computing_power": "算力",
			"order_duration": "周期",
			"order_pool": "矿池",
			"order_pool_desc": "订单生效之后可以再修改矿池",
			"order_usage_fee": "使用费",
			"order_mining_days": "挖矿天数",
			"please_choose": "请选择",
			"order_manage_fee": "维护费",
			"order_manage_fee_tip": "( 价格 x 算力 x 挖矿天数 )",
			"pay_way": "支付方式",
			"pay_way_tip": "支持支付宝、微信、网银支付",
			"order_count": "总计",
			"read_and_agree": "已阅读并同意",
			"user_protocol": "《用户服务协议》"
		}
});

// commit 设置本地参数
export const mutations = {
	/// 设置语言字典
	/// state: 状态
	/// data: 传递的参数, 语言字典模型
	set(state, data) {
		state.now = data.now;
		$.obj.push(state.dict, data.dict);
		$.cookie('lang', data.now, 7200);
	}
}

// dispatch 从远程获取参数
export const actions = {
	set(store, lang) {
		var _this = this;
		$.http.get('/lang/' + lang + '.json', function(data, status) {
			if (data) {
				store.commit('set', {
					now: lang,
					dict: data
				});
			}
		});
	}
}
