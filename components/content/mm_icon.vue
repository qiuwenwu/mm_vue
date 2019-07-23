<template>
	<!-- 图标 -->
	<div class="mm_icon" v-if="src.indexOf('<') !== -1" v-html="src"></div><!-- /view -->
	<img class="mm_icon" v-else-if="src" :src="src" mode="widthfix"></img>
	<div class="mm_icon" v-else></div><!-- /view -->
</template>

<script>
	export default {
		props: {
			src: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style>
</style>
