<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ $store.state.count }}</label>
    <br>
    <button @click="resetCount">默认值</button>
    <button @click="addCount(1)">值 + 1</button>
    <button @click="addCount(5)">值 + 5</button>
    <button @click="addCount(10)">值 + 10</button>
    <button @click="addCountAsync(123)">1 秒后修改为 123</button>
    <button @click="changeTitle('VueX')">修改标题</button>
    <hr>
    <p>user模块中的state: <label>{{ $store.state.user.userInfo.name }}</label> （直接获取） </p>
  </div>
</template>

<script>
export default {
  name: 'Son1Com',
  methods: {
    resetCount () {
      this.$store.commit('resetCount')
    },
    addCount (n) {
      this.$store.commit('addCount', n)
    },
    changeTitle (newTitle) {
      this.$store.commit('changeTitle', newTitle)
    },
    addCountAsync (newCount) {
      this.$store.dispatch('changeCountAsync', newCount)
    }
  }
}
</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
