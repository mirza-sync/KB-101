<template>
    <div class="card-container">
        <div v-for="category in categories" :key="category.id" style="height: max-content">
            <CategoryCard :category="category" />
            <button @click="$store.commit('increment')">{{ $store.state.count }}</button>
        </div>
    </div>
</template>

<script>
import { axiosClient } from '../lib/axios';
import CategoryCard from '../components/CategoryCard.vue'

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
    methods: {
        async getCategories() {
            try {
                const res = await axiosClient.get('categories')
                this.categories = res.data.filter(cat => cat.enabled).sort((a, b) => a.order - b.order)
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
        grid-template-rows: repeat(2, 1fr);
        gap: 1.25rem;
    }
</style>