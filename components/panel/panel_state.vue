<template>
	<el-button-group class="panel_state">
		<el-button v-for="(o, index) in list" :class="{'el-button--primary': state == o.id }" :key="index" @click="set(o.id)" size="small">{{ o.name }}</el-button>
	</el-button-group>
</template>

<script>
	export default {
		props:{
			list:{
				type: Array,
				default: function(){
					return [];
				}
			},
			vm:{
				id: "id",
				name: "name"
			}
		},
		components: {
			
		},
		data() {
			return {
				state: 0
			}
		},
		methods:{
			set(id){
				this.state = id;
			}
		}
	}
</script>

<style>
	
</style>
