<template>
	<div id="root_signIn" class="main page_root">
		<div class="form card modal">
			<h2 style="text-align: center;">{{ $lang('title_sign_in') }}</h2>
			<el-form label-position="right" label-width="5rem">
			<el-form-item :label="$lang('form_account')">
				<el-input type="text" v-model="form.account" class="form-control" :placeholder="$lang('form_account_tip')"></el-input>
			</el-form-item>
			<el-form-item :label="$lang('form_password')">
				<el-input type="password" v-model="form.password" class="form-control" :placeholder="$lang('form_password_tip')"></el-input>
			</el-form-item>
			<el-form-item :label="$lang('form_img_code')">
				<el-input type="text" v-model="form.code" class="form-control" :placeholder="$lang('form_img_code_tip')">
					<div slot="append" class="input-group-append">
						<img :src="codeImg"  @click="newCodeImg()"/>
					</div>
				</el-input>
			</el-form-item>
			<div class="el-form-item">
				<el-checkbox class="form_checkbox" :label="$lang('remember_me')" @click="rememberMe()"></el-checkbox>
				<router-link class="fr" to="/forgot">{{  $lang('forgot_password') }}</router-link>
			</div>
			<el-button class="fm mt" @click="submit()" type="primary">{{  $lang('btn_sign_in') }}</el-button>
			</el-form>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	
	export default {
		data() {
			return {
				lang: this.$store.state.lang.dict,
				// 登录信息
				form: {
					account: "17608170325",
					password: "root",
					code: ""
				},
				user_info: this.$store.state.user_info,
				codeImg: "http://ddns.kylinhash.com:65523/captcha/login_code.jpg",
				remember_me: false
			}
		},
		methods: {
			// 更新验证码图片
			newCodeImg() {
				var _this = this;
				_this.codeImg = "";
				setTimeout(function() {
					_this.codeImg = "http://ddns.kylinhash.com:65523/captcha/login_code.jpg";
				}, 1000);
			},
			// 记住账户
			rememberMe() {
				console.log("记住了");
			},
			// 登录
			submit() {
				var _this = this;

				// 登录
				$.ajax({
					url: "http://ddns.kylinhash.com:65523/login",
					context: JSON.stringify(_this.form),
					dataType: 'jsonp',
					success: function(data) {
						console.log("登录成功");
						// 获取用户信息
						/* $.ajax({
							url: "http://ddns.kylinhash.com:65523/user/user_info",
							context: "",
							dataType: 'jsonp',
							crossDomain: true,
							success: function() {
								$(this).addClass("done");
							 }
						});*/
					}
				});
				this.$store.commit('user/set', { nickName: "573242395@qq.com" });
				this.$router.go(-1);
			}
		}
	}
</script>

<style>

</style>
