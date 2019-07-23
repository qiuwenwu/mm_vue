<template>
	<!-- 表单列表 -->
	<div class="mm_list_menu">
		<a class="mm_block" v-for="(o, k) in list" :key="k" url="/pages/home/article_list?title=关于我们">
			<div class="menu_title">{{ o[vm.title] }}</div><!-- /view -->
			<div class="menu_desc">
				<slot>{{ o[vm.desc] }}</slot>
			</div><!--/view-->
			<div class="menu_tip">{{ o[vm.tip] }}</div><!-- /view -->
		</a>
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
