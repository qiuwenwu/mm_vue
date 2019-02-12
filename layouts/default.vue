<template>
	<div :class="'style_' + style.name">
		<page_top v-once/>
		<page_head v-once/>
		<nuxt />
		<page_foot v-once/>
	</div>
</template>

<style>

</style>

<script>
	import page_top from '~/components/page/page_top.vue';
	import page_head from '~/components/page/page_head.vue';
	import page_foot from '~/components/page/page_foot.vue';
	
	export default {
		components: {
			page_top,
			page_head,
			page_foot
		},
		data(){
			return {
				style: this.$store.state.style
			}
		},
		created() {
			// 初始化主题色
			var style = this.cookie('style');
			if(style)
			{
				this.$store.dispatch('style/set', style);
			}
			
			var lang = this.cookie('lang');
			if (lang) {
				// 初始化语言
				this.$store.dispatch('lang/set', lang);
				
				// 初始化站点
				this.$store.dispatch('web/set', lang);
			}
		}
	}
</script>
