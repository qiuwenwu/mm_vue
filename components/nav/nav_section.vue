<template>
	<ul class="nav_section">
		<li v-for="(o, index) in list" :key="index">
			<div></div>
		</li>
	</ul>
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
