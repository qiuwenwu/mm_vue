<template>
	<!-- 支付宝付款页面 -->
	<div class="page" id="pay_ali">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<!-- 格子 -->
					<mm_col>
						<!-- 付款明细 -->
						<mm_block>
							<mm_head class="font_small">
								<mm_title>付款明细</mm_title>
							</mm_head>
							<mm_body class="ll">
								<mm_list col="1" class="small">
									<mm_item>
										<mm_main>
											<mm_title>订单编号</mm_title>
											<mm_desc>{{ obj.id }}</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>购买数量</mm_title>
											<mm_desc><text class="num">{{ getNum(obj.payReason) }}</text><text class="unit">个</text></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>支付金额</mm_title>
											<mm_desc class="price"><text class="unit">￥</text><text>{{ $double($num(obj.money)) }}</text></mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<!-- 格子 -->
					<mm_col>
						<mm_btn type="default" class="full" @click.native="submit()">前去支付</mm_btn>
					</mm_col>
					<!-- 格子 -->
					<mm_col>
						<mm_btn type="default-x" class="full" url="/pages/mall/order_list">稍后支付</mm_btn>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<!-- 支付信息 -->
		<div id="form_html"></div><!-- /view -->
		<!-- 支付表单 -->

		<!-- 数字键盘 -->
		<a id="link" href=""></a>
	</div><!-- /view -->
</template>

<script>
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				oauth: true,
				text: "",
				url_get_obj: "~/order/" + this.$route.query.id,
				query: {
					id: "",
				},
				obj: {
					"id": "", // 订单ID
					"type": 1, // 订单类型
					"amount": 0, // 购买数量
					"money": "0.00", // 付款金额
					"payType": "", // 购买方式
					"payReason": "", // 购买理由
					"time": "", // 时间
					"courierCompany": "", // 物流公司
					"shipmentNumber": "", // 发货方式
					"state": 0 // 订单状态
				}
			}
		},
		methods: {
			getNum(text) {
				return text.replace('购买礼包', '').replace('个', '');
			},
			submit() {
				var _this = this;
				var id = this.obj.id;
				this.$post('~/pay/', {
					orderId: id
				}, function(json, status) {
					if(json.code == 0){
						var query = encodeURIComponent(_this.$url('/pages/pay/state?orderId=' + id));
						var url = json.data + '&redirect_url=' + query;
						var obj = document.getElementById('link');
						obj.href = url;
						obj.click();
					}
					else {
						_this.alert(json.msg);
					}
				});
			}
		}
	}
</script>

<style>
</style>
