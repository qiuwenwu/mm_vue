<template>
	<web-view :webview-styles="webviewStyles" :src="pay_url" v-if="pay_url"></web-view>
</template>

<script>
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				pay_url: "",
				webviewStyles: "#fff",
			}
		}
	}
</script>

<style>
	
</style>
