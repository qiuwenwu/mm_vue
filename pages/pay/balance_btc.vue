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
						<mm_btn type="default" class="full" @click.native="show = true">立即支付</mm_btn>
					</mm_col>
					<!-- 格子 -->
					<mm_col>
						<mm_btn type="default-x" class="full" url="/pages/mall/order_list">稍后支付</mm_btn>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<!-- 支付信息 -->

		<!-- 支付表单 -->

		<!-- 数字键盘 -->
		<mm_modal v-model="show">
			<!-- 外套 -->
			<mm_warp class="send_sms">
				<mm_grid>
					<mm_col>
						<mm_block>
							<mm_head>
								<mm_title>身份验证</mm_title>
								<text class="close" @click="show = false">X</text>
							</mm_head>
							<mm_body>
								<mm_code type="success-x" v-model="form.code" desc="请输入手机验证码" :func="send_msg" :btn="btn_msg"></mm_code>
							</mm_body>
							<mm_foot style="margin-top: 1.5rem;">
								<mm_btn type="default" class="full" @click.native="submit()">确定</mm_btn>
							</mm_foot>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_modal>
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
				},
				form: {
					orderId: this.$route.query.id,
					code: ""
				},
				btn_msg: "发送验证码",
				url_submit: '~/pay/'
			}
		},
		methods: {
			getNum(text) {
				return text.replace('购买礼包', '').replace('个', '');
			},
			send_msg() {
				var _this = this;
				this.$post('~/pay/sms', null, function(json, status) {
					if (json) {
						if (json.code == 0) {
							var t = 60;
							var sl = setInterval(function() {
								t -= 1;
								if (t < 1) {
									_this.btn_msg = '发送验证码'
									t = 60;
									clearInterval(sl);
								} else {
									_this.btn_msg = t + 's';
								}
							}, 1000);
							return;
						}
					}
					_this.alert(json.msg);
				});
			},
			submit_after(json, status) {
				if (json.msg.indexOf('成功') != -1) {
					uni.navigateTo({
						url: './tip?type=balance_btc'
					});
				}
				else {
					this.alert(json.msg);
				}
			}
		}
	}
</script>

<style>
</style>
