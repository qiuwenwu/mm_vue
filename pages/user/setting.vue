<template>
	<div id="user_info" class="main page_user">
		<div class="warp">
			<aside>
				<nav_side :list="nav_side" v-once/>
			</aside>
			<article>
				<div class="card">
					<el-tabs v-model="tabName" type="card">
						<el-tab-pane :label="$lang('tab_output_address')" name="setting_output">
							<setting_output />
						</el-tab-pane>
						<el-tab-pane :label="$lang('tab_message_setting')" name="setting_tip">
							<setting_tip />
						</el-tab-pane>
					</el-tabs>
				</div>
			</article>
		</div>
	</div>
</template>

<script>
	import nav_side from '~/components/nav/nav_side.vue';

	import setting_output from '~/components/page/setting/output.vue';
	import setting_tip from '~/components/page/setting/tip.vue';

	export default {
		components: {
			nav_side,
			setting_output,
			setting_tip
		},
		data() {
			return {
				nav_side: this.$store.state.web.nav_side,
				tabName: "setting_output"
			}
		}
	}
</script>

<style>
</style>
