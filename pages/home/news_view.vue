<template>
	<div id="home_news_view" class="main page_home">
		<div class="warp">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">{{ $lang('nav_index') }}</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/home/news_list?cid=2' }">{{ $lang('nav_news') }}</el-breadcrumb-item>
				<el-breadcrumb-item>{{ $lang('nav_details') }}</el-breadcrumb-item>
			</el-breadcrumb>
			<aside>
				<list_article :label="$lang('news_related')" display="2" />
			</aside>
			<article v-html="article"></article>
		</div>
	</div>
</template>

<script>
	import list_article from '~/components/list/list_article.vue';

	export default {
		components: {
			list_article
		},
		data() {
			return {
				// 相关文章
				articles_related: [], 
				article: `
<div class="text-content textarea-show"><p>&nbsp;</p>
	<p><strong>功能：查找矿机IP</strong></p>
	<p><strong>目的：方便当矿机IP为DHCP模式时，查找对应矿机的IP</strong></p>
	<p><strong>软件下载地址：</strong><a href="https://service.bitmain.com.cn/support/download">https://service.bitmain.com.cn/support/download</a></p>
	<p style="text-align: center;"><a class="fluidbox" href="https://dn-bitmain.qbox.me/o_1cja51s5s1jgm1gtiis01gveaeb.png"><div class="fluidbox-wrap" style="z-index: 990;"><img style="opacity: 1;" src="https://dn-bitmain.qbox.me/o_1cja51s5s1jgm1gtiis01gveaeb.png"><div class="fluidbox-ghost" style="width: 486px; height: 224px; top: 0px; left: 164.75px;"></div></div></a></p>
	<p><strong>备注：</strong></p>
	<p><span style="color: #ff0000;">1、新矿机的IP模式为DHCP，无固定IP。</span></p>
	<p><span style="color: #ff0000;">2、只适用于WINDOWS系统，其他系统均不适用。</span></p>
	<p><span style="color: #ff0000;">3、矿机和电脑在同一网段下，才可使用此软件。</span></p>
	<p>&nbsp;</p>
	<p><strong>使用注意事项</strong></p>
	<p>1、下载完成后解压文件，可放在任意文件夹</p>
	<p>2、矿机必须是正常工作中</p>
	<p>3、电脑和矿机在同一个网络中</p>
	<p>4、第一次打开软件时，软件要求网络权限，必须同意</p>
	<p>&nbsp;</p>
	<p><strong>使用方法</strong></p>
	<p>1、打开软件，点”Start“</p>
	<p>2、按矿机上的IP按键1秒后松开</p>
	<p>3、电脑上反馈矿机IP</p>
	<p>&nbsp;<img src="https://dn-bitmain.qbox.me/o_1bqkf3dgi1alc1d5a1mmd1mpqi427.gif" width="776" height="613"></p>
	<p>&nbsp;</p>
</div>
`
			}
		},
		created() {
			// this.$axios.get('').then( res -> {...});
		}
	}
</script>

<style>
	#home_news_view aside {
		float: right;
		width: 25%;
	}
	
	#home_news_view article { 
		margin-bottom: 1.5rem;
		padding: 1rem;
		background: #fff; 
    border-top: 1px solid rgba(0,0,0,.04);
    border-radius: .25rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    overflow: hidden;
		}
		
	#home_news_view aside ~ article {
		float: float;
		width: calc(75% - 3rem);
	}
	
	#home_news_view .banner {
		overflow: hidden;
		margin-bottom: 1rem;
		background: #fff;
	}

	#home_news_view .banner img {
		width: 100%;
	}

	#home_news_view article {
		background: #fff;
		overflow: hidden;
		margin-right: 1rem;
		margin-bottom: 2rem;
		padding: 1rem;
		border-top: 1px solid rgba(0, 0, 0, .04);
		border-radius: .25rem;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
	}
</style>
