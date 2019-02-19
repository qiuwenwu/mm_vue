<template>
	<div :class="'style_' + style.name">
		<page_top v-once/>
		<page_head v-once/>
		<nuxt />
		<page_foot v-if="$route.path.indexOf('/user') != 0" v-once/>
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
	.main .el-form>button { display: block; margin: 0 auto; }
	.price { color: #409eff; }
	.page_mall, .page_home { background: #f9faff; }
	.el-breadcrumb { padding: 1.5rem 0; }
	
	.form_tip { position: absolute; top:50%; transform: translateY(-50%); left: 16rem; }
	.el-input.is-disabled .el-input__inner { color: #333; }

	.page_user .col,.page_user [class*=col-] { padding: .5rem; }
	.page_user .col>*,.page_user [class*=col-]>* { background: #fff; box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04); border-radius: .25rem; }
	.page_user .el-tabs__header { margin: 0; }
	.page_user .el-tabs__content { border-left: 1px solid #e4e7ed; }
	.page_user .warp { min-height: calc(100vh - 6.25rem); background: #f9faff; }
	.page_user .submit { display: block; margin: 1rem auto; }
	.page_user .el-tabs__content { padding: 1rem; }
	.page_user aside { width: 15%; position: absolute; left: 0; height: 100%; top: 0; bottom:0; background: #e7e9f1; }
	.page_user article { width: calc(85% - 1rem); float:right; padding: 0.5rem; overflow: hidden; }
	.page_user .el-collapse-item__header { background: #d5eaff; color: #000; padding-left: 1rem; }
	.page_user .el-form { max-width: 30rem; padding: 1rem; }
	.page_user .el-collapse-item__header { height: 2.5rem; line-height: 2.5rem; }
	.el-collapse-item:last-child .el-collapse-item__wrap{ border-bottom: none; }
	
	.page_user .el-tabs__content { overflow: visible; position: relative; min-height: 30rem; }
	.page_user .panel_state { position: absolute; right: 1rem; top: -2.3rem; }
	.page_user .data_no { text-align: center; position: absolute; top: 50%;  left: 50%; transform: translate(-50%, -50%); }
	
	.state-wrapper { color:#409EFF }
	
	.order_list .unit { font-size: 0.75rem; color: #999; }
	.order_title, .order_desc { color: #999; }
</style>