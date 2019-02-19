<template>
	<div id="user_info" class="main page_user">
		<div class="warp">
			<aside>
				<nav_side :list="nav_side" v-once />
			</aside>
			<article>
				<div class="row">
					<div class="col">
						<el-tabs v-model="tabName" type="card">
							<el-tab-pane :label="$lang('tab_calculation_order')" name="order_calculation">
								<order_calculation />
							</el-tab-pane>
							<el-tab-pane :label="$lang('tab_manage_fee_order')" name="order_manage">
								<order_manage />
							</el-tab-pane>
							<el-tab-pane :label="$lang('tab_shopping_order')" name="order_product">
								<order_product />
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

	import order_calculation from '~/components/page/order/calculation.vue';
	import order_product from '~/components/page/order/product.vue';
	import order_manage from '~/components/page/order/manage.vue';

	export default {
		components: {
			nav_side,
			order_calculation,
			order_product,
			order_manage
		},
		data() {
			return {
				nav_side: this.$store.state.web.nav_side,
				tabName: "order_calculation"
			}
		}
	}
</script>

<style>

</style>
