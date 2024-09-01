<template>
	<div>
		<tawk-header></tawk-header>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from '@/components/Header.vue'

export default Vue.extend({
	name: "App",
	components:{
		'tawk-header': Header
	}
});
</script>

<style lang="scss" scoped>
	@import 'scss/main.scss';
</style>