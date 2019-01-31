<template>
  <div id="home_article" class="page_home">
		<page_head />
		<div class="main">
			<Logo />
		</div>
		<page_foot v-once/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  }
}
</script>

<style>

</style>
