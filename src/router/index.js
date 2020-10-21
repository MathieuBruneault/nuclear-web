
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/home.vue'
import about from '@/components/about.vue'
import resources from '@/components/resources.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    hash: false,
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/home',
            name: 'home',
            component: home 
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/resources',
            name: 'resources',
            component: resources
        }
    ]
})