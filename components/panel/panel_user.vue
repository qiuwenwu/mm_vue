<template>
	<div class="panel_user">
		<div class="nav_user" v-show="info.nickName">
			<el-dropdown @command="push">
				<div class="el-dropdown-link">
					<span>{{ info.nickName }}</span><i class="el-icon-caret-bottom"></i>
				</div>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item index="1" command="/user/panel"><span>{{ $lang('nav_asset_manage') }}</span></el-dropdown-item>
					<el-dropdown-item index="2" command="/user/order"><span>{{ $lang('nav_user_order') }}</span></el-dropdown-item>
					<el-dropdown-item index="3" command="/user/info"><span>{{ $lang('nav_user_info') }}</span></el-dropdown-item>
					<el-dropdown-item index="4" command="signout" class="center" divided><span>{{ $lang('btn_sign_out') }}</span></el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<div class="user_sign fl" v-show="info.nickName == false">
			<ul>
				<li>
					<router-link to="/signUp">{{ $lang('nav_sign_up') }}</router-link>
				</li>
				<li>
					<router-link to="/signIn">{{  $lang('nav_sign_in') }}</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				info: this.$store.state.user.info
			};
		},
		computed: {},
		methods: {
			sing_out() {
				this.$store.commit('user/sing_out', {
					nickName: ""
				});
				this.$router.push('/');
			},
			push(url) {
				if (url.indexOf('/') != -1) {
					this.$router.push(url);
				} else {
					this.sing_out();
				}
			}
		}
	}
</script>

<style>
	.panel_user {
		position: relative;
		z-index: 2;
		padding-top: 1.1rem;
	}
	.nav_user span,
	.nav_user i {
		color: #fff;
	}
	.user_sign a {
		color: inherit;
		font-size: 14px;
	}

	.user_sign li {
		float: left;
		margin-left: 1.5rem;
	}
</style>
