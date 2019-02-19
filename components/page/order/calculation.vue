<template>
	<div class="order_calculation">
		<div class="order_list" v-if="list.length > 0">
			<el-table :data="list">
				<el-table-column prop="order" label="订单号" width="180"></el-table-column>
				<el-table-column prop="date" label="下单日期" width="160"></el-table-column>
				<el-table-column prop="calculation" label="算力" width="130">
					<template slot-scope="scope">
						<span>{{ scope.row.calculation }}</span><span class="unit">TH/S</span>
					</template>
				</el-table-column>
				<el-table-column prop="day" label="天数" width="160">
					<template slot-scope="scope">
						<span>{{ scope.row.day }}</span><span class="unit">{{ $lang('day') }}</span>
					</template>
				</el-table-column>
				<!-- <el-table-column prop="address" label="收货地址" width="300"></el-table-column> -->
				<el-table-column prop="paid" label="已付金额">
					<template slot-scope="scope">
						<span class="unit">{{ $lang('unit') }}</span><span>{{ scope.row.paid | double }}</span>
					</template>
				</el-table-column>
				<el-table-column prop="state" label="订单状态" width="80">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
							<p>点击查看详情</p>
							<div slot="reference" class="state-wrapper">
								{{ states.getVal('id', scope.row.state, 'name') }}
							</div>
						</el-popover>
					</template>
				</el-table-column>
			</el-table>
			<panel_page :count="count" :func="go" />
		</div>
		<div class="data_no" v-else>
			<img src="/img/file.png" />
			<p><span>{{ $lang('no_data') }}</span></p>
		</div>
		<panel_state :list="states"/>
	</div>
</template>

<script>
	import panel_state from "~/components/panel/panel_state.vue";
	import panel_page from "~/components/panel/panel_page.vue";
		
	export default {
		components: {
			panel_state,
			panel_page
		},
		data() {
			return {
				count: 1,
				list: [{
					order: "P019C156DEAD",
					date: "2019-02-18 20:15",
					calculation: 50,
					day: 180,
					paid: 250.00,
					address: "深圳市 深圳湾科技园",
					phone: "15817188815",
					state: 2
				},
				{
					order: "P019C156DEAD",
					date: "2019-02-20 16:15",
					calculation: 30,
					day: 360,
					paid: 188.50,
					address: "深圳市 深圳湾科技园",
					phone: "15817188815",
					state: 3
				}
				],
				states:[
					{
						id: 0,
						name: "全部"
					},
					{
						id: 1,
						name: "等待中"
					},
					{
						id: 2,
						name: "生效中"
					},
					{
						id: 3,
						name: "已完成"
					},
					{
						id: 4,
						name: "已取消"
					}
				]
			}
		},
		methods: {
			go(page) {
				console.log(page);
			}
		}
	}
</script>

<style>
</style>
