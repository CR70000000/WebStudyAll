<!-- <script>
// 1. setup函数在beforeCreate之前执行
// 2. setup函数中获取不到this，因为this在beforeCreate之前就已经被销毁了
// 3. 数据和函数，需要在 setup 最后 return 才能在模板中使用
export default {
  setup () {
    console.log('setup')
    
    // 数据
    const name = '张三'
    // 函数
    const sayHello = () => {
      console.log('hello')
    }
    return {
      name,
      sayHello
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  }
}
</script> -->
<script setup>
  // 
  console.log('setup')
  // 数据
  const name = '张三'
  // 函数
  const sayHello = () => {
    console.log('hello')
  }
</script>

<template>
  <div>Vue3,学习<span>{{ name }}</span></div>
  <button @click="sayHello">点击</button>
</template>