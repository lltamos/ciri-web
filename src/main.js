// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import router from './router/index'
import token from '@/router/token'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 将全局样式文件写在 main.js
import '@/assets/scss/reset.scss'
import '@/assets/scss/mixin.scss'
import '@/assets/scss/const.scss'
import '@/assets/scss/project.scss'
// Mint UI
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// 图片懒加载
import VueLazyload from 'vue-lazyload'

// vue-resource
import VueResource from 'vue-resource'

import tool from '@/api/tool'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)

Vue.prototype.axios = axios
Vue.use(Mint)
Vue.use(VueLazyload, {
  // loading: '/static/loading-bars.svg'
  loading: require('@/assets/img/logo.png')
})

let Hub = new Vue()
let vm = new Vue({
  el: '#app',
  router,
  token,
  components: {App},
  template: '<App/>'
})

Vue.use({
  vm,
  Hub
})
