<template>
	<div class="panel_style">
		<ul>
			<li v-for="(o, index) in list" :class="{'active': o.name == style.name }" :key="index"><button @click="set(o.name)"><i :style="'background:' + o.value"></i><span>{{ o.title }}</span></button></li>
		</ul>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				style: this.$store.state.style,
				list: [{
						title: "红",
						name: "red",
						value: "#F56C6C"
					},
					{
						title: "橙",
						name: "orange",
						value: "#E6A23C"
					},
					{
						title: "蓝",
						name: "blue",
						value: "#409EFF"
					},
					{
						title: "绿",
						name: "green",
						value: "#67C23A"
					}
				]
			};
		},
		computed: {},
		methods: {
			set(name) {
				this.$store.dispatch('style/set', name);
			}
		}
	}
</script>

<style>
	.panel_style button {
		background: none;
		border: none;
		height: inherit;
		line-height: inherit;
		position: relative;
		padding-left: 2rem;
		padding-right: 0.75rem;
		color: inherit;
	}
	
	.panel_style button:active {
		background: #fff;
	}
	
	.panel_style i {
		display: block;
		position: absolute;
		top: 50%;
		transform: translate(-1rem, -60%);
		height: .75rem;
		width: .75rem;
	}

	.panel_style li {
		float: left;
	}

	.panel_style .active {
		color: #fff;
	}
</style>
