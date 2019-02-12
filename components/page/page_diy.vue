<template>
	<div class="page_diy" v-html="html"></div>
</template>

<script>
	export default {
		components: {},
		props: {
			name: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				html: ""
			};
		},
		computed: {}
	}
</script>

<style>
</style>
