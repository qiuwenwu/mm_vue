<template>
	<div class="page_head"></div>
</template>

<script>
	import page_hook from '~/components/page/page_hook.vue';
	import panel_style from '~/components/panel/panel_style.vue';
	import panel_lang from '~/components/panel/panel_lang.vue';
	import panel_user from '~/components/panel/panel_user.vue';
	import nav_head from '~/components/nav/nav_head.vue';
	import nav_main from '~/components/nav/nav_main.vue';
	import nav_quick from '~/components/nav/nav_quick.vue';

	export default {
		components: {
			page_hook,
			panel_style,
			panel_lang,
			panel_user,
			nav_head,
			nav_main,
			nav_quick
		},
		data() { return {}; },
		computed: {}
	}
</script>

<style>
</style>
