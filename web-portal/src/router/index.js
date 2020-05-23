import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/home/index')
        }
      ]
    },
    {
      path: '/minprogram',
      redirect: '/minprogram/index',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/minProgram/index')
        }
      ]
    },
    {
      path: '/webprogram',
      redirect: '/webprogram/index',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/webProgram/index')
        }
      ]
    },
    {
      path: '/test',
      redirect: '/test/index',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/test/index')
        }
      ]
    }
  ]
})
