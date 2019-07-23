<template>
	<mm_page class="page_assets" id="assets_index">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1">
					<mm_col>
						<mm_div>
							<div class="myHead">
								<div class="zcTop">
									<text class="title">比特中心</text>
									<text class="desc">全球首个会员制挖矿钱包服务平台</text>
								</div><!-- /view -->
							</div><!-- /view -->
							<div class="zcList">
								<mm_item class="zcItem" url="./btc_panel">
									<div>
										<div class="waiyuan">
											<div class="zhongyuan">
												<div class="neiyuan" v-bind:style="{transform: you(80)}"></div><!-- /view -->
											</div><!-- /view -->
											<div class="zhongyuan lefts">
												<div class="neiyuan-leftss" v-bind:style="{transform: zuo(80)}"></div><!-- /view -->
											</div><!-- /view -->
											<text class="content">80%</text>
										</div><!-- /view -->
										<div class="zcM">
											<text class="desc">BTC余额</text>
											<text class="number">{{ $float($num(user.assets.bitBalance)) }}</text>
										</div><!-- /view -->
									</div><!-- /view -->
								</mm_item>
								<mm_item class="zcItem" url="./cny_panel">
									<div>
										<div class="waiyuan">
											<div class="zhongyuan">
												<div class="neiyuan gerr" v-bind:style="{transform: you(90)}"></div><!-- /view -->
											</div><!-- /view -->
											<div class="zhongyuan lefts">
												<div class="neiyuan-leftss gerr" v-bind:style="{transform: zuo(90)}"></div><!-- /view -->
											</div><!-- /view -->
											<text class="content">90%</text>
										</div><!-- /view -->
										<div class="zcM">
											<text class="desc">现金余额（元）</text>
											<text class="number">{{ $double($num(user.achievement.canExtractMoney)) }}</text>
										</div><!-- /view -->
									</div><!-- /view -->
								</mm_item>
								<mm_item class="zcItem" url="/pages/calculation/dbd_list">
									<div>
										<div class="waiyuan">
											<div class="zhongyuan">
												<div class="neiyuan" v-bind:style="{transform: you(70)}"></div><!-- /view -->
											</div><!-- /view -->
											<div class="zhongyuan lefts">
												<div class="neiyuan-leftss" v-bind:style="{transform: zuo(70)}"></div><!-- /view -->
											</div><!-- /view -->
											<text class="content">70%</text>
										</div><!-- /view -->
										<div class="zcM">
											<text class="desc">持有礼包（个）</text>
											<text class="number">{{money(user.assets.dbd + user.assets.inactivated)}}</text>
										</div><!-- /view -->
									</div><!-- /view -->
								</mm_item>
							</div><!-- /view -->
							<div class="record">
								<mm_item url="/pages/calculation/output_day">
									<text class="title">今日签到收益(btc)</text>
									<text class="desc">{{coin(obj.num)}}</text>
								</mm_item>
								<mm_item url="/pages/agent/invitation_record">
									<text class="title">昨日邀请奖励(元)</text>
									<text class="desc">{{money(obj.last_invite)}}</text>
								</mm_item>
							</div><!-- /view -->
							<div class="tuijian">为你推荐</div><!-- /view -->
							<div class="libao">
								<div class="lbTop">
									<div class="lbBlock">礼包</div><!-- /view -->
									<div class="lbInfo">
										<text class="title">{{ dbd.description }}</text>
										<text class="desc">{{ dbd.price }}</text>
									</div><!-- /view -->
									<div class="qian">
										<image src="/img/qian.png" mode=""></image>
									</div><!-- /view -->
								</div><!-- /view -->
								<div class="lbFoot">
									<div>算力<text>{{ dbd.amount }}</text>TH/s</div><!-- /view -->
									<div>周期<text>365</text>天</div><!-- /view -->
									<div><mm_btn class="btn" url="/pages/calculation/dbd_view">立即购买</mm_btn></div><!-- /view -->
								</div><!-- /view -->
							</div><!-- /view -->
						</mm_div>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
	</mm_page><!-- /view -->
</template>


<script>
	import mixin from '@/mixins/page'
	export default {
		mixins: [mixin],
		data() {
			return {
				oauth: true,
				user: this.$store.state.user,
				obj: {
					num: 0,
					date: "",
					last_invite: 0
				},
				dbd: this.$store.state.dbd,
				url_get_obj: "~/user/sign_select"
			}
		},
		methods: {
			money(num) {
				return this.$double(this.$num(num));
			},
			coin(num) {
				return this.$float(this.$num(num));
			},
			get_invite() {
				var _this = this;
				this.$get('~/achievement/zuo', function(json, status) {
					_this.obj.last_invite = json.data;
				});
			},
			get_obj_after(json, status) {
				this.$obj.clear(this.obj);
				this.$obj.push(this.obj, json.data);
				this.get_invite();
				this.$get_dbd();
			},
			you(e) {
				if (-135 + e * 3.6 >= 45) {
					return "rotate(45deg)";
				} else {
					let a = -135 + e * 3.6
					return "rotate(" + a + "deg)";
				}
			},
			zuo(e) {
				if (-135 + e * 3.6 >= 45) {
					let a = e * 3.6 - 180 + 45
					return "rotate(" + a + "deg)";
				} else {
					return "rotate(45deg)";
				}
			}
		}
	}
</script>

