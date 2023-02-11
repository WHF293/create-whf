import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      name: '首页',
    },
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      name: '详情页',
    },
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      name: '登录页',
    },
    component: () => import('@/views/loginPage.vue'),
  },
]

export default routes
