<template>
	<div class="user_address">
		<h2 class="h2">{{$lang('title_address')}}</h2>
		<div class="address_info">
			<el-alert v-for="(o, index) in addresses" :class="{ 'active': index == index_now }" :key="index" :title="o.tag"><span>{{o.address}}</span>
				<el-button type="warning" @click="setAddress(index)">设为默认</el-button><span class="address_select">默认地址</span>
			</el-alert>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				lang: this.$store.state.lang.dict,
				index_now: 0,
				addresses: [{
						tag: "家里",
						address: "深圳市 龙岗区 龙岗大道凤尾坑新村7栋"
					},
					{
						tag: "公司",
						address: "深圳市 南山区 深圳湾科技园11座A栋3802"
					},
					{
						tag: "宿舍",
						address: "深圳市 南山区 深大汇景豪苑海欣阁26"
					}
				]
			}
		},
		computed: {
			address() {
				if (this.index_now < this.addresses.length) {
					return this.addresses[this.index_now];
				} else {
					return {
						tag: "",
						address: ""
					};
				}
			}
		},
		methods: {
			setAddress(index) {
				this.index_now = index;
			}
		}
	}
</script>

<style>
	.user_address .el-alert {
		margin-bottom: 1rem;
		position: relative;
	}

	.user_address .el-alert--info:hover {
		background-color: #fdf6ec;
		color: #e6a23c;
	}

	.user_address .el-alert--info:hover button {
		display: block;
	}

	.user_address .el-icon-close {
		display: none;
	}

	.user_address .el-alert--info:hover .el-icon-close {
		display: block;
	}

	.user_address .el-alert button {
		display: none;
		padding: 0.15rem;
		font-size: 0.5rem;
		position: absolute;
		right: 3rem;
		top: 50%;
		transform: translateY(-50%);
	}

	.user_address .el-alert.active {
		background-color: #fef0f0;
		color: #f56c6c;
	}

	.user_address .el-alert.active .el-icon-close {
		display: none;
	}

	.user_address .el-alert.active button {
		display: none;
	}

	.el-alert.active .address_select {
		display: block;
	}

	.user_address .is-bold {
		/* padding: .25rem 0.5rem;
		background: rgba(255, 255, 255, 0.5); 
		border-radius: 0.25rem; */
		margin-right: 0.75rem;
	}

	.user_address .is-bold:before {
		content: "(";
	}

	.user_address .is-bold:after {
		content: ")";
	}

	.address_info {
		padding: 0 1rem;
	}

	.address_select {
		display: none;
		font-size: 0.75rem;
		position: absolute;
		right: 1rem;
		top: 50%;
		transform: translateY(-50%);
	}
</style>
