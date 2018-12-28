import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAnalytics from 'vue-analytics'
import BootstrapVue from 'bootstrap-vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false

Vue.use(require('vue-moment'));
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue);
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.use(VueAnalytics, {
  id: 'UA-128950882-1',
  router
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
