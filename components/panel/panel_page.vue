<template>
	<!-- total总数， page-size分页数 current-page当前页 -->
	<el-pagination class="panel_page" layout="prev, pager, next" :total="count" :page-size="size" :current-page="pe" @current-change="func" @size-change="func" background></el-pagination>
</template>

<script>
	export default {
		components: {},
		props: {
			count: {
				type: Number,
				default: 0
			},
			size: {
				type: Number,
				default: 10
			},
			page: {
				type: Number,
				default: 1
			},
			func: {
				type: Function,
				default: function(page){
					
				}
			}
		},
		data() {
			return {
				pe: this.page,
			};
		},
		computed: {},
		methods: {},
	}
</script>

<style>
	.panel_page { margin: 1rem auto; text-align: center;  }
</style>
