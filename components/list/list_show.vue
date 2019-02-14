<template>
	<div class="list_show">
		<div class="product_img"><img :src="img" /></div>
		<ul class="select_show"><li v-for="(o, index) in list" :key="index" @mouseover="select_show(index)"><img :src="o" /></li></ul>
	</div>
</template>

<script>
	import mixin from '~/mixins/list';
	export default {
		mixins: [mixin],
		components: {},
		data(){
			return {
				index_now: 0
			}
		},
		computed:{
			img(){
				return this.list[this.index_now];
			}
		},
		methods:{
			select_show(index){
				this.index_now = index;
			}
		}
	}
</script>

<style>
	.select_show li {
		border: 1px solid #ddd;
		height: 3rem;
		overflow: hidden;
		width: 4rem;
		float: left;
		margin-right: .5rem;
	}
	.select_show li:hover { border-color: #409EFF; }
	.select_show img { margin: auto; max-height: 100%; }
</style>
