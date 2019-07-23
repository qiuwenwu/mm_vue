<template>
	<!-- 用户中心首页 -->
	<div class="page_user" id="user_index">
		<mm_bodyer>
			<mm_warp>
				<mm_grid col="1" class="space-x">
					<mm_col class="myHead">
						<mm_div>
							<div class="myIfon">
								<div class="myIma">
									<image :src="user.avatar"></image>
								</div><!-- /view -->
								<div class="info">
									<div class="infoTop">
										<text class="name">{{ user.nickname }}</text>
										<div class="qiandao">
											<image src="/img/qiandao.png"></image>
											<text @click.native="sign()">签到</text>
										</div><!-- /view -->
									</div><!-- /view -->
									<div class="infoFoot">
										<text class="dengji">Lv{{ user.level }}</text>
										<div class="dengjitiao">
											<div class="jd"><text>{{ progress / 10 }}</text>/10</div><!-- /view -->
											<mm_progress class="djt" :num="progress"></mm_progress>
										</div><!-- /view -->
									</div><!-- /view -->
								</div><!-- /view -->
							</div><!-- /view -->
							<div class="myList">
								<div @click="$nav('/pages/mall/order_list')">
									<image src="/img/mydingdan.png" mode=""></image>
									<text>我的订单</text>
								</div><!-- /view -->
								<div class="imgW" @click="$nav('/pages/home/collect')">
									<image src="/img/myshouchang.png" mode=""></image>
									<text>我的收藏</text>
								</div><!-- /view -->
								<div class="imgW" @click="$nav('/pages/agent/level_desc')">
									<image src="/img/mydengji.png" mode=""></image>
									<text>会员等级</text>
								</div><!-- /view -->
							</div><!-- /view -->
						</mm_div>
					</mm_col>
					<mm_col class="myMain">
						<mm_block>
							<mm_list col="1" class="tabList">
								<mm_item url="/pages/info/index">
									<image src="/img/tixian.png"></image>
									<text>账户管理</text>
								</mm_item>
								<mm_item url="/pages/info/verified">
									<image src="/img/renzheng.png"></image>
									<text>实名认证</text>
								</mm_item>
								<mm_item url="/pages/home/special?title=客服中心">
									<image src="/img/kefu.png"></image>
									<text>客服中心</text>
								</mm_item>
								<mm_item url="/pages/home/question_list">
									<image src="/img/bangzhu.png"></image>
									<text>帮助中心</text>
								</mm_item>
							</mm_list>
						</mm_block>
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
				progress: 0.00
			}
		},
		methods: {
			sign() {
				var _this = this;
				this.$get("~/user/sign", function(json, status) {
					if (json.code == 0) {
						// _this.alert(json.msg);
						uni.navigateTo({
							url: './check_in'
						})
					} else {
						_this.alert(json.msg);
					}
				});
			},
			get_obj_after(json, status) {
				if (json) {
					if (json.data) {
						this.$store.dispatch('set_user', json.data);
					}
				}
				var _this = this;
				this.$get_agent(function() {
					_this.progress = parseInt(_this.user.percentage * 100)
				});
			}
		}
	}
</script>

<style>
	.jd {
		font-size: 0.625rem;
		line-height: 1.2;
	}
	.jd text{
		color: #FFE06E;
	}
	.mm_block {
		border: none;
	}

	.myHead {
		background-image: url('/img/beijing.png');
		background-size: 100% 100%;
	}

	.myIma image {
		width: 3.3rem;
		height: 3.3rem;
		border-radius: 50%;
		margin: .35rem;
	}

	.myIma {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.3);
	}

	.myIfon {
		display: flex;
		align-items: center;
		padding: 2rem 1.5rem;
	}

	.infoFoot {
		display: flex;
		align-items: center;
	}

	.infoFoot .dengji {
		background: #FFE06E;
		border-radius: .3rem;
		font-size: 0.8rem;
		padding: 0rem .3rem;
	}

	.dengjitiao {
		margin-left: .6rem;
	}

	.djNum {
		color: #FFFFFF;
		font-size: 0.7rem;
		display: block;
	}

	.info {
		color: #FFFFFF;
		margin-left: 1rem;
	}

	.infoTop {
		margin-bottom: .5rem
	}

	.infoTop {
		width: 100%;
	}

	.qiandao {
		position: absolute;
		right: 0;
		top: 2.3rem;
		background: rgba(255, 255, 255, 0.3);
		display: flex;
		align-items: center;
		width: 4.5rem;
		border-top-left-radius: 5rem;
		border-bottom-left-radius: 5rem;
	}

	.qiandao image {
		width: 1rem;
		height: 1rem;
		margin-left: .8rem;
	}

	.qiandao text {
		font-size: .7rem;
		padding: .3rem .5rem;
		text-align: center;
	}

	.myList {
		display: flex;
		width: 100%;
		padding-bottom: 2.5rem;
	}

	.myList view {
		text-align: center;
		flex: 1;
	}

	.myList image {
		width: 1.3rem;
		height: 1.5rem;
	}

	.imgW image {
		width: 1.6rem !important;
	}

	.myList text {
		display: block;
		color: #FFFFFF;
		font-size: .75rem;
	}

	.myMain {
		background: white;
		margin-top: -1rem;
		overflow: hidden;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
	}

	.tabList {
		padding: 1.5rem 0;
		background: #FFFFFF;

	}

	.tabList .mm_item {
		display: flex;
		align-items: center;
		padding: .6rem 1.5rem;
	}

	.tabList>.mm_item>image {
		width: 2rem;
		height: 2rem;
	}

	.tabList>.mm_item>text {
		display: block;
		font-size: .8rem;
		margin-left: 1rem;
	}

	.tabList>.mm_item>text::after {
		content: "";
		display: inline-block;
		width: .6rem;
		height: .6rem;
		border-top: 1px solid #D3D3D3;
		border-right: 1px solid #D3D3D3;
		transform: rotate(45deg);
		margin-left: 10rem;
	}
</style>