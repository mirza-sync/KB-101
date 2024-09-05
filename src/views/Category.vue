<template>
    <div>
        <div class="layout">
            <CategoryCard :category="selectedCategory" :showDesc="true" />
            <div v-if="articles.length > 0" class="article-col">
                <div v-for="article of articles" class="article-card">
                    <i :class="getIconClass(article.icon)"></i>
                    <div class="article-desc">
                        <h2>{{ article.title }}</h2>
                        <span>{{ formatDate(article.updatedOn) }}</span>
                    </div>
                    <i class="icon fas fa-chevron-right"></i>
                </div>
            </div>
            <div v-else>
                <span>No article found</span>
            </div>
        </div>
        <div class="divider"></div>
        <div class="other-cat">
            <h3>Other categories</h3>
            <div class="cat-list">
                <template v-for="category of otherCategories">
                    <CategoryCard :category="category" />
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { axiosClient } from '../lib/axios';
import { mapActions, mapState } from 'pinia'
import { useCategoryStore } from '../store';
import CategoryCard from '../components/CategoryCard.vue'
import { formatDate } from '../utils';

export default {
    data() {
        return {
            articles: [],
            otherCategories: [],
        }
    },
    components: {
        CategoryCard
    },
    created() {
        this.getArticlesByCategoryId(this.$route.params.id)
        this.getSelectedCategory()
        this.getOtherCategories()
    },
    computed: {
        ...mapState(useCategoryStore, ['selectedCategory', 'categories'])
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
        getOtherCategories() {
            if (this.categories.length > 0) {
                this.otherCategories = this.categories.filter(category => category.id !== this.selectedCategory.id)
            }
        },
        formatDate(timestamp) {
            return formatDate(timestamp)
        }
    }
}
</script>

<style lang="scss" scoped>
	@import '../scss/variables';

    .layout {
        display: flex;
        gap: 3.75rem;

        & > div:first-child {
            flex-basis: 30%;
        }

        .article-col {
            flex-grow: 1;
        }
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

    .divider {
        height: 1px;
        background-color: #eee;
        width: 100%;
        margin-block: 2rem;
    }

    .other-cat {
        h3 {
            color: $text-gray;
            text-align: center;
        }
        
        .cat-list {
            display: flex;
            gap: 1rem;

            div {
                flex: 1;
            }
        }
    }
</style>