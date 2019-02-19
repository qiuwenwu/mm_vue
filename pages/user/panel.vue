<template>
	<div id="user_info" class="main page_user">
		<div class="warp">
			<aside>
				<nav_side :list="nav_side" v-once />
			</aside>
			<article>
				<div class="row">
					<div class="col-4" style="padding-right: 0;">
						<div class="card">ddd</div>
					</div>
					<div class="col-8">
						<div class="card">ddd</div>
					</div>
					<div class="col" style="padding-right: 0;">
						<div class="card">ddd</div>
					</div>
					<div class="col">
						<div class="card">ddd</div>
					</div>
				</div>
			</article>
		</div>
	</div>
</template>

<script>
	import nav_side from '~/components/nav/nav_side.vue';

	export default {
		components: {
			nav_side
		},
		data() {
			return {
				nav_side: this.$store.state.web.nav_side
			}
		}
	}
</script>

<style>
</style>
