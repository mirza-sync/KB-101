import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueRouter)
Vue.use(VueCompositionAPI)

const router = new VueRouter({
	routes: [
		{ path: '/', component: Home },
	    { path: '/category/:id', component: Category },
    ]
})

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});