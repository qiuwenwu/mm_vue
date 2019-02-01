<template>
  <div id="home_index" class="page_home">
		<page_head />
		<div class="main">
			123123
		</div>
		<page_foot v-once/>
  </div>
</template>

<script>
import page_head from '~/components/page/page_head.vue';
import page_foot from '~/components/page/page_foot.vue';

export default {
  components: {
    page_head,
		page_foot
  }
}
</script>

<style>

</style>
