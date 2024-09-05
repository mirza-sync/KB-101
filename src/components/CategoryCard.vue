<template>
    <div class="card" @click="navigateToCategoryArticles()" :class="{ 'card-height': showDesc }">
        <div>
            <i :class="getIconClass(category)" class="icon"></i>
            <div class="title">{{ category.title }}</div>
            <div class="article">{{ category.totalArticle }} articles</div>
            <span class="small">Last updated 2 days ago</span>
        </div>
        <template v-if="showDesc">
            <div class="divider"></div>
            <div class="card-desc">
                <i class="fas fa-info-circle"></i>
                <span>{{ category.description }}</span>
            </div>
        </template>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useCategoryStore } from '../store';

export default {
    name: 'CategoryCard',
    props: {
        category: Object,
        showDesc: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        ...mapActions(useCategoryStore, ['setSelectedCategory']),
        getIconClass(category) {
            return `fas fa-${category.icon}`
        },
        navigateToCategoryArticles() {
            this.setSelectedCategory(this.category)
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

    .divider {
        height: 1px;
        background-color: #eee;
        width: auto;
        margin-inline: -2rem;
        margin-block: 20px;
    }

    .card-desc {
        display: flex;
        flex-direction: column;

        i {
            color: $green;
            font-size: 20px;
        }

        span {
            margin-top: 1rem;
            font-size: 13px;
            color: $text-gray;
        }
    }

    .card-height {
        height: max-content;
    }
</style>