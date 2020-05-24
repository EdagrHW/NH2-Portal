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
      path: '/login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/register',
      component: () => import('@/views/register/index')
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
      component: () => import('@/views/test/index')
    }
  ]
})
