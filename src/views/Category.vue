<template>
    <div v-if="articles.length > 0">
        <div v-for="article of articles">
            <h2>{{ article.title }}</h2>
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
        this.getCategoryById(this.$route.params.id)
    },
    methods: {
        async getCategoryById(id) {
            try {
                const res = await axiosClient.get(`category/${id}`)
                this.articles = res.data.filter(article => article.status === 'published')
            } catch (error) {
                console.log("Error fetching articles", error)
            }
        }
    }
}
</script>