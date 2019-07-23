<template>
	<!-- 轮播图 -->
	<swiper class="mm_swiper_card" next-margin="64rpx" previous-margin="64rpx" indicatorDots autoplay
	 indicator-active-color="#169bd5" :interval="8000" :duration="300" indicator-color="rgba(0,0,0,.3)">
		<swiper-item v-for="(o, idx) in list" :key="idx">
			<mm_div :url="o[vm.url]">
				<mm_icon :src="o[vm.img]"></mm_icon>
			</mm_div>
		</swiper-item>
		<slot></slot>
	</swiper>
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
	.mm_swiper_card {
		height: 9.5rem;
	}

	.mm_swiper_card .swiper-item {
		overflow: hidden;
	}

	.mm_swiper_card .mm_icon {
		width: calc(100% - 1rem);
		border-radius: 0.5rem;
		height: 8rem;
		margin: auto;
	}
</style>
