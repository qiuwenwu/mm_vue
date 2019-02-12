<template>
	<ul class="list_image">
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
		props:{
			col: {
				type: Number,
				default: 4
			}
		},
		data() { return {}; },
		computed: {}
	}
</script>

<style>
</style>
