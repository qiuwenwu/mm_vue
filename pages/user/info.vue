<template>
	<div id="user_info" class="main page_user">
		<div class="warp">
			<aside>
				<nav_side :list="nav_side" v-once/>
			</aside>
			<article>
				<div class="row">
					<div class="col">
						<el-tabs v-model="tabName" type="card">
							<el-tab-pane :label="$lang('tab_basic_info')" name="user_base">
								<user_base />
							</el-tab-pane>
							<el-tab-pane :label="$lang('tab_authentication')" name="user_id_card">
								<user_id_card />
							</el-tab-pane>
							<el-tab-pane :label="$lang('tab_shipping_address')" name="user_address">
								<user_address />
							</el-tab-pane>
							<el-tab-pane :label="$lang('tab_share_reward_coins')" name="user_spread">
								<user_spread />
							</el-tab-pane>
						</el-tabs>
					</div>
				</div>
			</article>
		</div>
	</div>
</template>

<script>

	import nav_side from '~/components/nav/nav_side.vue';
	import user_base from '~/components/page/user/base.vue';
	import user_spread from '~/components/page/user/spread.vue';
	import user_address from '~/components/page/user/address.vue';
	import user_id_card from '~/components/page/user/id_card.vue';

	export default {
		components: {
			nav_side,
			user_base,
			user_spread,
			user_address,
			user_id_card
		},
		data() {
			return {
				nav_side: this.$store.state.web.nav_side,
				tabName: "user_base"
			}
		}
	}
</script>

<style>

</style>