<style>
	#assets_index {
		margin-bottom: 4rem;
	}
	.myHead {
		background-image: url('/img/beijing.png');
		background-size: 100% 100%;
		height: 12.75rem;
	}

	.zcTop {
		padding: 1rem 1.5rem;
	}

	.zcTop text {
		display: block;
		color: #FFFFFF;
		font-size: 1rem;
	}

	.zcTop .desc {
		font-size: .7rem;
	}

	.gerr {
		border-top: .5rem solid #00DD9A !important;
		border-right: .5rem solid #00DD9A !important;
	}

	.waiyuan {
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 50%;
		position: relative;
		margin: .3rem auto 1rem;
		text-align: center;
		line-height: 3.5rem;

	}

	.zhongyuan {
		width: 1.75rem;
		height: 3.5rem;
		top: 0;
		position: absolute;
		z-index: 3;
		right: 0;
		overflow: hidden;
	}

	.neiyuan {
		width: 3.5rem;
		height: 3.5rem;
		border: .5rem solid transparent;
		border-radius: 50%;
		position: absolute;
		top: 0;
		border-top: .5rem solid #FFE06E;
		border-right: .5rem solid #FFE06E;
		right: 0;
		transform: rotate(-135deg);
	}

	.lefts {
		left: 0;
		overflow: hidden;
	}

	.neiyuan-leftss {
		width: 3.5rem;
		height: 3.5rem;
		border: .5rem solid transparent;
		border-radius: 50%;
		position: absolute;
		top: 0;
		border-top: .5rem solid #FFE06E;
		border-right: .5rem solid #FFE06E;
		left: 0;
		transform: rotate(45deg);
	}

	.zcItem {
		width: 8.1rem;	
		display: inline-block;
		background: rgba(255, 255, 255, 0.9);
		margin: 1rem 0rem 1rem .75rem;
		-webkit-border-radius: .3rem;
		border-radius: .3rem;
		padding: 1rem 0;
	}

	.zcItem:first-of-type {
		margin: 1rem 0rem 1rem 1.5rem;
	}

	.zcItem:last-of-type {
		margin: 1rem 1.5rem 1rem .75rem;
	}

	.zcList {
		margin-top: -7.5rem;
		overflow-x: scroll;
		width: 100%;
		white-space: nowrap;
	}

	.content {
		font-size: .7rem;
		display: inline-block;
		width: 2rem;
		height: 2rem;
		border: 1px solid #e2e2e2;
		line-height: 2rem;
		border-radius: 50%;
	}

	.zcM text {
		display: block;
		text-align: center;
	}

	.zcM .desc {
		font-size: .7rem;
		color: #999999;
	}

	.zcM .number {
		font-size: 1rem;
		color: #333;
		font-weight: bold;
		padding: .5rem 0 0;
	}

	.record {
		margin-top: .5rem;
		display: flex;
		width: 84%;
		margin-left: 8%;
		background: #FFFFFF;
		border-radius: .3rem;
	}

	.record .mm_item {
		flex: 1;
		text-align: center;
		margin: 1rem 0;
	}

	.record .mm_item:first-of-type {
		border-right: 1px dashed #dadada;
	}

	.record text {
		display: block;
	}

	.record .title {
		font-size: .7rem;
		color: #999999;
	}

	.record .desc {
		font-size: 1rem;
		color: #333;
		font-weight: bold;
		padding-top: .25rem;
	}

	.tuijian {
		margin: 1.5rem 8% 1rem 8%;
		font-size: 0.875rem;
		font-family: PingFangSC-Medium;
		color: #333333;
		font-weight: 600;
		letter-spacing: 0;
	}

	.libao {
		width: 84%;
		margin-left: 8%;
		background: #FFFFFF;
		margin-top: 2rem;
		border-radius: .3rem;
		margin-bottom: 1rem;
	}

	.libao .lbTop {
		display: flex;
		position: relative;
	}

	.lbBlock {
		width: 4rem;
		height: 4rem;
		background: #FF5A6A;
		display: inline-block;
		text-align: center;
		line-height: 4rem;
		color: #FFFFFF;
		margin: 1rem 1rem 0;
		border-radius: .3rem;
		box-shadow: 0.1rem 0.1rem 0.5rem #FF5A6A;
		position: relative;
		top: -2rem;
		left: 0rem;
	}

	.lbInfo text {
		display: block;
		color: #333
	}

	.lbInfo .title {
		font-size: .7rem;
		padding: .5rem 0 0;
	}

	.lbInfo .desc {
		font-size: 1.2rem;
		font-weight: bold;
	}

	.lbInfo .desc:before {
		content: "￥";
		font-size: .7rem;
	}

	.lbFoot {
		display: flex;
		padding: 1rem;
		margin-top: -1.5rem;
		align-items: center;
	}

	.lbFoot view {
		display: inline-block;
		flex: 1;
		text-align: center;
		font-size: .8rem;
		color: #999999;
	}

	.lbFoot .btn {
		padding: .25rem 0.5rem;
		border: 1px solid #FF5A6A;
		color: #FF5A6A;
		border-radius: .3rem;
		background: rgba(255,90,106,0.10);
	}

	.lbFoot view text {
		color: #333;
		font-weight: 600;
		margin-left: 0.1rem;
		margin-right: 0.1rem;
	}

	.qian {
		width: 1.5rem;
		height: 1.5rem;
		position: absolute;
		right: 0.5rem;
		top: .5rem;
	}

	.qian image {
		width: 100%;
		height: 100%;
	}
	
	.title { font-family: PingFangSC-Medium; }
</style>
