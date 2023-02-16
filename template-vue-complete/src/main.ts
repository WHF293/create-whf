import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import i18n from './languages'
import '@/assets/global.css'
import 'virtual:windi.css'

const run = () => {
  const app = createApp(App)
  const pinia = createPinia()
  // 状态持久化
  pinia.use(piniaPluginPersistedstate)

  app.use(i18n)
  app.use(pinia)
  app.use(router)

  app.mount('#app')
}

run()
