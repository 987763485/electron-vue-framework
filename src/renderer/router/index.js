import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home',
      component: Layout,
      children: [
        {
          path: 'home',
          component: require('@/views/home').default,
          meta: {title: '首页'}
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
