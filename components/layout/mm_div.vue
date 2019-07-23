<template>
	<!-- 块 -->
	<div class="mm_div" v-if="!url">
		<slot></slot>
	</div><!--/view-->
	<div class="mm_div" @click="openBrowser()" v-else-if="url.indexOf('//') !== -1">
		<slot></slot>
	</div><!--/view-->
	<a class="mm_div" :url="url" v-else>
		<slot></slot>
	</a>
</template>

<script>
	export default {
		props: {
			url: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				type: ""
			}
		},
		methods: {
			openBrowser() {
				if (window) {
					window.open(this.url);
				}
			}
		}
	}
</script>

<style>
</style>
