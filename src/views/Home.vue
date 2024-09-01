<template>
    <div>
        <div v-for="category in categories">
            <div :key="category.id">{{ category.order }}. {{ category.title }}</div>
        </div>
    </div>
</template>

<script>
import { axiosClient } from '../lib/axios';

export default {
    name: 'Home',
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
                this.categories = res.data.sort((a, b) => a.order - b.order)
            } catch (error) {
                console.log("Error fetching categories", error)
            }
        }
    }
}
</script>