<template>
	<el-menu class="nav_main" mode="horizontal" :router="true">
		<el-menu-item v-for="(o, index) in list" :key="index" :index="o.name" :route="o.url">{{ o.title }}</el-menu-item>
	</el-menu>
</template>

<script>
	import mixin from '~/mixins/nav';

	export default {
		mixins: [mixin],
		components: {},
		data() { return {}; },
		computed: {}
	}
</script>

<style>
	.nav_main.el-menu--horizontal {
		border: none;
	}

	.nav_main {
		background: none;
		border: none;
	}

	.nav_main .el-menu-item {
		color: inherit !important;
	}

	.nav_main .el-menu-item:hover {
		color: #666 !important;
	}

	.nav_main>.el-menu-item.is-active {
		border-bottom: none;
	}
</style>
