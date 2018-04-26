import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import router from './router/index'
import token from '@/router/token'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 图片预览
import VuePreview from 'vue-preview'
import 'swiper/dist/css/swiper.css'
import '@/assets/scss/reset.scss'
import '@/assets/scss/mixin.scss'
import '@/assets/scss/const.scss'
import '@/assets/scss/project.scss'
import '@/assets/scss/index.scss'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueLazyload from 'vue-lazyload'
import api from './api/http'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.prototype.$api = api
Vue.prototype.axios = axios
Vue.use(VueLazyload, {
  // loading: require('@/assets/img/logo.png')
  preLoad: 1.4,
  attempt: 1,
  error: '@/assets/img/logo.png',
  loading: '@/components/index/img/icon-loading'
})
Vue.use(Mint)
// 图片预览
Vue.use(VuePreview)

let vm = new Vue({
  el: '#app',
  router,
  token,
  components: {App},
  template: '<App/>',
})

Vue.use({
  vm
})
