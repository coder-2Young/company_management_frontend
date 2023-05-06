<template>
    <div class="order-management">
      <h1>订单管理</h1>
      <div class="order-input">
        <h2>录入订单</h2>
        <form @submit.prevent="submitOrder">
          <label for="order-number">订单编号：</label>
          <input id="order-number" v-model="orderNumber" required />
          <label for="order-status">订单状态：</label>
          <select id="order-status" v-model="orderStatus" required>
            <option value="待处理">待处理</option>
            <option value="处理中">处理中</option>
            <option value="已完成">已完成</option>
            <option value="已取消">已取消</option>
          </select>
          <button type="submit">提交</button>
        </form>
      </div>
      <div class="order-record">
        <h2>订单记录</h2>
        <table>
          <thead>
            <tr>
              <th>订单编号</th>
              <th>订单状态</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.orderNumber">
              <td>{{ order.orderNumber }}</td>
              <td>{{ order.orderStatus }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OrderManagement',
    data() {
      return {
        orderNumber: '',
        orderStatus: '',
        orders: []
      }
    },
    methods: {
      submitOrder() {
        // 提交订单的逻辑
        // 假设使用axios发送数据到后端
        axios.post('/api/orders', {
          orderNumber: this.orderNumber,
          orderStatus: this.orderStatus
        })
        .then(res => {
          // 假设后端返回成功的消息和订单数据
          if (res.data.message === 'success') {
            // 将订单数据添加到orders数组中
            this.orders.push(res.data.order)
            // 清空输入框和选择框的值
            this.orderNumber = ''
            this.orderStatus = ''
            // 弹出提示框
            alert('订单提交成功')
          }
        })
        .catch(err => {
          // 处理错误情况
          console.log(err)
          alert('订单提交失败')
        })
      }
    }
  }
  </script>
  
  <style scoped>
  .order-management {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .order-input {
    margin: 20px;
  }
  .order-record {
    margin: 20px;
  }
  table {
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid black;
    padding: 10px;
  }
  </style>