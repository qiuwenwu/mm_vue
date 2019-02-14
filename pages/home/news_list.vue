<template>
	<div id="home_news_list" class="main page_home">
		<div class="warp">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">{{ $lang('nav_index') }}</el-breadcrumb-item>
				<el-breadcrumb-item>{{ $lang('nav_news') }}</el-breadcrumb-item>
			</el-breadcrumb>
			<aside>
					<!-- 热门文章 -->
				<list_article :label="$lang('news_hot')" display="2" />
				
				<!-- 最新文章-->
				<list_article :label="$lang('news_new')" display="2" />
			</aside>
			<article>
				<!-- 文章列表 -->
				<list_article :list="list"/>
			</article>
		</div>
	</div>
</template>

<script>
	import list_article from '~/components/list/list_article';
	
	export default {
		components: {
			list_article
		},
		data() {
			return {
				channel: this.$store.state.channel,
				articles_hot: [],
				articles_new: [],
				list: [{
						aid: 1,
						title: "测试新闻标题列表",
						img: "/upload/article1.png",
						desc: "这里显示摘要信息",
						time: "2019-01-26 17:20"
					},
					{
						aid: 2,
						title: "测试",
						img: "/upload/article1.png",
						desc: "这里显示摘要信息，网站测试",
						time: "2019-01-26 10:20"
					},
					{
						aid: 3,
						title: "测试",
						img: "/upload/article1.png",
						desc: "这里显示摘要信息，网站测试",
						time: "2019-01-26 10:20"
					}
				]
			}
		},
		computed: {
			channel_name() {
				var name = "";
				var cid = this.$route.query.cid;
				var list = this.channel;

				for (var i = 0; i < list.length; i++) {
					var o = list[i];
					if (o.cid == cid) {
						name = o.name;
						break;
					}
				}
				return name;
			}
		}
	}
</script>

<style>
		#home_news_list aside {
		float: right;
		width: 25%;
	}
	
	#home_news_list article { 
		margin-bottom: 1.5rem;
	}
		
	#home_news_list aside ~ article {
		float: float;
		width: calc(75% - 1rem);
	}
	
	#home_news_list .banner {
		overflow: hidden;
		margin-bottom: 1rem;
		background: #fff;
		border: 1px solid #e5e5e5;
		border-radius: .5rem;
	}

	#home_news_list .banner img {
		width: 100%;
	}

	#home_news_list h3 {
		color: #000;
	}
</style>
