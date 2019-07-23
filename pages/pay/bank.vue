<template>
	<!-- 支付宝付款页面 -->
	<mm_page class="page_pay" id="pay_bank">
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
						<mm_btn type="default" class="full" :url="'./voucher?orderId='+ this.obj.id">立即支付</mm_btn>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<!-- 支付信息 -->

		<!-- 支付表单 -->

		<!-- 数字键盘 -->
	</mm_page>
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
				url_upload: "~/",
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
			}
		}
	}
</script>

<style>
	#pay_bank {
		padding-bottom: 3rem;
	}

	.font_info {
		margin-left: 0.5rem;
	}

	.mm_uploader {
		padding: 2rem 0;
	}
</style>
