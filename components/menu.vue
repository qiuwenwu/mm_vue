<template>
	<mm_list class="menu">
		<a class="menu_item" url="/pages/home/special?title=关于我们">
			<div class="menu_icon" style="background-image: linear-gradient(135deg, rgb(252, 207, 49) 10%, rgb(245, 85, 85) 100%);">
				<text class="fa fa-user-circle-o"></text>
			</div><!--/view-->
			<text class="menu_title">关于我们</text>
		</a>
		<a class="menu_item" url="/pages/calculation/dbd_view">
			<div class="menu_icon" style="background-image: linear-gradient(135deg, #FFF720 10%, #3CD500 100%);">
				<text class="fa fa-cloud"></text>
			</div><!--/view-->
			<text class="menu_title">DBD介绍</text>
		</a>
		<a class="menu_item" url="/pages/home/news_list">
			<div class="menu_icon" style="background-image: linear-gradient(135deg, #5EFCE8 10%, #736EFE 100%);">
				<text class="fa fa-send"></text>
			</div><!--/view-->
			<text class="menu_title">新闻动态</text>
		</a>
		<a class="menu_item" url="/pages/home/question_list">
			<div class="menu_icon" style="background-image: linear-gradient(135deg, #EE9AE5 10%, #5961F9 100%);">
				<text class="fa fa-question-circle"></text>
			</div><!--/view-->
			<text class="menu_title">常见问题</text>
		</a>
	</mm_list>
</template>

<script>
	
</script>

<style>
	.menu {
		text-align: center;
		padding: 0.75rem;
		overflow: hidden;
	}
	
	.menu_item {
		float: left;
		padding-top: 0.5rem;
		width: 25%;
	}
	
	.menu_icon {
		font-size: 1.4rem;
		width: 3rem;
		height: 3rem;
		line-height: 3rem;
		border-radius: 0.5rem;
		color: #fff;
		margin: 0 auto;
	}
	
	.menu_title {
		color: #333;
		font-size: 85%;
	}
</style>
