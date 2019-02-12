<template>
	<el-menu class="nav_head">
		<el-submenu index="1">
			<el-menu-item index="/nav1">导航1</el-menu-item>
		</el-submenu>
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
</style>
