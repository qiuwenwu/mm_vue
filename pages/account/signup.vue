<template>
	<!-- 注册页面 -->
	<mm_page class="page_account" id="account_signup">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" class="space-x">
					<mm_col>
						<!-- 注册表单 -->
						<mm_block>
							<mm_body>
								<mm_input type="number" v-model="form.phone" :max="11" desc="请输入手机"></mm_input>
								<!-- <mm_input v-model="form.code" :max="6" desc="请输入手机验证码"></mm_input> -->
								<mm_input v-model="form.password" :max="12" type="password" desc="请设置登录密码（6-12位）"></mm_input>
								<mm_code type="success-x" v-model="form.smsCode" desc="请输入手机验证码" :func="send_msg" :btn="btn_msg"></mm_code>
								<mm_input v-model="query.invitation_code" desc="请输入邀请码"></mm_input>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div>
							<mm_btn type="default" class="full" @click.native="submit()">立即注册</mm_btn>
						</mm_div>
					</mm_col>
					<mm_col>
						<mm_div>
							<mm_btn type="default-x" class="full" url="./signin">前去登录</mm_btn>
						</mm_div>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<mm_modal v-model="show">
			<mm_warp>
				<mm_grid>
					<mm_col>
						<mm_block class="b-a">
							<mm_head>
								<mm_title>注册提示</mm_title>
								<text class="close" @click="show = false">X</text>
							</mm_head>
							<mm_body v-html="msg"></mm_body>
							<mm_foot>
								<mm_group>
									<mm_btn type="default-x" @click.native="show = false">确定</mm_btn>
								</mm_group>
							</mm_foot>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_modal>
	</mm_page>
</template>

<script>
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				url_submit: "~/register/",
				query: {
					invitation_code: ""
				},
				form: {
					phone: "",
					code: "",
					password: "",
					smsCode: ""
				},
				msg: "",
				show: false,
				ret: false,
				btn_msg: "发送验证码"
			}
		},
		computed: {
			check_phone() {
				var p = this.form.phone;
				if (!p || p.length != 11) {
					return false;
				}
				return true;
			},
			check_password() {
				var p = this.form.password;
				if (!p || p.length < 6 || p.length > 12) {
					return false;
				}
				return true;
			},
			check_invitation_code() {
				var p = this.query.invitation_code;
				if (!p) {
					return false;
				}
				return true;
			}
		},
		methods: {
			send_msg() {
				var _this = this;
				this.$post('~/register_sms', {
					phone: this.form.phone
				}, function(json, status) {
					if (json) {
						if (json.code == 0) {
							var t = 60;
							var sl = setInterval(function() {
								t -= 1;
								if (t < 1) {
									_this.btn_msg = '发送验证码'
									t = 60;
									clearInterval(sl);
								} else {
									_this.btn_msg = t + 's';
								}
							}, 1000);
							return;
						}
					}
					_this.alert(json.msg);
				});
			},
			submit() {
				if (!this.check_invitation_code) {
					this.show = true;
					this.msg = "邀请人是必须填写，没有请联系客服！";
					return;
				}
				var _this = this;
				if (this.check_phone && this.check_password) {
					this.$post(this.url_submit + this.query.invitation_code, this.form, function(json, status) {
						if (json) {
							if (json.code == 0) {
								_this.alert('注册成功!');
								setTimeout(function() {
									uni.navigateTo({
										url: './signin'
									});
								}, 2000)
							} else {
								_this.alert(json.msg);
							}
						}
					});
				}
			}
		}
	}
</script>

<style>
	.mm_modal .mm_body {
		padding: 0.625rem 0.875rem;
	}

	.mm_modal .mm_title {
		padding: 0.625rem 0.875rem;
	}
</style>
