<template>
	<div id="root_forgot" class="main page_root">
		<div class="form card modal">
			<h2 style="text-align: center;">{{ $lang('title_retrieve_account') }}</h2>
			<el-form label-position="right" label-width="5rem">
			<el-form-item :label="$lang('form_account')">
				<el-input type="text" v-model="form.account" class="form-control" :placeholder="$lang('form_account_tip')"></el-input>
			</el-form-item>
			<el-form-item :label="$lang('form_password')">
				<el-input type="password" v-model="form.password" class="form-control" :placeholder="$lang('form_password_tip')"></el-input>
			</el-form-item>
			<el-form-item :label="$lang('form_password_confirm')">
				<el-input type="password" v-model="form.password_confirm" class="form-control" :placeholder="$lang('form_password_confirm_tip')"></el-input>
			</el-form-item>
			<el-form-item :label="$lang('form_code')">
				<el-input type="text" v-model="form.code" class="form-control" :placeholder="code_tip">
					<el-button slot="append">{{ $lang('btn_send_code') }}</el-button>
				</el-input>
			</el-form-item>
				<el-button class="fm" @click="submit()" type="primary">{{ $lang('btn_update_password') }}</el-button>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		computed:{
			code_tip(){
				if(!this.form.account){
					return this.$lang('form_code_tip');
				}
				else if(this.form.account.indexOf('@') != -1)
				{
					return this.$lang('form_code_email_tip');
				}
				else
				{
					return this.$lang('form_code_phone_tip');
				}
			}
		},
		data() {
			return {
				// 登录信息
				form:{
					account: "17608170325",
					password: "root",
					password_confirm: "",
					code: ""
				},
				codeImg: "http://ddns.kylinhash.com:65523/captcha/login_code.jpg",
				message: 'Hello Vue!'
			}
		}
	}
</script>

<style>

</style>
