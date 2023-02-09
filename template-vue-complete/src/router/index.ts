import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        name: '首页'
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        name: '详情页'
      },
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        name: '登录页'
      },
      component: () => import('@/views/login.vue')
    },
  ]
})

router.beforeEach(async (to, from) => {
  const token = localStorage.getItem('token')
  if (!token && to.name !== 'login') {
    return { name: 'Login' }
  }
})

export default router
