<template>
	<div class="nav_side">
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
</style>
