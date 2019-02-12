<template>
	<div class="panel_lang">
		<el-dropdown @command="setLang">
			<div class="el-dropdown-link" v-if="langs.now == 'chinese'">
				<img src="/img/chinese.svg" /><span>简体中文</span><i class="el-icon-caret-bottom"></i>
			</div>
			<div class="el-dropdown-link" v-else>
				<img src="/img/english.svg" /><span>English</span><i class="el-icon-caret-bottom"></i>
			</div>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item index="1" command="chinese"><img src="/img/chinese.svg" /><span>简体中文</span></el-dropdown-item>
				<el-dropdown-item index="2" command="english"><img src="/img/english.svg" /><span>English</span></a></el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
	export default {
		components: {},
		data() { return {
			langs: this.$store.state.lang
		}; },
		computed: {},
		methods:{
			set(lang){
			}
		}
	}
</script>

<style>
</style>
