<template>
	<!-- 滑动盒子 -->
	<div class="mm_swiper_box">
		<slot></slot>
	</div><!--/view-->
</template>

<script>
	import mixin from '@/mixins/list';

	export default {
		mixins: [
			mixin
		]
	}
</script>

<style>
</style>
