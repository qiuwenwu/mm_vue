<template>
	<!-- 收藏列表页 -->
	<div class="page_home" id="home_news_list">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<!-- 格子 -->
					<mm_col>
						<!-- 文章列表 -->
						<mm_block>
							<mm_head class="font_small">
								<mm_title>课程</mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list_article :list="user.userPapers" class="big" :func="check_go"></mm_list_article>
							</mm_body>
							<mm_foot class="bt">
								<mm_div class="center">
									<mm_desc>已收藏<text>{{ user.userPapers.length }}</text>篇</mm_desc>
								</mm_div>
							</mm_foot>
						</mm_block>
					</mm_col>

					<!-- 格子 -->
					<!-- 文章列表 -->
					<!-- <mm_col v-if="list_news.length > 0">
						<mm_block>
							<mm_head class="font_small">
								<mm_title>新闻</mm_title>
							</mm_head>
							<mm_body class="rl">
								<mm_list_news :list="list" class="big"></mm_list_news>
							</mm_body>
							<mm_foot class="bt">
								<mm_div class="center">
									<mm_desc>已收藏15篇</mm_desc>
								</mm_div>
							</mm_foot>
						</mm_block>
					</mm_col> -->
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<!-- 新闻筛选面板 -->

		<!-- 新闻排序条件 -->

		<!-- 新闻列表 -->
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
				list_news: []
			}
		},
		onLoad() {
			this.$get_agent(this.get_collect);
		},
		methods: {
			/// 验证访问权限
			check_go(obj) {
				if (this.user.level < 1) {
					this.alert('没有阅读权限，请从底部“资产”导航中先购买礼包');
					return false;
				} else {
					return true;
				}
			},
			get_collect() {
				this.list.clear();
				var lt = this.user.userPapers;
				var stamp = new Date().stamp();
				for (var i = 0; i < lt.length; i++) {
					lt[i].icon = lt[i].icon + '?tmp=' + stamp;
					lt[i].url = "/pages/home/article_view?id=" + lt[i].id;
					this.list.push(lt[i]);
				}
			}
		}
	}
</script>

<style>
</style>
