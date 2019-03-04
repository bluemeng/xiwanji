import Vue from 'vue'
import Router from 'vue-router'

const HomeIndex = () => import('../pages/Index/Index.vue');
const Saoma = () => import('../pages/Saoma/Saoma.vue');
const Center = () => import('../pages/Center/Center.vue');

import Jifentixian from '../components/Jifentixian/Jifentixian.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: HomeIndex, // 返回路由组件的函数, 只有执行此函数才会加载路由组件, 这个函数在请求对应的路由路径时才会执行
      meta: {
        showFooter: true
      }
    },
    {
      path: '/saoma',
      component: Saoma,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/center',
      component: Center,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/jifentixian',
      component: Jifentixian,
    },
  ]
})
