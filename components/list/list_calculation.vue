<template>
	<div class="list_calculation">
		<ul class="space grid" v-bind:class="'grid-' + col">
		<li v-for="(o, index) in list" :key="index">
			<div class="card">
				<div class="calculation_type">{{ o[vm.type] }}</div>
				<div class="calculation_day"><span>{{ o[vm.day] }}</span><span>{{ $lang('day') }}</span></div>
				<div class="calculation_hashrate"><span>{{ o[vm.hashrate] }}</span> <span>TH/s</span></div>
				<div class="calculation_price"><span class="calculation_unit">{{ $lang('unit') }}</span><span>{{ o[vm.price] }}</span><span class="calculation_unit">/T/{{ $lang('day') }}</span></div>
				<div class="calculation_solded">
					<el-progress :percentage="progress(o[vm.solded], o[vm.count])"></el-progress><span class="calculation_progress">{{ $lang('solded') }}:{{ progress(o[vm.solded], o[vm.count]) }}%</span>
				</div>
				<router-link class="el-button el-button--primary" :to="url + o[vm.id]">
					{{ $lang('buy_now') }} | {{ $lang('unit') }} {{ o[vm.price] }}
				</router-link>
				<div class="calculation_version"><span>{{ o[vm.version] }}</span></div>
				<div class="calculation_tag"><img src="/img/hot.png" /></div>
			</div>
		</li>
		</ul>
	</div>
</template>

<script>
	import mixin from '~/mixins/list';
	export default {
		mixins: [mixin],
		props:{
			vm:{
				type: Object,
				default: function(){
					return {
						id: "id",
						type: "type",
						day: "day",
						hashrate: "hashrate",
						solded: "solded",
						count: "count",
						price: "price",
						version: "version"
					}
				}
			}
		},
		methods: {
			progress(solded, count) {
				var p = solded / count * 100;
				return parseInt(p);
			}
		}
	}
</script>

<style>
	.list_calculation {
		margin-bottom: 3rem;
	}

	.list_calculation .el-progress__text {
		display: none;
	}

	.list_calculation .el-progress-bar {
		width: 90%;
		margin-top: .5rem;
	}

	.list_calculation .el-progress-bar__inner {
		background-image: linear-gradient(to right, #7A88FF, #7AFFAF);
	}

	.list_calculation li>div {
		text-align: center;
		padding: 1rem;
		text-align: center;
		position: relative;
		overflow: hidden;
	}

	.el-progress-bar {
		float: left;
	}

	.calculation_type {
		color: #666;
		margin-bottom: 1rem;
		font-size: 1rem;
	}

	.calculation_day,
	.calculation_hashrate {
		font-size: 1.5rem;
		color: #1f2740;
		padding-bottom: 10px;
		font-weight: 600;
	}

	.calculation_hashrate {
		color: #333;
		font-size: 1.25rem;
	}

	.calculation_price {
		font-size: 1.75rem;
		line-height: 2rem;
		color: #fe8b0f;
		padding: 1rem 0;
		border-bottom: 1px solid #dbdbdb;
		border-top: 1px solid #dbdbdb;
	}

	.calculation_unit {
		font-size: 1rem;
	}

	.list_calculation a {
		margin: 1rem 0;
		padding: 0;
		width: 100%;
		height: 3rem;
		line-height: 3rem;
	}

	.calculation_solded {
		color: #666;
		font-size: 1rem;
		text-align: right;
		padding: 0.5rem 0;
	}

	.calculation_version {
		font-size: 0.75rem;
		color: #999;
		text-align: center;
		padding-bottom: 0.5rem;
	}

	.calculation_tag {
		position: absolute;
		right: 1rem;
		top: 1rem;
	}

	.calculation_tag img {
		width: 4rem;
	}
</style>
