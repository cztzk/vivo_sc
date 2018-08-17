// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);

// axios
import axios from 'axios'
Vue.prototype.$http = axios

// 引入Vuex
import store from "./store/store"

// 引入滚动组件
import BScroll from 'better-scroll'

// 引入轮播图组件
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
Vue.use(wcSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
