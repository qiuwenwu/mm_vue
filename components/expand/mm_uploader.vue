<template>
	<!-- 上传器 -->
	<div class="mm_uploader">
		<button class="mm_btn" @click="choose()"><mm_icon :src="value"></mm_icon></button>
		<slot></slot>
	</div><!--/view-->
</template>

<script>
	import mixin from '@/mixins/form';

	export default {
		mixins: [mixin],
		props: {
			// 显示方式
			display: {
				type: String,
				default: "1"
			},
			// 显示隐藏
			show: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			choose() {
				var _this = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有 // 'compressed'
					sourceType: ['album'], // 从相册选择
					success: function(res) {
						_this.$emit('input', res.tempFilePaths[0]);
					}
				});
			}
		}
	}
</script>

<style>
	.mm_uploader { text-align: center; }
	.mm_uploader .mm_btn { display: block; margin-left: auto; margin-right: auto; }
</style>
