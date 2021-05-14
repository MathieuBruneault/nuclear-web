import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import pdf from 'vue-pdf'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationArrow, faPhone, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLocationArrow)
library.add(faPhone)
library.add(faAngleDown)
library.add(faAngleUp)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(pdf)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
