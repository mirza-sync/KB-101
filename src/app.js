import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{ path: '/', component: Home },
	    { path: '/category/:id', component: Category },
    ]
})

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
});