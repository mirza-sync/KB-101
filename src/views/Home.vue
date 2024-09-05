<template>
    <div class="card-container">
        <template v-for="category in categories">
            <CategoryCard :category="category" />
        </template>
    </div>
</template>

<script>
import { axiosClient } from '../lib/axios';
import CategoryCard from '../components/CategoryCard.vue'
import { useCategoryStore } from '../store'
import { mapStores, mapActions } from 'pinia'

export default {
    name: 'Home',
    components: {
        CategoryCard
    },
    data() {
        return {
            categories: []
        }
    },
    created() {
        this.getCategories()
    },
    computed: {
        ...mapStores(useCategoryStore)
    },
    methods: {
        ...mapActions(useCategoryStore, ['setCategories']),
        async getCategories() {
            try {
                const res = await axiosClient.get('categories')
                this.categories = res.data.filter(cat => cat.enabled).sort((a, b) => a.order - b.order)
                this.setCategories(this.categories)
            } catch (error) {
                console.log("Error fetching categories", error)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .card-container {
        display: grid;
        grid-auto-flow: row;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: auto;
        gap: 1.25rem;
    }
</style>