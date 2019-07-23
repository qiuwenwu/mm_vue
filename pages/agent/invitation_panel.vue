<template>
	<!-- 邀请面板页面 -->
	<div class="page_agent" id="agent_invitation_panel">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" id='taocan_detail'>
					<mm_col>
						<mm_div>
							<div id="yaoqing">
								<image src="/img/bg_invite.png"></image>
								<div class="tishi">
									<div>邀请好友</div><!-- /view -->
									<div class="youhui">立享受<text>10-80</text>元现金红包</div><!-- /view -->
									<mm_btn type="default-x" class="yqBtn" url="./level_desc">更多奖励机制</mm_btn>
								</div><!-- /view -->
								<div class="erji">
									<div class="erji-top">
										<mm_item url="./member_list">
											<text class="num">{{ user.sonCode.length }}</text>
											<text class="fenlei">邀请人数</text>
										</mm_item>
										<mm_item url="./invitation_record">
											<text class="num">{{ $double($num(user.achievement.canExtractMoney)) }}</text>
											<text class="fenlei">邀请奖励</text>
										</mm_item>
									</div><!-- /view -->
									<div class="erweima">
										<div class="erweimaInfo">
											<text class="title">我的邀请码</text>
											<text class="yaoqingma">{{ user.code }}</text>
											<text class="btnCook" @click="$copy(user.code)">复制邀请码</text>
										</div><!-- /view -->
										<mm_qrcode display="2" class="invitation_qrcode" :value="invitation_qrcode" v-if="invitation_qrcode"></mm_qrcode>
									</div><!-- /view -->
								</div><!-- /view -->
								<div class="fenxiang" :class="atvc == 1?'avtive':''">
									<image src="/img/link_invite.png" @click="shenshuo"></image>
									<text @click="$copy(invitation_qrcode)">复制邀请链接</text>
								</div><!-- /view -->
							</div><!-- /view -->
						</mm_div>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
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
				user: this.$store.state.user,
				url_get_obj: "~/spread/",
				query: {},
				progress: 0.00,
				state: 0,
				number: 1,
				atvc: 0
			}
		},
		computed: {
			invitation_qrcode() {
				if (this.user.code) {
					return this.$url('/pages/account/signup?invitation_code=' + this.user.code);
				} else {
					return null;
				}
			}
		},
		methods: {
			get_obj_after(json, status) {
				if (json) {
					if (json.data) {
						this.$store.dispatch('set_user', json.data);
					}
				}
				var _this = this;
				this.$get_agent(function() {
					_this.progress = Number(_this.$double(_this.user.percentage * 100))
				});
			},
			shenshuo() {
				if (this.atvc == 0) {
					this.atvc = 1
				} else {
					this.atvc = 0
				}
			}
		}
	}
</script>


<style>
	.invitation_qrcode {
		margin-top: 1rem;
	}
	
	#yaoqing {
		width: 100%;
		position: relative;
	}

	#yaoqing>image {
		width: 100%;
		height: 13.5rem;
		display: block;
	}

	#yaoqing .tishi {
		position: absolute;
		top: 4rem;
		left: 1.5rem;
		font-weight: bolder;
		-webkit-text-stroke: thin #ffffff;
		font-size: 1.2rem;
		-webkit-text-fill-color: #E24A66;
	}

	#yaoqing .tishi .youhui {
		font-size: .7rem;
	}

	#yaoqing .fenxiang {
		position: fixed;
		bottom: 4rem;
		right: 0rem;
		height: 2.45rem;
		width: 2.45rem;
		overflow: hidden;
		/* width: 8.5rem; */
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #0B76C4;
		border-radius: 2.4rem;
		/* transform: translate(5.7rem, 0rem); */
		/* transition: transform 1s; */
		transition: width 1s;
	}

	#yaoqing .avtive {
		/* transform: translate(-.5rem, 0rpx); */
		width: 8.5rem;
	}

	#yaoqing .fenxiang image {
		width: 2.2rem;
		height: 2.2rem;
		margin-left: .15rem;
		display: block;
		position: absolute;
	}

	#yaoqing .fenxiang text {
		white-space: nowrap;
		width: 100%;
		font-size: .7rem;
		overflow: hidden;
		color: #ffffff;
		margin-left: 2.75rem;
		margin-right: .75rem;
	}

	.youhui text {
		font-weight: 500;
		-webkit-text-fill-color: #ffffff;
		color: #ffffff;
		font-size: 1.3rem;
	}

	.tishi .yqBtn {
		padding: .3rem 0rem;
		border-radius: 1rem;
		font-weight: inherit;
		font-size: .5rem;
		text-align: center;
		width: 7rem;
		margin-top: .5rem;
	}

	#yaoqing .erji {
		width: 86%;
		margin-left: 7%;
		margin-top: -2rem;
		margin-bottom: 1rem;
		position: relative;
	}

	.erji .erji-top {
		display: flex;
		background: rgba(255, 255, 255, 0.90);
		border-radius: .3rem;
	}

	.erji .erji-top .mm_item {
		width: 50%;
		text-align: center;
		margin: 1.5rem 0;
	}

	.erji .erji-top .mm_item {
		border-right: 1px dashed #e2e2e2;
	}

	.erji .erji-top .mm_item:last-of-type {
		border-right: none;
	}

	.erji .erji-top text {
		display: block;
	}

	.erji-top .num {
		font-size: 1.5rem;
		color: #E24A66;
	}

	.erji-top .fenlei {
		font-size: .8rem;
		color: #a5a3a3;
		position: relative;
	}

	.erji-top .fenlei:after {
		content: "";
		display: inline-block;
		width: 0;
		height: 0;
		border-width: .3rem;
		border-style: solid;
		border-color: transparent transparent transparent #dcdbdb;
		position: absolute;
		top: .25rem;
		margin-left: .5rem;
	}

	.erweima {
		width: 100%;
		background: #ffffff;
		text-align: center;
		padding: 1rem 0;
		border-radius: .3rem;
		margin-top: 2px;
	}

	.erweimaInfo text {
		display: block;
	}

	.erweimaInfo .title {
		font-size: .8rem;
		color: #000000;
	}

	.erweimaInfo .yaoqingma {
		font-size: 1.5rem;
		color: #E24A66;
	}

	.erweimaInfo .btnCook {
		font-size: .7rem;
		color: #ffffff;
		display: inline-block;
		padding: .2rem 1rem;
		background: #0B76C4;
		border-radius: 1rem;
		margin-top: 1rem;
	}

	.erweima image {
		width: 8rem;
		height: 8rem;
		margin: 1rem 0 .5rem 0;
	}

	.erweima .baocun {
		display: block;
		text-align: center;
		color: #dbdbdb;
		font-size: .8rem;
	}
</style>
