import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import Search from './views/Search.vue'

Vue.use(VueRouter)
const router = new VueRouter({
	routes: [
		{ path: '/', component: Home },
	    { path: '/category/:id', component: Category },
		{ path: '/search/:query', component: Search },
    ]
})

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
	el: '#app',
	router,
	pinia,
	render: h => h(App)
});