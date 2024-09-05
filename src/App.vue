<template>
	<div class="container">
		<tawk-header></tawk-header>
		<router-view></router-view>
	</div>
</template>

<script>
import Header from './components/Header.vue'

export default {
	components:{
		'tawk-header': Header
	}
}
</script>

<style lang="scss" scoped>
	@import 'scss/main.scss';

	.container {
		padding-inline: 9rem;
		max-width: 1280px;
		margin-inline: auto;
	}
</style>