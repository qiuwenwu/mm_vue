<template>
	<div id="mall_pay" class="main page_mall">
		<div class="warp">
			<div class="card">
				<p>{{ $lang('order_number') }}：<span>{{ form.order_number }}</span></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			form: {
				order_number: "G4454554515121",
				order_time_start: "",
				count: 1375
			}
		}
	}
}
</script>

<style>
	
</style>
