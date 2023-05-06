import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Order from './Order.vue'
import Production from './Production.vue'
import Inventory from './Inventory.vue'
import Customer from './Customer.vue'

// 创建路由器实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/order', component: Order },
    { path: '/production', component: Production },
    { path: '/inventory', component: Inventory },
    { path: '/customer', component: Customer }
  ]
})

// 创建Vue实例，并挂载到App.vue上
createApp(App).use(router).mount('#app')