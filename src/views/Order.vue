<template>
    <div id="order">
      <h1>订单管理</h1>
      <div class="input">
        <label for="number">订单编号：</label>
        <input id="number" type="text" v-model="number" />
        <label for="status">订单状态：</label>
        <select id="status" v-model="status">
          <option value="待处理">待处理</option>
          <option value="处理中">处理中</option>
          <option value="已完成">已完成</option>
          <option value="已取消">已取消</option>
        </select>
        <button @click="addOrder">录入订单</button>
      </div>
      <div class="record">
        <h2>订单记录</h2>
        <table>
          <thead>
            <tr>
              <th>订单编号</th>
              <th>订单状态</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in orders" :key="index">
              <td>{{ order.number }}</td>
              <td>{{ order.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Order",
    data() {
      return {
        number: "",
        status: "待处理",
        orders: []
      };
    },
    methods: {
      addOrder() {
        if (this.number) {
          this.orders.push({
            number: this.number,
            status: this.status
          });
          this.number = "";
          this.status = "待处理";
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .input {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .input label {
    margin-right: 10px;
  }
  
  .input input,
  .input select {
    width: 200px;
  }
  
  .input button {
    margin-left: 20px;
  }
  
  .record {
    margin-top: 20px;
  }
  
  .record table {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  
  .record th,
  .record td {
    border: 1px solid #ccc;
    padding: 10px;
  }
  </style>