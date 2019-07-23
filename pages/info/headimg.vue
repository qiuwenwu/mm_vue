<template>
	<!-- 修改头像页面 -->
	<div class="page_info" id="info_headimg">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<!-- 提示 -->
							<mm_head>
								<mm_title class="font_small"><text>头像</text></mm_title>
							</mm_head>
							<!-- 头像 -->
							<mm_body class="tb">
								<mm_uploader class="upload_img" v-model="file.uri"><text class="font_small font_info">点击修改头像</text></mm_uploader>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div>
							<mm_btn type="default" class="full" @click.native="upload()">保存</mm_btn>
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
				url_upload: '~/user/change_avatar',
				file: {
					name: 'avatar',
					uri: "/img/headimg.jpg"
				}
			}
		},
		methods:{
			upload_after(json){
				if(json){
					if(json.data){
						this.$store.dispatch('set_user', { avatar: json.data });
						this.alert('头像修改成功');
						return;
					}
				}
				this.alert(json.msg);
			}
		},
		onLoad() {
			this.file.uri = this.$store.state.user.avatar;
		}
	}
</script>

<style>
	.mm_uploader {
		padding: 2rem;
		float: none;
	}

	.mm_uploader .mm_side {
		height: 3rem;
		width: 3rem;
		border-radius: 1rem;
		margin: auto !important;
	}
</style>
