<template>
	<div class="list_article" v-bind:class="{ 'list_article_1': display == '1', 'list_article_2': display == '2' }">
		<h2 v-if="label">{{ label }}</h2>
		<ul>
			<li v-for="(o, index) in list" :key="index">
				<router-link :to="'/home/news_view?aid=' + o[vm.aid]">
					<div v-bind:class="'item_' + (index + 1)">
						<img v-if="o[vm.img]" :src="o[vm.img]" />
						<h3><i v-if="display == '2'">{{ index + 1 }}</i>{{ o[vm.title] }}</h3>
						<p class="desc" v-html="o[vm.desc]"></p>
						<p><span class="time">{{ o[vm.time] }}</span></p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import mixin from '~/mixins/list';
	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				disp: this.display
			};
		},
		computed: {

		}
	}
</script>

<style>
	.list_article a {
		color: inherit;
	}

	.list_article_1 li {
		margin-bottom: 2rem;
		min-height: 10rem;
		overflow: hidden;
		margin-bottom: 1rem;
		background: #fff;
		border-top: 1px solid rgba(0, 0, 0, .04);
		border-radius: .25rem;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
	}

	.list_article_1 .desc {
		color: #666;
		margin: 1rem;
	}

	.list_article_1 .time {
		color: #666;
		font-size: 0.75rem;
	}

	.list_article_1 h3 {
		margin: 0.5rem 0;
	}

	.list_article_1 img {
		height: 8.75rem;
		float: left;
		margin-right: 1rem;
	}

	.list_article_1 li div {
		overflow: hidden;
		padding: 1rem;
	}

	.list_article_2 {
		margin-bottom: 1rem;
		background: #fff;
		border-top: 1px solid rgba(0, 0, 0, .04);
		border-radius: .25rem;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
		overflow: hidden;
	}

	.list_article_2 h2 {
		font-size: 0.75rem;
		padding: 0.5rem;
		background: #666;
		color: #fff;
	}

	.list_article_2 ul {
		overflow: hidden;
		padding: 0.5rem 1rem;
	}

	.list_article_2 li {
		border-top: 1px solid #f5f5f5;
		margin-left: 1.5rem;
	}

	.list_article_2 li:first-child {
		border: none
	}

	.list_article_2 h3 {
		font-size: 1rem;
		font-weight: 100;
		position: relative;
		padding: 0.5rem 0;
	}

	.list_article_2 h3 i {
		font-size: 9px;
		background: rgb(64, 158, 255);
		font-style: normal;
		margin-right: .5rem;
		display: inline-block;
		width: 1rem;
		height: 1rem;
		text-align: center;
		color: #fff;
		position: absolute;
		left: -1.5rem;
		top: 0.65rem;
	}

	.list_article .item_1 i {
		background-color: #f54545;
	}

	.list_article .item_2 i {
		background-color: #ff8547;
	}

	.list_article .item_3 i {
		background-color: #ffac38;
	}
</style>
