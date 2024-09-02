<template>
    <div class="card" @click="navigateToCategoryArticles()">
        <i :class="getIconClass(category)" class="icon"></i>
        <div class="title">{{ category.title }}</div>
        <div class="article">{{ category.totalArticle }} articles</div>
        <span class="small">Last updated 2 days ago</span>
    </div>
</template>

<script>
export default {
    name: 'CategoryCard',
    props: {
        category: Object
    },
    methods: {
        getIconClass(category) {
            return `fas fa-${category.icon}`
        },
        navigateToCategoryArticles() {
            this.$router.push(`/category/${this.category.id}`)
        }
    }
}
</script>

<style lang="scss" scoped>
	@import '../scss/variables';

    .card {
        border: 1px solid #eee;
        border-radius: 4px;
        text-align: center;
        padding: 2rem;
        cursor: pointer;
    }

    .icon {
        color: $green;
        font-size: 50px;
        margin-bottom: 20px;

        // Fallback if icon doesn't appear
        display: block;
        height: 50px;
    }

    .title {
        font-size: 20px;
        color: $text-black;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .article {
        color: $green;
        font-size: 13px;
    }

    .small {
        font-size: 11px;
        color: $text-gray;
    }
</style>