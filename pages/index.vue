<template>
  <div id="home_index" class="page_home">
		<page_head />
		<div class="main">
			<Logo />
		</div>
		<page_foot v-once/>
  </div>
</template>

<script>
import page_head from '~/components/page_head.vue';
import page_foot from '~/components/page_foot.vue';

export default {
  components: {
    page_head,
		page_foot
  }
}
</script>

<style>

</style>
