<template>
	<!-- 渐变框 -->
	<div class="mm_gradient" :style="'background-image: linear-gradient(' + deg + 'deg, ' + start + ' 10%, ' + end + ' 100%);'">
		<slot></slot>
	</div><!--/view-->
</template>

<script>
	export default {
		props: {
			deg: {
				type: Number,
				default: 135
			},
			start: {
				type: String,
				default: "#5EFCE8"
			},
			end: {
				type: String,
				default: "#736EFE"
			}
		}
	}
</script>

<style>
	
</style>
