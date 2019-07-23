<template>
	<!-- 实名认证页面 -->
	<div class="page_info" id="info_verified">
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
								<mm_title class="font_small"><text class="font_danger">实名认证后不可更改，请勿使用别人的身份证</text></mm_title>
							</mm_head>
							<!-- 头像 -->
							<mm_body class="tb">
								<mm_uploader class="card_pic_front" v-model="card_A.uri">身份证正面</mm_uploader>
								<mm_uploader class="card_pic_obverse" v-model="card_B.uri">身份证反面</mm_uploader>
								<mm_uploader class="card_pic_handheld" v-model="card_C.uri">手持身份证</mm_uploader>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col class="pn-b">
						<mm_block>
							<mm_head>
								<mm_title class="font_small"><text>身份证号</text></mm_title>
							</mm_head>
							<mm_body>
								<mm_input v-model="form.IDcard" :max="18" desc="请填写真实身份证号"></mm_input>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col class="pn-t">
						<mm_block>
							<mm_head>
								<mm_title class="font_small"><text>姓名</text></mm_title>
							</mm_head>
							<mm_body>
								<mm_input v-model="form.name" desc="请填写身份证上的姓名"></mm_input>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col>
						<mm_div>
							<mm_btn type="default" class="full" @click.native="submit()">提交</mm_btn>
						</mm_div>
					</mm_col>
					<mm_col>
						<mm_div class="approve">
			<!-- 				<checkbox-group>
								<label @click="checked = !checked">
									<checkbox value="cb" :checked="checked" />同意
								</label>
								<navigator class="font_info" url="/pages/home/protocol?title=实名认证协议">《实名认证协议》</navigator>
							</checkbox-group> -->
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
		data() {
			return {
				oauth: true,
				checked: true,
				url_upload: "~/user/verified",
				form: {
					name: "",
					IDcard: "",
					type: 1
				},
				card_A: {
					name: "file",
					uri: ""
				},
				card_B: {
					name: "file",
					uri: ""
				},
				card_C: {
					name: "file",
					uri: ""
				}
			}
		},
		methods: {
			submit_check(params) {
				if (!this.checked) {
					this.alert('请先阅读并同意实名认证协议');
					return false;
				}
				return true;
			},
			submit() {
				if (!this.submit_check()) {
					return;
				}
				var _this = this;
				this.upFile(1, function(json) {
					if (json.code == 0) {
						_this.upFile(2, function(json_2) {
							if (json_2.code == 0) {
								_this.upFile(3, function(json_3) {
									if (json_3.code == 0) {
										_this.alert(json_3.msg);
										_this.$store.dispatch('set_user', {
											state: 7
										});
										return;
									}
								});
							}
						});
					} else {
						_this.alert(json.msg);
					}
				});
			},
			upFile(type, fun) {
				var f = this.$obj.copy(this.form);
				f.type = type;
				switch (type) {
					case 1:
						f.file = this.card_A;
						break;
					case 2:
						f.file = this.card_B;
						break;
					default:
						f.file = this.card_C;
						break;
				}
				this.$upload("~/user/verified_one", f, fun);
			}
		}
	}
</script>

<style>
	.approve {
		text-align: center;
		padding-bottom: 2rem;
		font-size: 0.75rem;
	}

	.approve navigator {
		display: inline-block;
	}

	.pic:active {
		background: none;
	}

	.pic {
		padding: 1.5rem 2rem;
		float: none;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.pic .mm_icon {
		height: 10rem;
		margin: auto !important;
		border-radius: 0.35rem;
	}

	.pic .mm_desc {
		clear: both;
		text-align: center;
	}
</style>
