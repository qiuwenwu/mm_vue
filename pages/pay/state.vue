<template>
	<!-- 支付宝付款页面 -->
	<mm_page class="page_pay" id="pay_voucher">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<!-- 格子 -->
					<mm_col>
						<mm_block class="lr">
							<mm_list col="1">
								<mm_item class="mini">
									<mm_main>
										<mm_title>订单号</mm_title>
										<mm_desc>{{ query.orderId }}</mm_desc>
									</mm_main>
								</mm_item>
							</mm_list>
						</mm_block>
					</mm_col>

					<mm_col>
						<mm_div>
							<mm_btn type="default" class="full" @click.native="submit()">已完成支付</mm_btn>
						</mm_div>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
	</mm_page>
</template>

<script>
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				url_submit: "~/pay/confirm/we_chat_pay",
				query: {
					orderId: ""
				},
				form: {
					orderId: ""
				}
			}
		},
		methods: {
			submit_after(json, status) {
				if (json.code === 0) {
					this.$nav('/pages/mall/order_view?id=' + this.form.orderId);
				} else {
					this.$nav('/pages/pay/wechat?id=' + this.form.orderId);
				}
			}
		},
		mounted() {
			this.form.orderId = this.query.orderId;
		}
	}
</script>

<style>
</style>
