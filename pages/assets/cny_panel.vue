<template>
	<!-- 提现面板页面 -->
	<div class="page_calculation" id="calculation_cny_panel">
		<!-- 页头 -->
		<mm_header>
			<!-- 外套 -->
			<mm_warp></mm_warp>
		</mm_header>
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<!-- 格子 -->
					<mm_col>
						<mm_block>
							<!-- 提示 -->
							<mm_head>
								<mm_title class="font_small"><text class="font_success">请确认提现的微信收款二维码</text></mm_title>
							</mm_head>
							<!-- 二维码展示 -->
							<mm_body class="lr">
								<mm_list col="1">
									<mm_item class="jumbo">
										<mm_side v-if="user.rmbAddress">
											<mm_icon :src="user.rmbAddress"></mm_icon>
										</mm_side>
										<mm_uploader v-else class="upload_img" v-model="file.uri"><text v-show="!file.uri">上传收款码</text><text class="font_info"
											 v-show="file.uri" @click="saveQrcode()">点击保存</text></mm_uploader>
									</mm_item>
									<mm_item class="mini">
										<mm_main class="bt">
											<mm_title>CNY余额</mm_title>
											<mm_desc class="price"><text class="val">{{ balance }}</text><text class="unit">元</text></mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<!-- 提现表单 -->
					<mm_col>
						<mm_block>
							<mm_head>
								<mm_title class="font_small">提现额度</mm_title>
							</mm_head>
							<mm_body>
								<mm_input v-model="form.num" desc="请输入提现额度"></mm_input>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<!-- 提交按钮 -->
						<mm_div>
							<mm_btn class="full" type="default" @click.native="showModal()">提现</mm_btn>
						</mm_div>
					</mm_col>
					<mm_col class="pn-t">
						<mm_btn type="default-x" class="full" url="./cny_record"><text class="font_small font_info">提现记录</text></mm_btn>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
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
				url_submit: "~/achievement/withdraw",
				form: {
					num: "",
					code: ""
				},
				file: {
					name: "file",
					uri: ""
				},
				user: this.$store.state.user,
				btn_msg: "发送验证码"
			}
		},
		methods: {
			send_msg() {
				var _this = this;
				this.$post('~/assets/sms_code', {
					type: 3
				}, function(json, status) {
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
			saveQrcode() {
				var _this = this;
				this.$upload('~/user/add_RMB_address', {
					file: this.file
				}, function(json) {
					_this.alert(json.msg);
				})
			},
			submit_after(json, status) {
				if (json.code === 0) {
					this.show = false;
					this.$store.commit('del_cny', Number(this.form.num));
					this.alert('提现申请成功！');
					//如果确认无误，提现金额会在工作日3小时内到账
				} else {
					this.alert(json.msg);
				}
			},
			showModal() {
				if (!this.form.num) {
					this.alert('请先填写提现金额');
					return;
				}
				if (Number(this.form.num) > this.balance) {
					this.form.num = this.balance.toString();
				}
				this.show = true;
				// if(Number(this.form.num) <= this.balance){
				// 	this.show = true;
				// }
				// else {
				// 	this.alert('余额不足');
				// }
			}
		},
		computed: {
			balance() {
				return this.$double(this.$num(this.user.achievement.canExtractMoney))
			}
		},
		mounted() {
			this.file.uri = this.user.rmbAddress;
		}
	}
</script>

<style>
	.jumbo .mm_side {
		float: none;
	}

	.jumbo .mm_icon {
		margin: auto;
	}

	.qrcode {
		padding: 2rem;
		float: none;
	}

	.qrcode .mm_icon {
		width: 8rem;
		height: 8rem;
		margin: auto !important;
	}

	#calculation_cny_panel .balance {
		margin-top: .3rem;
		padding: .5rem;
		color: #999;
	}

	#calculation_cny_panel .balance_show_symbol {
		float: left;
		height: 100%;
		line-height: 2.5rem;
	}

	#calculation_cny_panel .font_big {
		font-size: 1.5rem;
	}


	#calculation_cny_panel .submit_btn {
		background: #333;
		color: #fff;
		border-color: #333;
		width: 90%;
	}

	.upload_img {
		padding: 1rem 0;
	}
</style>
