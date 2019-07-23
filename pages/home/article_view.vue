<template>
	<!-- 文章详情页面 -->
	<div class="page_home" id="home_article_view">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space_big">
					<!-- 格子 -->
					<mm_col>
						<!-- 文章详情 -->
						<mm_block>
							<mm_head class="rl">
								<mm_item>
									<mm_side class="collect" @click.native="set_collection()">
										<mm_icon class="font_red" src="<i class='fa fa-heart'></i>" v-if="collection"></mm_icon>
										<mm_icon class="font_red" src="<i class='fa fa-heart-o'></i>" v-else></mm_icon>
										<text>{{ obj.users.length }}</text>
									</mm_side>
									<mm_main>
										<mm_title class="article_title">{{ obj.title }}</mm_title>
										<mm_desc>{{ obj.description }}</mm_desc>
									</mm_main>
								</mm_item>
							</mm_head>
							<mm_body class="pa">
								<mm_div v-html="obj.content"></mm_div>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
		<!-- 文章详情 -->

		<!-- 上下篇文章 -->

		<!-- 文章评论 -->
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
				url_get_obj: "~/paper/id",
				query: {
					id: "",
					title: ""
				},
				obj: {
					author: "",
					content: "",
					description: "",
					display: 0,
					grouping: "",
					id: 0,
					keyWords: [],
					state: 0,
					time: "1970-01-01 00:00:00",
					title: "",
					users: []
				},
				collection: false
			}
		},
		methods: {
			set_collection(){
				var _this = this;
				var url = "~/paper/add_collection";
				if(this.collection) {
					url = "~/user/remove_collection";
				}
				_this.$get(url + '?id=' + this.obj.id, function(json, status){
					if(json.code === 0){
						if(_this.collection){
							_this.alert('已取消');
						}
						else
						{
							_this.alert('已收藏');
						}
					}
					_this.get_obj();
				});
			},
			get_collection(){
				var _this = this;
				_this.$get('~/paper/is_collection?id=' + this.obj.id, function(json, status){
					_this.collection = json.data;
				});
			},
			get_obj_after(json, status) {
				var d = json.data;
				if (json.code) {
					this.alert(json);
				} else if (json.data) {
					this.$obj.clear(this.obj);
					if (this.url_get_obj.indexOf('id') != -1) {
						if (!d.users) {
							d.users = [];
						}
						this.$obj.push(this.obj, d);
					} else if (json.data.length > 0) {
						var o = d[0];
						if (!o.users) {
							o.users = [];
						}
						this.$obj.push(this.obj, o);
					}
					this.get_collection();
				}
			}
		},
		onLoad() {
			if (this.$route.query.title) {
				this.url_get_obj = this.url_get_obj.replace('id', 'title')
			}
			this.init();
		}
	}
</script>

<style>
	.collect {
		text-align: center;
	}

	.collect [class*=fa-heart] {
		font-size: 1.3rem;
		margin: 0;
	}

	.article_title {
		font-size: 0.875rem;
		color: #333;
		font-weight: 600;
	}

	#home_article_view .mm_desc {
		clear: both;
	}

	#home_article_view .mm_body .mm_div {
		overflow: hidden;
	}

	#home_article_view image {
		max-width: 100%;
	}
</style>
