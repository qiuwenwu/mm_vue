<template>
	<div class="user_base">
		<el-collapse v-model="activeNames" @change="handleChange" >
		  <el-collapse-item :title="$lang('title_account')" name="1">
				<!-- 账户 -->
			  	<el-form ref="form" label-width="5rem">
			  	<el-form-item :label="$lang('form_nickname')">
			  		<el-input v-model="form.nickName" :placeholder="$lang('form_nickname_tip')">
			  			<el-button slot="append" @click.prevent="editNickName()">{{ $lang('btn_update') }}</el-button>
			  		</el-input>
			  	</el-form-item>
			  	<el-form-item :label="$lang('form_phone')">
			  		<el-input :placeholder="user.phone" v-if="user.phone" disabled>
			  			<el-button slot="append" @click.prevent="unbindPhone()"><span>{{ $lang('btn_unbind') }}</span></el-button>
			  		</el-input>
			  		<el-input v-model="form.phone" :placeholder="$lang('form_phone_tip')" v-else>
			  			<el-button slot="append" @click.prevent="bindPhone()"><span>{{ $lang('btn_bind') }}</span></el-button>
			  		</el-input>
			  	</el-form-item>
			  	<el-form-item :label="$lang('form_email')">
			  		<el-input :placeholder="user.email" v-if="user.email" disabled>
			  			<el-button slot="append" @click.prevent="unbindEmail()"><span>{{ $lang('btn_unbind') }}</span></el-button>
			  		</el-input>
			  		<el-input v-model="form.email" :placeholder="$lang('form_email_tip')" v-else>
			  			<el-button slot="append" @click.prevent="bindEmail()"><span>{{ $lang('btn_bind') }}</span></el-button>
			  		</el-input>
			  	</el-form-item>
			  </el-form>
		  </el-collapse-item>
		  <el-collapse-item :title="$lang('title_password')" name="2">
			<el-form ref="form" label-width="5rem">
				<el-form-item :label="$lang('form_password_old')">
					<el-input v-model="account.password" :placeholder="$lang('form_password_old_tip')"></el-input>
				</el-form-item>
				<el-form-item :label="$lang('form_password_new')">
					<el-input v-model="account.password_new" :placeholder="$lang('form_password_new_tip')"></el-input>
				</el-form-item>
				<el-form-item :label="$lang('form_password_confirm')">
					<el-input v-model="account.password_confirm" :placeholder="$lang('form_password_new_confirm_tip')"></el-input>
				</el-form-item>
				<el-button class="submit" type="primary" @click.prevent="SetPassword()"><span>{{ $lang('btn_update_password') }}</span></el-button>
			</el-form>
		  </el-collapse-item>
		</el-collapse>
	
	</div>
</template>

<script>
	import $ from 'jquery';

	export default {
		components: {
			
		},
		data() {
			return {
				activeNames: ['1', '2'],
				account: {
					password: "",
					password_new: "",
					password_confirm: ""
				},
				user: this.$store.state.user.info,
				form: {
					nickName: "李白",
					phone: "",
					email: ""
				}
			}
		},
		methods: {
			editNickName() {
				this.$store.commit('setUserInfo', {
					nickName: this.form.nickName
				});
			},
			bindEmail() {
				this.$store.commit('setUserInfo', {
					email: this.form.email
				});
			},
			unbindEmail() {
				this.$store.commit('setUserInfo', {
					email: ""
				});
			},
			bindPhone() {
				this.$store.commit('setUserInfo', {
					phone: this.form.phone
				});
			},
			unbindPhone() {
				this.$store.commit('setUserInfo', {
					phone: ""
				});
			},
			SetPassword() {

			},
			handleChange(val){
				
			}
		},
		created() {
			$.obj.push(this.form, this.user);
		}
	}
</script>

<style>

</style>
