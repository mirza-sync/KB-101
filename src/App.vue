<template>
	<div>
		<tawk-header></tawk-header>
		<div>
			<router-link to="/">Go to Home</router-link>
    		<router-link to="/Category">Go to Category</router-link>
		</div>
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
</style>