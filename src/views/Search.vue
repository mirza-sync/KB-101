<template>
    <div>{{ article.title }}</div>
</template>
<script>
import { axiosClient } from '../lib/axios';

export default {
    data() {
        return {
            article: Object,
            queryText: ''
        }
    },
    created() {
        // console.log("Router", this.$route)
        this.queryText = this.$route.params.query
        this.search()
    },
    methods: {
        async search() {
			const res = await axiosClient.get(`search/${this.queryText}`)
            const found = res.data.find(article => {
				return article.title.includes(this.queryText)
			})
            console.log(found)
			if (found) {
                this.article = found
            }
		}
    }
}
</script>