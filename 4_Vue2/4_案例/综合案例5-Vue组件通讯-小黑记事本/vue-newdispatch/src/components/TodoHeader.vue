<template>
  <!-- 输入框 -->
  <header class="header">
    <h1>小黑记事本</h1>
    <input
      @keyup.enter="add"
      v-model="todoName"
      placeholder="请输入任务"
      class="new-todo"
    />
    <button class="add" @click="add">添加任务</button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      todoName: ""
    }
  },
  methods: {
    add() {
      if(!this.todoName){
        alert('请输入详细的任务！')
        return
      }

      this.$emit("handleAdd", this.todoName)

      this.todoName = ''
    }
  }
};
</script>

<style>
</style>