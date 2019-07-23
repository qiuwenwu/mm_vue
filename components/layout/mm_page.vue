<template>
	<!-- 页面 -->
	<div class="mm_page">
		<slot></slot>
	</div><!--/view-->
</template>

<script>
	export default {
		props: {
			fun: {
				type: Function,
				default: function(){}
			}
		}
	}
</script>

<style>
</style>
