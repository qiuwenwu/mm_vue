<template>
	<div class="page_top">
		<div class="warp">
			<page_hook name="page_top" />
			<list_notice class="fl" :list="notice" />
			<panel_style class="fr" />
			<nav_top class="fr" :list="nav" />
		</div>
	</div>
</template>

<script>
	import page_hook from '~/components/page/page_hook.vue';
	import panel_style from '~/components/panel/panel_style.vue';
	import nav_top from '~/components/nav/nav_top.vue';
	import list_notice from '~/components/list/list_notice.vue';
	
	export default {
		components: {
			page_hook,
			panel_style,
			nav_top,
			list_notice
		},
		data() { return {
			nav: this.$store.state.web.nav_top,
			notice: [{
					id: 1,
					title: '春节活动规则说明', // 标题
					url: '/home/article?aid=11', // 跳转链接
					tip: '', // 角标提示
				},
				{
					id: 2,
					title: '[限时邀请]新年微信群', // 标题
					url: '/home/article?aid=12', // 跳转链接
				},
				{
					id: 3,
					title: '大锄旷利 上线VIP尊享权益公告', // 标题
					url: '/home/article?aid=13', // 跳转链接
				}]
		}; },
		computed: {}
	}
</script>

<style>
	.page_top { height: 2.5rem; line-height: 2.5rem; background: #262a37; color: #999; overflow: hidden; }
</style>
