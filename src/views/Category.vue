<template>
    <div v-if="articles.length > 0">
        <div v-for="article of articles" class="article-card">
            <i :class="getIconClass(article.icon)"></i>
            <div class="article-desc">
                <h2>{{ article.title }}</h2>
                <span>Updated 2 days ago</span>
            </div>
            <i class="icon fas fa-chevron-right"></i>
        </div>
    </div>
    <div v-else>
        <span>No article found</span>
    </div>
</template>

<script>
import { axiosClient } from '../lib/axios';

export default {
    data() {
        return {
            articles: []
        }
    },
    mounted() {
        this.getArticlesByCategoryId(this.$route.params.id)
    },
    methods: {
        async getArticlesByCategoryId(id) {
            try {
                const res = await axiosClient.get(`category/${id}`)
                this.articles = res.data.filter(article => article.status === 'published')
            } catch (error) {
                console.log("Error fetching articles", error)
            }
        },
        getIconClass(articleIcon) {
            return `icon fas fa-${articleIcon}`
        },
    }
}
</script>

<style lang="scss" scoped>
	@import '../scss/variables';

    .article-card {
        border: 1px solid #eee;
        border-radius: 4px;
        padding: 2rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 1rem;

        .article-desc {
            flex-grow: 1;

            h2 {
                margin: 0;
            }

            span {
                font-size: 11px;
                color: $text-gray;
            }
        }

    }

    .icon {
        color: $green;
        font-size: 20px;

        // Fallback if icon doesn't appear
        display: block;
        height: 20px;
    }
</style>