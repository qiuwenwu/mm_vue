<template>
	<!-- 消息列表 -->
	<div class="mm_list_message">
		<slot></slot>
	</div><!--/view-->
</template>

<script>
	import mixin from '@/mixins/list'

	export default {
		mixins: [mixin],
		data() {}
	}
</script>

<style>
</style>
