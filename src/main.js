import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 创建Vue实例，并挂载到App.vue上
createApp(App).use(router).mount('#app')
