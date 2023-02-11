import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import '@/assets/global.css'
import 'virtual:windi.css'

const run = () => {
  const app = createApp(App)
  const pinia = createPinia()
  // 状态持久化

  app.use(pinia)
  app.use(router)

  app.mount('#app')
}

run()
