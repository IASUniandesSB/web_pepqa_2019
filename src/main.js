import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'

import axios from 'axios'
import VueAxios from 'vue-axios'

import BootstrapVue from 'bootstrap-vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(require('vue-moment'));
Vue.use(BootstrapVue);

Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
