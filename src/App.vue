<template>
  <div id="app">
    <h1>企业管理系统</h1>
    <div class="nav">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="{ active: tab === currentTab }"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
    </div>
    <div class="content">
      <order-management v-if="currentTab === '订单管理'"></order-management>
      <!-- <production-management v-if="currentTab === '生产管理'"></production-management>
      <inventory-management v-if="currentTab === '库存管理'"></inventory-management>
      <customer-management v-if="currentTab === '客户管理'"></customer-management> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import OrderManagement from './views/Order.vue'
// import ProductionManagement from './views/Production.vue'
// import InventoryManagement from './views/Inventory.vue'
// import CustomerManagement from './views/Customer.vue'
export default {
  name: 'App',
  components: {
    OrderManagement,
    // ProductionManagement,
    // InventoryManagement,
    // CustomerManagement
  },
  data() {
    return {
      tabs: ['订单管理', '生产管理', '库存管理', '客户管理'],
      currentTab: '订单管理'
    }
  }
}
</script>

<style>
.nav {
  display: flex;
  justify-content: space-around;
  background-color: red;
}
.nav button {
  padding: 10px;
  border: none;
  background-color: lightgray;
}
.nav button.active {
  background-color: skyblue;
}
.content {
  margin: 20px;
}
</style>