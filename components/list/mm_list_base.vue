<template>
	<!-- 基础列表 -->
	<div class="mm_list_base">
		<div class="item_icon" v-if="icon" v-html="icon"></div><!-- /view -->
		<div class="item_icon" v-else-if="icon">
			<image :src="icon"></image>
		</div><!--/view-->
		<div class="item_title" v-if="item_title"></div><!-- /view -->
		<slot></slot>
		<div class="item_tip" v-if="item_tip"></div><!-- /view -->
	</div><!--/view-->
</template>

<script>
	import mixin from '@/mixins/list'

	export default {
		mixins: [mixin],
		data() {
		}
	}
</script>

<style>

</style>
