<template>
    <div class="layout">
        <CategoryCard :category="selectedCategory" :showDesc="true" />
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
        <div>
            <span>Other categories</span>
        </div>
    </div>
</template>

<script>
import { axiosClient } from '../lib/axios';
import { mapActions, mapState } from 'pinia'
import { useCategoryStore } from '../store';
import CategoryCard from '../components/CategoryCard.vue'

export default {
    data() {
        return {
            articles: []
        }
    },
    components: {
        CategoryCard
    },
    created() {
        this.getArticlesByCategoryId(this.$route.params.id)
        this.getSelectedCategory()
    },
    computed: {
        ...mapState(useCategoryStore, ['selectedCategory'])
    },
    methods: {
        ...mapActions(useCategoryStore, ['getSelectedCategory']),
        async getArticlesByCategoryId(id) {
            try {
                const res = await axiosClient.get(`category/${id}`)
                this.articles = res.data.filter(article => article.status === 'published')
            } catch (error) {
                console.log("Error fetching articles", error)
            }
        },
        getIconClass(articleIcon) {
            return `icon fas fa-${articleIcon}`;
        },
    }
}
</script>

<style lang="scss" scoped>
	@import '../scss/variables';

    .layout {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 3.75rem;
    }

    .category-card {
        border: 1px solid #eee;
        border-radius: 4px;
        padding: 2rem;
        text-align: center;

        .icon {
            color: $green;
            font-size: 50px;

            // Fallback if icon doesn't appear
            display: block;
            height: 50px;
        }
    }

    .article-card {
        border: 1px solid #eee;
        border-radius: 4px;
        padding: 2rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 1rem;

        .icon {
            color: $green;
            font-size: 20px;

            // Fallback if icon doesn't appear
            display: block;
            height: 20px;
        }

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
</style>