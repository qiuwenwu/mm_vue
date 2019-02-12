<template>
	<el-menu class="nav_top"  mode="horizontal" :router="true">
		<el-menu-item v-for="(o, index) in list" :key="index" :index="o.name" :route="o.url">{{ o.title }}</el-menu-item>
	</el-menu>
</template>

<script>
	import mixin from '~/mixins/nav';

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {};
		},
		computed: {}
	}
</script>

<style>
	.nav_top { background: none; border-right:none; }
	.nav_top .el-menu-item { height: auto; line-height: inherit; color: inherit !important; border-bottom: none !important; }
</style>
