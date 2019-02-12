<template>
	<ul class="list_section">
		<li v-for="(o, index) in list" :key="index">
			<div></div>
		</li>
	</ul>
</template>

<script>
	import mixin from '~/mixins/list';
	export default {
		mixins: [mixin],
		components: {},
		data() { return {}; },
		computed: {}
	}
</script>

<style>
</style>
