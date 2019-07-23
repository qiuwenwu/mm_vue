<template>
	<!-- 提现面板页面 -->
	<div class="page_calculation" id="calculation_btc_panel">
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
								<mm_title class="font_small"><text class="font_success">请确认收币地址是否正确</text></mm_title>
							</mm_head>
							<!-- 二维码展示 -->
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item>
										<mm_main>
											<mm_title>收币地址</mm_title>
											<mm_desc><text v-if="user.bitAddress">{{ user.bitAddress }}</text><text class="font_info" @click="show2 = true"
												 v-else>添加收币地址</text></mm_desc>
										</mm_main>
									</mm_item>
									<mm_item>
										<mm_main>
											<mm_title>BTC余额</mm_title>
											<mm_desc class="price"><text class="val">{{ balance }}</text><text class="unit">btc</text></mm_desc>
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
								<mm_title class="font_small">提币数量</mm_title>
							</mm_head>
							<mm_body>
								<mm_input v-model="form.num" desc="请输入提币数量"></mm_input>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<!-- 提交按钮 -->
						<mm_div>
							<mm_btn class="full" type="default" @click.native="showModal()">提币</mm_btn>
						</mm_div>
					</mm_col>
					<mm_col class="pn-t">
						<mm_btn type="default-x" class="full" url="./btc_record"><text class="font_small font_info">提币记录</text></mm_btn>
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

		<mm_modal v-model="show2">
			<!-- 外套 -->
			<mm_warp>
				<mm_grid col="1">
					<mm_col>
						<mm_block class="b-a">
							<mm_head class="font_samll">
								<mm_title>添加收币地址</mm_title>
							</mm_head>
							<mm_body>
								<mm_input type="text" v-model="form2.address" desc="请输入btc收币地址"></mm_input>
								<mm_code type="success-x" v-model="form2.code" desc="请输入手机验证码" :func="send_msg2" :btn="btn_msg"></mm_code>
							</mm_body>
							<mm_foot class="bt">
								<mm_group>
									<mm_btn @click.native="show2 = false">取消</mm_btn>
									<mm_btn type="default-x" @click.native="saveAddress()">确定</mm_btn>
								</mm_group>
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
				url_submit: "~/assets/withdraw",
				form: {
					num: "",
					code: ""
				},
				form2: {
					address: "",
					code: ""
				},
				user: this.$store.state.user,
				btn_msg: "发送验证码",
				show2: false
			}
		},
		methods: {
			send_msg2(){
				this.send_msg(2, '~/user/send_sms');
			},
			send_msg(type, url) {
				var _this = this;
				if(!type){
					type = 1;
				}
				if(!url){
					url = '~/assets/sms_code';
				}
				this.$post(url, {
					type: type
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
			saveAddress() {
				var _this = this;
				this.$post('~/user/add_btc_address', this.form2, function(json) {
					if(json.code === 0){
						_this.$store.dispatch('set_user', { bitAddress : _this.form2.address });
						_this.show2 = false;
						_this.btn_msg = "发送验证码";
						_this.alert('添加成功');
					}
					else {
						_this.alert(json.msg);
					}
				});
			},
			submit_after(json, status) {
				if (json.code === 0) {
					this.show = false;
					this.$store.commit('del_btc', Number(this.form.num));
					this.alert('提币申请成功！');
					//如果确认无误，提现金额会在工作日3小时内到账
				} else {
					this.alert(json.msg);
				}
			},
			showModal() {
				if (!this.form2.address) {
					this.alert('请先填写收币地址');
					return;
				}
				if (!this.form.num) {
					this.alert('请先填写提币数量');
					return;
				}
				if (Number(this.form.num) > this.balance) {
					this.form.num = this.balance.toString();
				}
				this.show = true;
			}
		},
		computed: {
			balance() {
				return this.$float(this.$num(this.user.assets.bitBalance))
			}
		},
		mounted() {
			this.form2.address = this.user.bitAddress;
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

	#calculation_btc_panel .balance {
		margin-top: .3rem;
		padding: .5rem;
		color: #999;
	}

	#calculation_btc_panel .balance_show_symbol {
		float: left;
		height: 100%;
		line-height: 2.5rem;
	}

	#calculation_btc_panel .font_big {
		font-size: 1.5rem;
	}

	#calculation_btc_panel .submit_btn {
		background: #333;
		color: #fff;
		border-color: #333;
		width: 90%;
	}

	.upload_img {
		padding: 1rem 0;
	}
</style>
