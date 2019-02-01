<template>
	<div class="page_hook"></div>
</template>

<script>
	import $ from 'jquery';
	
	export default {
		components: {},
		props:{
			
		},
		data() {
			return {

			};
		},
		computed: {},
		created() {
			$.cookie('test', '123');
			var val = $.cookie('test');
			console.log(val);
			var v = $.http.get('/plug/test.js', function(ret){
				console.log('特殊');
				console.log(ret);
			});
		}
	}
</script>

<style>
</style>
