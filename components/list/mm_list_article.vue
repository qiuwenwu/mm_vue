<template>
	<!-- 文章列表 -->
	<div class="mm_list_article">
		<mm_list col="1">
			<mm_item v-for="(o, k) in list" :key="k" @click.native="click_fun(o)">
				<mm_side v-if="o[vm.icon]">
					<mm_icon :src="o[vm.icon]"></mm_icon>
				</mm_side>
				<mm_main>
					<mm_title>{{ o[vm.title] }}</mm_title>
					<mm_desc>{{ o[vm.desc] }}
						<div class="collect"><text class="fa fa-heart"></text><text>{{ o[vm.collect] }}</text></div><!-- /view -->
					</mm_desc>
					<text class="time">{{ o.createTime }}</text>
				</mm_main>
			</mm_item>
		</mm_list>
	</div><!--/view-->
</template>

<script>
	import mixin from '@/mixins/list'

	export default {
		mixins: [mixin],
		methods: {
			click_fun(o) {
				var u = o[this.vm.url];
				if (this.func) {
					if (!this.func(o)) {
						return;
					}
				}
				if (u) {
					this.$nav(u);
				}
			}
		}
	}
</script>

<style>
	.mm_side~.mm_main {
		min-height: 3.5rem;
	}

	.mm_list_article .mm_title {
		height: 1.5rem;
		overflow: hidden;
	}

	.mm_list_article .mm_icon {
		border-radius: 0.5rem;
	}

	.mm_list_article {
		background: #fff;
	}
</style>
