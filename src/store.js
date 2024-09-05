import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
        selectedCategory: null,
    }),
    actions: {
        setCategories(categories) {
            this.categories = categories
        },
        setSelectedCategory(category) {
            localStorage.setItem('tawk-selected-category', JSON.stringify(category))
            this.selectedCategory = category
        },
        getSelectedCategory() {
            const category = localStorage.getItem('tawk-selected-category')
            if (category) {
                this.selectedCategory = JSON.parse(category)
            }
        }
    },
})
