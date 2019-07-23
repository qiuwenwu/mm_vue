<template>
	<!-- 门户页面 -->
	<div class="page_home" id="home_index">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<mm_col>
						<!-- 热点文章 —— 图片轮播 -->
						<mm_div class="index_head">
							<mm_body class="tip_bar">
								<mm_item class="lr">
									<mm_side class="mini">
										<mm_icon src="/img/sound-fill.png"></mm_icon>
									</mm_side>
									<mm_main class="pn">
										<mm_swiper_text :list="list_bulletin" v-if="list_bulletin.length > 0" />
									</mm_main>
								</mm_item>
							</mm_body>
						</mm_div>
					</mm_col>
					<!-- 格子 -->
					<mm_col class="swiper_card">
						<!-- 轮播图 -->
						<mm_swiper_card :list="list" />
					</mm_col>
					<!-- 格子 -->
					<mm_col>
						<mm_div>
							<mm_head class="lr">
								<mm_item class="font_small" url="/pages/home/article_list">
									<mm_main class="arrow">
										<mm_title>培训课程</mm_title>
										<mm_desc>更多</mm_desc>
									</mm_main>
								</mm_item>
							</mm_head>
							<mm_body class="rl">
								<mm_list_article :list="list_article" :func="check_go" class="big"></mm_list_article>
							</mm_body>
						</mm_div>
					</mm_col>
					<mm_col>
						<mm_div class="footer_info">
							<a url="../home/special?title=关于我们" class="footer_link">比特中心</a>
							<text class="copyright">Copyright © 2019-2022 weui.io</text>
						</mm_div>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
	</div><!-- /view -->
</template>

<script>
	import list_menu from '@/components/menu'
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {
			list_menu
		},
		data() {
			return {
				oauth: true,
				title: 'Hello',
				url_get_list: "~/image/grouping",
				query: {
					index: 0,
					grouping: "轮播图"
				},
				list_bulletin: [],
				banner1: {
					title: "",
					address: "",
					url: ""
				},
				list_article: [],
				dbd: this.$store.state.dbd,
				user: this.$store.state.user
			}
		},
		methods: {
			/// 验证访问权限
			check_go(obj){
				if(this.user.level < 1)
				{
					this.alert('没有阅读权限，请从底部“资产”导航中先购买礼包');
					return false;
				}
				else {
					return true;
				}
			},
			get() {
				this.$get_dbd(this.get_list);
			},
			/// 获取公告
			get_bulletin() {
				var query = {
					index: 0,
					size: 4,
					grouping: "公告"
				}
				var _this = this;
				this.$get(this.toUrl(query, "~/paper/grouping/paper"), function(json, status) {
					if (json) {
						var lt = json.content;
						if (lt) {
							_this.list_bulletin.clear();
							for (var i = 0; i < lt.length; i++) {
								var o = lt[i];
								o.url = '/pages/home/bulletin_view?id=' + o.id;
								_this.list_bulletin.push(o);
							}
						}
					}
					_this.get_article();
				});
			},
			/// 获取横幅
			get_article() {
				var query = {
					index: 0,
					size: 10,
					grouping: "培训"
				}
				var _this = this;
				this.$get(this.toUrl(query, "~/paper/grouping/paper"), function(json, status) {
					if (json) {
						var lt = json.content;
						if (lt && lt.length > 0) {
							_this.list_article.clear();
							var stamp = new Date().stamp();
							for (var i = 0; i < lt.length; i++) {
								var o = lt[i];
								o.icon = o.icon + '?tmp=' + stamp;
								o.desc = o.description;
								o.collect = o.users.length;
								o.url = '/pages/home/article_view?id=' + o.id;
								_this.list_article.push(o);
							}
						}
					}
					_this.$get_agent();
				});
			},
			// 广告
			get_list_after(json, status) {
				if (json) {
					var lt = json.data;
					if (lt) {
						this.list.clear();
						var stamp = new Date().stamp();
						for (var i = 0; i < lt.length; i++) {
							var o = lt[i];
							o.img = o.address + '?tmp=' + stamp;
							o.title = o.imageName;
							this.list.push(o);
						}
					}
				}
				this.get_bulletin();
			}
		}
	}
</script>

<style>
	.articles .mm_title {
		color: #333;
	}

	.articles .mm_head {
		background: none;
	}

	.swiper_card {
		margin-top: -8rem;
	}

	.index_head {
		background: url(/img/beijing.png) no-repeat top center;
		background-size: 100% auto;
		height: 15.5rem;
		margin-top: -2rem;
		overflow: hidden;
	}

	.tip_bar {
		background: rgba(255, 255, 255, 0.10);
		border-radius: 2rem;
		width: calc(100% - 3rem);
		margin: auto;
		margin-top: 4rem;
		color: #fff;
	}

	.banner {
		text-align: center;
	}

	.banner .mm_icon {
		height: 10rem;
	}

	.banner_title {
		padding: 0.5rem 0;
		background: #fff;
	}

	.banner_image {
		width: 100%;
		height: 10rem;
	}

	.tip_bar .mini {
		padding-top: 0.5rem;
		padding-bottom: 0;
		height: 2rem;
		line-height: 2rem;
		position: relative;
	}

	.dbd .mm_head .mm_title {
		color: #333;
	}
</style>
