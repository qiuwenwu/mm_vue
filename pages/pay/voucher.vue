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
						<!-- 付款明细 -->
						<mm_block>
							<mm_head class="font_small">
								<mm_title>转账信息</mm_title>
							</mm_head>
							<mm_body class="ll">
								<mm_list col="1" class="small">
									<mm_item>
										<mm_main>
											<mm_title>银行账户</mm_title>
											<mm_desc>{{ obj.bank_id }}<text class="font_info" @click="$copy(obj.bank_id)">复制</text></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>开户行</mm_title>
											<mm_desc>{{ obj.bank_name }}</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>开户名</mm_title>
											<mm_desc>{{ obj.bank_row }}</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>转账金额</mm_title>
											<mm_desc>{{ $double(Number(obj.sum)) }}<text class="font_info" @click="$copy($double(Number(obj.sum)))">复制</text></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>转账附言</mm_title>
											<mm_desc>{{ obj.msg }}
												<text class="mn-l font_info" @click="$copy($double(Number(obj.sum)))">复制</text>
											</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col class="pn-b">
						<mm_block>
							<mm_head>
								<mm_title class="font_small"><text>转账ID</text></mm_title>
							</mm_head>
							<mm_body>
								<mm_input v-model="form.transferId" desc="回执单上的ID"></mm_input>
							</mm_body>
						</mm_block>
					</mm_col>

					<mm_col class="pn-tb">
						<mm_block>
							<mm_head>
								<mm_title class="font_small"><text>开户行</text></mm_title>
							</mm_head>
							<mm_body>
								<mm_input v-model="form.agency" desc="付款的银行"></mm_input>
							</mm_body>
						</mm_block>
					</mm_col>

					<mm_col class="pn-tb">
						<mm_block>
							<mm_head>
								<mm_title class="font_small"><text>支付金额</text></mm_title>
							</mm_head>
							<mm_body>
								<mm_input type="number" v-model="form.amount" desc="本次支付的金额"></mm_input>
							</mm_body>
						</mm_block>
					</mm_col>

					<!-- 格子 -->
					<mm_col class="pn-t">
						<!-- 付款明细 -->
						<mm_block>
							<mm_head class="font_small">
								<mm_title>转账凭证</mm_title>
							</mm_head>
							<mm_body>
								<mm_uploader class="upload_voucher" v-model="file.uri">点击上传凭证</mm_uploader>
							</mm_body>
						</mm_block>
					</mm_col>
					<!-- 格子 -->
					<mm_col>
						<mm_btn type="default" class="full" @click.native="upload()">已支付</mm_btn>
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
				url_get_obj: "~/pay/",
				url_upload: "~/pay/payProof",
				query: {
					orderId: "",
				},
				obj: {
					bank_id: "",
					bank_name: "",
					bank_row: "",
					msg: "",
					sum: ""
				},
				form: {
					// proofs，transferId，payId，agency，currency，amount，type，remarks
					transferId: "", // 转账ID
					payId: "", // 支付ID
					agency: "", // 支付机构 中国银行、招商银行
					currency: "cny", // 货币种类
					amount: "", // 转账金额
					type: "1", // 凭证类型
					remarks: "" // 备注
				},
				file: {
					name: "proofs",
					uri: ""
				}
			}
		},
		methods: {
			getNum(text) {
				return text.replace('购买礼包', '').replace('个', '');
			},
			get_obj() {
				var _this = this;
				this.$post(this.url_get_obj, this.query, function(json, status) {
					if (json.code === 0) {
						_this.$obj.push(_this.obj, json.data);
						_this.form.payId = _this.obj.msg;
					}
				});
			},
			submit_after(json, status) {
				if (json.msg.indexOf('成功') != -1) {
					uni.navigateTo({
						url: './tip?type=bank'
					});
				} else {
					this.alert(json.msg);
				}
			}
		}
	}
</script>

<style>
	#pay_voucher {
		padding-bottom: 3rem;
	}

	.font_info {
		margin-left: 0.5rem;
	}

	.mm_uploader {
		padding: 2rem 0;
	}
</style>
