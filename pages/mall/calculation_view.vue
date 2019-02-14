<template>
	<div id="mall_calculation_view" class="main page_mall">
		<div class="warp">
			<div class="form card">
				<h4>订单信息</h4>
				<el-form label-position="left" label-width="8rem">
					<el-form-item :label="$lang('order_currency')">
						<span>{{ form.currency }}</span>
					</el-form-item>
					<el-form-item :label="$lang('order_miner')">
						<span>{{ form.miner }}</span>
					</el-form-item>
					<el-form-item :label="$lang('order_computing_power')">
						<el-input type="text" v-model="form.computing_power" class="form-control" disabled>
							<span slot="append">TH/S</span>
						</el-input>
					</el-form-item>
					<el-form-item :label="$lang('order_duration')">
						<el-select v-model="form.duration" :placeholder="$lang('please_choose')">
							<el-option v-for="(o, index) in duration_options" :key="index" :label="o.name" :value="o.value"></el-option>
						</el-select>
						<div class="form_tip">( <span>{{ form.order_time_start }}</span> ~ <span>{{ package_end_time }}</span> )</div>
					</el-form-item>
					<el-form-item :label="$lang('order_pool')">
						<el-select v-model="form.pool" :placeholder="$lang('please_choose')" disabled>
							<el-option v-for="(o, index) in pool_options" :key="index" :label="o.name" :value="o.value"></el-option>
						</el-select>
						<span>{{ form.order_pool_desc }}</span>
					</el-form-item>
					<!-- <el-form-item :label="$lang('currency')">
						<el-input type="text" v-model="form.currency" class="form-control" :placeholder="">
							<el-button slot="append">{{ $lang('btn_send_code') }}</el-button>
						</el-input>
					</el-form-item> -->
				</el-form>
				<div class="form_other" v-if="form.usage_fee"><span class="form_title">{{ $lang('order_usage_fee') }}</span><span class="unit">{{ $lang('unit') }}</span><span>{{ form.usage_fee }}</span></div>
				<el-form label-position="left" label-width="8rem">
					<el-form-item>
						<el-radio v-model="form.mode" label="1">法币先预缴维护费模式</el-radio>
						<el-radio v-model="form.mode" label="2">挖矿收益扣除维护费模式</el-radio>
					</el-form-item>
					<el-form-item :label="$lang('order_mining_days')">
						<el-input-number v-model="form.mining_days" :min="10" :max="1080" :step="5" @change="change()"></el-input-number>
						<span>{{ form.order_pool_desc }}</span>
					</el-form-item>
					<el-alert class="form_alert" title="套餐中未缴纳维护费的剩余的天数可以后续支付" type="warning" :closable="false" show-icon></el-alert>
				</el-form>
				<div class="form_other"><span class="form_title">{{ $lang('order_management_fee') }}</span><span class="price"><i class="unit">{{ $lang('unit') }}</i>{{ form.management_fee }}</span>
					<div class="form_tip">
						= <span class="unit">{{ $lang('unit') }}</span><span>{{ form.price }}</span><span class="unit">/T/{{ $lang('day')}}</span><i class="symbol">×</i><span>{{ form.computing_power }}</span><span class="unit">T</span><i class="symbol">×</i><span>{{ form.mining_days }}</span><span class="unit">天</span>
						<span class="formula">( 单价 x 算力 x 挖矿天数 )</span>
					</div>
				</div>
				<div class="form_other"><span class="form_title">{{ $lang('pay_way') }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from "jquery";

	export default {
		data() {
			return {
				pool_options: [{
						name: "大锄矿池",
						value: "DigBig"
					},
					{
						name: "蚂蚁矿池",
						value: "AntPool"
					},
					{
						name: "比特币网矿池",
						value: "BTC.com"
					},
					{
						name: "龙池",
						value: "DPOOL"
					}
				],
				duration_options: [{
						name: "90天",
						value: 90
					},
					{
						name: "180天",
						value: 180
					},
					{
						name: "270天",
						value: 270
					},
					{
						name: "360天",
						value: 360
					},
					{
						name: "540天",
						value: 540
					},
					{
						name: "720天",
						value: 720
					},
					{
						name: "1080天",
						value: 1080
					}
				],
				form: {
					currency: "BTC",
					miner: "蚂蚁矿机15系列",
					computing_power: 50,
					duration: 90,
					pool: "DigBig",
					order_time_start: "2019.02.14",
					gain: "每日发放到平台账户",
					usage_fee: 0,
					management_fee: 0,
					mining_days: 10,
					mode: "1",
					price: 0.35
				}
			}
		},
		computed: {
			package_end_time() {
				var date = new Date(this.form.order_time_start);
				date.addDays(this.form.duration);
				return date.format('yyyy.MM.dd');
			},
			count() {
				return this.form.management_fee + this.form.usage_fee
			}
		},
		created() {
			// 设置下单起始时间
			var date = new Date();
			this.form.order_time_start = date.format('yyyy.MM.dd');
			this.change();
		},
		methods: {
			submit() {

			},
			change(){
				var f = this.form;
				f.management_fee = f.price * f.computing_power * f.mining_days;
			}
		}
	}
</script>

<style>
	#mall_calculation_view article {
		background: #fff;
	}

	#mall_calculation_view .form {
		margin: 2rem 0;
	}

	#mall_calculation_view h4 {
		border-bottom: 1px solid #dbdbdb;
		padding-bottom: 0.5rem;
	}

	#mall_calculation_view .el-form {
		background: #f9f9f9;
		padding: 1rem 3rem;
		color: #000;
	}

	#mall_calculation_view .el-form-item__label {
		color: #333;
	}

	#mall_calculation_view .form_other {
		color: #333;
		position: relative;
	}

	#mall_calculation_view .form_title {
		display: inline-block;
		width: 5rem;
		padding: 1.5rem 3rem;
	}

	#mall_calculation_view .form_alert {
		background: #fff4e2;
		color: #fe8b0f;
		margin-left: 8rem;
		width: calc(100% - 13rem);
		border: 1px solid rgba(255, 171, 9, .2);
	}
	.el-form ~ .el-form { margin-top: 2rem; }
	.form_other ~ .el-form { margin-top: 0; }
	.symbol { color: #999; font-style: normal; margin: 0 0.5rem; }
	.form_tip { color: #666; }
	.form_other .price { font-weight: 600; }
	.form_tip .unit{ color: #999; font-size: 0.75rem; }
	.formula { margin-left: 1rem; color: #999; }
</style>
