<template>
	<header class="page_head">
		<div class="warp">
			<page_hook name="page_head_top"/>
			<logo class="fl" />
			<nav_main class="fl" :list="nav" />
			<panel_lang class="fr" />
			<panel_user class="fr" />
			<page_hook name="page_head_bottom" />
		</div>
	</header>
</template>

<script>
	import page_hook from '~/components/page/page_hook.vue';
	import panel_lang from '~/components/panel/panel_lang.vue';
	import panel_user from '~/components/panel/panel_user.vue';
	import logo from '~/components/logo';
	import nav_main from '~/components/nav/nav_main.vue';

	export default {
		components: {
			page_hook,
			panel_lang,
			panel_user,
			nav_main,
			logo
		},
		data() { return {
			nav: this.$store.state.web.nav_main,
		}; },
		computed: {}
	}
</script>

<style>
	.page_head {
		background: #2E2E2E;
		color: #fff;
		min-height: 3.75rem;
		text-align: right;
	}
</style>
