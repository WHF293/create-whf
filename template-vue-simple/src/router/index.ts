import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// 如果需要路由守卫开启这里就行
// router.beforeEach(async (to, from) => {
//   const token = localStorage.getItem('token')
//   if (!token && to.name !== 'login') {
//     return { name: 'Login' }
//   }
// })

export default router
