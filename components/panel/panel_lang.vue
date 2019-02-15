<template>
	<div class="panel_lang">
		<el-dropdown @command="set">
			<div class="el-dropdown-link">
				<img :src="obj.img" /><span>{{ obj.title }}</span><i class="el-icon-caret-bottom"></i>
			</div>
			<el-dropdown-menu class="panel_lang_menu" slot="dropdown">
				<el-dropdown-item v-for="(o, index) in list" :key="index" :index="o.name" :command="o.name"><img :src="o.img" /><span>{{ o.title }}</span></el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				lang: this.$store.state.lang,
				list: [{
						title: "简体中文",
						name: "chinese",
						img: "/img/chinese.svg"
					},
					{
						title: "English",
						name: "english",
						img: "/img/english.svg"
					}
				]
			};
		},
		computed: {
			obj() {
				var key = this.lang.now;
				return this.list.get('name', key);
			}
		},
		methods: {
			set(lang) {
				// 初始化语言
				this.$store.dispatch('lang/set', lang);
			}
		}
	}
</script>

<style>
	.panel_lang {
		position: relative;
		z-index: 2;
		margin-left: 1.5rem;
		margin-top: 1.1rem;
	}
	.panel_lang .el-dropdown-link {
		color: #fff;
	}
	.panel_lang .el-dropdown-link, .panel_lang_menu .el-dropdown-menu__item { position: relative; }
	.panel_lang img { position: absolute; top: 50%; transform: translateY(-50%); }
	.panel_lang img ~ span { margin-left: 1.75rem; }
	.panel_lang_menu img { position: absolute; top: 50%; transform: translateY(-50%); }
	.panel_lang_menu img ~ span { margin-left: 1.75rem; }
</style>
