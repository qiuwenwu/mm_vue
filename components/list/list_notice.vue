<template>
	<div class="list_notice">
		<i class="fl fa fa-volume-up"></i>
		<ul>
			<li v-for="(o, index) in list" :key="index">
				<router-link :to="o.url"><span>{{ o.title }}</span><i>查看详情</i></router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import $ from 'jquery';
	import mixin from '~/mixins/list';

	export default {
		mixins: [mixin],
		components: {},
		props: {
			sleep: {
				type: Number,
				default: 2000
			}
		},
		data() {
			return {};
		},
		computed: {},
		mounted() {
			var tag = '.list_notice ul';
			$(tag).roll(this.sleep);
		}
	}
</script>

<style>
	.list_notice {
		overflow: hidden;
		white-space:nowrap;
		width: auto;
		height:  2.5rem;
		padding-left: 2rem;
	}
	.list_notice>i {
		height: inherit;
		line-height: inherit;
		font-size: 1.25rem;
		margin-left: -2rem;
	}
	.list_notice a {
		color: inherit;
	}
	.list_notice li i {
		border: 1px solid #999;
		font-size: 0.5rem;
		padding: .1rem .5rem;
		font-style: normal;
		border-radius: .5rem;
	}
	.list_article ul {

	}
</style>
