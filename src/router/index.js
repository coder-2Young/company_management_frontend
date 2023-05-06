import { createRouter, createWebHistory } from "vue-router";
import Order from "../views/Order.vue";
// import Production from "../views/Production.vue";
// import Inventory from "../views/Inventory.vue";
// import Customer from "../views/Customer.vue";

const routes = [
  {
    path: "/",
    name: "Order",
    component: Order
  },
  {
    path: "/production",
    name: "Production",
    component: Production
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: Inventory
  },
  {
    path: "/customer",
    name: "Customer",
    component: Customer
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;