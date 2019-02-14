<template>
	<div :class="'style_' + style.name">
		<page_top v-once/>
		<page_head v-once/>
		<nuxt />
		<page_foot v-once/>
	</div>
</template>

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

<style>
	.main { min-height: calc(100vh - 22rem); overflow: hidden; position: relative; }
	.main>.form h2 { margin-bottom: 1.5rem; }
	.form_checkbox { margin-left: 1.5rem; }
	.form { padding: 3rem 1rem; }
	.main>.form { position:absolute; }
	.main>.form button { width: 25%; display: block; margin: 0 auto; }
	.price { color: #409eff; }
	
	.page_mall, .page_home { background: #f9faff; }
	.el-breadcrumb { padding: 1.5rem 0; }
	
	.form-control { max-width: 13.5rem; }
	.form_tip { position: absolute; top:50%; transform: translateY(-50%); left: 15rem; }
	.el-input.is-disabled .el-input__inner { color: #333; }
</style>