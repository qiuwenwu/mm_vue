<template>
	<!-- 表单列表 -->
	<div class="mm_list_form">
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
