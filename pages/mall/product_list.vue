<template>
	<div id="mall_product_list" class="main page_mall">
		<div class="warp">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">{{ lang['nav_index'] }}</el-breadcrumb-item>
				<el-breadcrumb-item>{{ lang['nav_product'] }}</el-breadcrumb-item>
			</el-breadcrumb>
			<list_product />
		</div>
	</div>
</template>

<script>
import list_product from '~/components/list/list_product.vue';

export default {
  components: {
	list_product
  },
  data(){
	return {
		lang: this.$store.state.lang.dict
	}
  }
}
</script>

<style>

</style>
