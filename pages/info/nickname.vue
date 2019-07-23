<template>
	<!-- 修改邮箱页面 -->
	<div class="page_info" id="info_nickname">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<mm_head>
								<mm_title class="font_small"><text>昵称</text></mm_title>
							</mm_head>
							<mm_body>
								<mm_input v-model="form.nickName" desc="由2-12个字符组成"></mm_input>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div>
							<mm_btn type="default" class="full" @click.native="submit()">保存</mm_btn>
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
				url_submit: "~/user/change_nick",
				form: {
					nickName: ""
				}
			}
		},
		methods: {
			submit_after(json, status){
				this.alert(json.msg);
				this.$user_info();
			},
			submit_check(params){
				var n = params.nickName;
				if(n){
					if(n.length > 1 && n.length < 13){
						return true;
					}
					this.alert("昵称长度不符");
				}
				else {
					this.alert("昵称不能为空");
				}
				return false;
			}
		}
	}
</script>

<style>
</style>
