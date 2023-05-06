import { createRouter, createWebHashHistory } from 'vue-router'
import OrderMangement from '../views/Order.vue'
import ProductionMangement from '../views/Production.vue'
import InventoryMangement from '../views/Inventory.vue'
import CustomerMangement from '../views/Customer.vue'

// 创建路由器实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/order', component: OrderMangement },
    { path: '/production', component: ProductionMangement },
    { path: '/inventory', component: InventoryMangement },
    { path: '/customer', component: CustomerMangement }
  ]
})

export default router