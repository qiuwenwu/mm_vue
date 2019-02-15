<template>
	<div id="mall_calculation_list" class="main page_mall">
		<div class="warp">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">{{ $lang('nav_index') }}</el-breadcrumb-item>
				<el-breadcrumb-item>{{ $lang('nav_calculation') }}</el-breadcrumb-item>
			</el-breadcrumb>
			<list_calculation :list="calculations" url="/mall/calculation_view?cid=" />
		</div>
	</div>
</template>

<script>
import list_calculation from '~/components/list/list_calculation.vue';

export default {
  components: {
		list_calculation
  },
  data(){
	return {
		calculations: [{
				id: 1,
				type: "Bitcoin",
				day: 120,
				hashrate: 20,
				solded: 80,
				count: 100,
				price: 0.0397,
				version: "- 蚂蚁矿机15系列 -",
				hot: 1,
			},
			{
				id: 2,
				type: "Bitcoin",
				day: 120,
				hashrate: 20,
				solded: 80,
				count: 100,
				price: 0.0397,
				version: "- 蚂蚁矿机15系列 -",
				hot: 0
			},
			{
				id: 3,
				type: "Bitcoin",
				day: 120,
				hashrate: 20,
				solded: 80,
				count: 100,
				price: 0.0397,
				version: "- 蚂蚁矿机15系列 -",
				hot: 1
			},
			{
				id: 4,
				type: "Bitcoin",
				day: 120,
				hashrate: 20,
				solded: 80,
				count: 100,
				price: 0.0397,
				version: "- 蚂蚁矿机15系列 -",
				hot: 0
			},
			{
				id: 5,
				type: "Bitcoin",
				day: 120,
				hashrate: 20,
				solded: 80,
				count: 100,
				price: 0.0397,
				version: "- 蚂蚁矿机15系列 -",
				hot: 0
			},
			{
				id: 6,
				type: "Bitcoin",
				day: 120,
				hashrate: 20,
				solded: 80,
				count: 100,
				price: 0.0397,
				version: "- 蚂蚁矿机15系列 -",
				hot: 0
			},
			{
				id: 7,
				type: "Bitcoin",
				day: 120,
				hashrate: 20,
				solded: 80,
				count: 100,
				price: 0.0397,
				version: "- 蚂蚁矿机15系列 -",
				hot: 0
			},
			{
				id: 8,
				type: "Bitcoin",
				day: 120,
				hashrate: 20,
				solded: 80,
				count: 100,
				price: 0.0397,
				version: "- 蚂蚁矿机15系列 -",
				hot: 1
			}
		]
	}
  }
}
</script>

<style>
/* 	#mall_calculation_list .el-breadcrumb { padding-left: .5rem; padding-right: .5rem; }
	#mall_calculation_list .warp { padding: 0; } */
	
</style>
