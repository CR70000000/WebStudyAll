<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值: <label>{{ $store.state.count }}</label> （通过 store 直接访问）
    <br />
    从vuex中获取的值: <label>{{ count }}</label> （通过辅助函数）
    <br />
    <button @click="resetCount">默认值</button>
    <button @click="subCountNum(1)">值 - 1</button>
    <button @click="subCountNum(5)">值 - 5</button>
    <button @click="subCountNum(10)">值 - 10</button>
    <button @click="subCountNum(20)">值 - 20</button>
    <button @click="changeCountAsync(456)">1 秒后修改为 456</button>
    <button @click="changeTitle('VueX')">修改标题</button>
    <div>默认方法获取：{{ list }}</div>
    <div>getters方法获取：{{ $store.getters.filterList }}</div>
    <div>mapGetters辅助函数获取：{{ filterList }}</div>
    <hr>
    <p>user模块中的state: <label>{{ userInfo.name }}</label> （子模块的映射） </p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['count', 'list']),
    ...mapState('user', ['userInfo']),
    ...mapGetters(['filterList'])
  },
  methods: {
    ...mapMutations(['subCount', 'changeTitle']),
    ...mapActions(['changeCountAsync']),
    resetCount () {
      this.$store.commit('resetCount')
    },
    subCountNum (n) {
      this.subCount(n)
      // this.$store.commit('subCount', n)
    }
    // changeTitle (newTitle) {
    //   this.$store.commit('changeTitle', newTitle)
    // }
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
