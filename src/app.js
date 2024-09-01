import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{ path: '/', component: Home },
	    { path: '/category', component: Category },
    ]
})

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});