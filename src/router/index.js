import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/home.vue'
import about from '@/components/about.vue'
import links from '@/components/links.vue'
import research from '@/components/research.vue'
import people from '@/components/people.vue'
import publications from '@/components/publications.vue'

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
            path: '/links',
            name: 'links',
            component: links
        },
        {
            path: '/research',
            name: 'research',
            component: research
        },
        {
            path: '/people',
            name: 'people',
            component: people
        },
        {
            path: '/publications',
            name: 'publications',
            component: publications
        }
    ]
})