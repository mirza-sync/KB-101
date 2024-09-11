<template>
	<div id="header-wrapper">
		<div id="header-text">
			<h1>Knowledge base doesn't have to be boring</h1>
			<h3>Everything you need to manage your messaging</h3>
		</div>
		<div class="search">
			<input type="search" v-model="queryText" @keyup.enter="search()">
			<button class="search-button" @click="search()">
				<i class="fas fa-search"></i>
			</button>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			queryText: "",
		}
	},
	methods: {
		async search() {
			console.log(this.queryText)
			this.$router.push(`/search/${this.queryText}`)
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../scss/_variables.scss';

	#header-text{
		text-align: center;
		font-family: $font-family;
		color: $text-black;
		padding: 20px;

		h1{
			font-style: normal;
			font-weight: bold;
			font-size: 34px;
			line-height: 41px;
		}

		h3{
			font-style: normal;
			font-weight: normal;
			font-size: 20px;
			line-height: 24px;
		}
	}

	.search {
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 4rem;
		margin-inline: 10rem;

		input {
			height: 100%;
			border: 1px solid #eee;
			border-top-left-radius: 4px;
			border-bottom-left-radius: 4px;
			width: 100%;
			padding-inline: 1rem;
			font-size: 1rem;
		}

		.search-button {
			background-color: $green;
			height: 100%;
			width: 80px;
			border: none;
			border-top-right-radius: 4px;
			border-bottom-right-radius: 4px;

			i {
				color: #fff;
				font-size: 18px;
			}
		}

		input:focus {
			outline: 1px solid $green;
		}
	}
</style>