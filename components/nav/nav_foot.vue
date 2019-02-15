<template>
	<div class="nav_foot">
		<h4 v-if="label">{{ label }}</h4>
		<el-menu :router="true">
			<el-menu-item v-for="(o, index) in list" :key="index" :index="o.name" :route="o.url"><span v-if="o.icon" v-html="o.icon"></span>{{ o.title }}</el-menu-item>
		</el-menu>
	</div>
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
	.nav_foot h4 { color: inherit; font-weight: 100; }
	.nav_foot .el-menu { background: none; border: none;  }
	.nav_foot li { background: none !important; color: inherit !important; height: auto; line-height: 2.5; }
	.nav_foot li:hover { color: #fff; }
</style>
