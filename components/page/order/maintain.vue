<template>
	<div class="ordeer_maintain">
		<div class="data_no">
			<img src="/img/file.png" />
			<p><span>{{ $lang('no_data') }}</span></p>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				lang: this.$store.state.lang.dict
			}
		}
	}
</script>

<style>
</style>
