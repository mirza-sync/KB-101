<template>
    <div v-if="articleCount > 0">
        <div v-for="article of articles">
            <h2>{{ article.title }}</h2>
        </div>
    </div>
    <div v-else>
        <span>No article found</span>
        <button @click="increment()">Test {{ count }}</button>
    </div>
</template>

<script>
import { axiosClient } from '../lib/axios';
import { ref, computed } from '@vue/composition-api';

export default {
    setup(props, context) {
        const count = ref(0);
        const articles = ref([])
        
        if (context.root) {
            axiosClient.get(`category/${context.root._route.params.id}`).then(res => {
                articles.value = res.data.filter(article => article.status === 'published')
            }).catch(error => {
                console.log("Error fetching articles", error)
            })
        }
        
        const articleCount = computed(() => {
            return articles.value.length
        })
        
        const increment = () => {
            count.value++;
        };

        return {
            count,
            increment,
            articles,
            articleCount
        };
    }
}
</script>