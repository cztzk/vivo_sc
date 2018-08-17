import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import classify from '@/pages/classify'
import phList from '@/pages/phList'
import parts from '@/pages/parts'
import productDetail from '@/pages/productDetail'
import news from '@/pages/news'
import my from '@/pages/my'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'home',
      component: index
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/phList',
      name: 'phList',
      component: phList
    },
    {
      path: '/parts',
      name: 'parts',
      component: parts
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path:"*",
      redirect:"/"
    }
  ]
})
