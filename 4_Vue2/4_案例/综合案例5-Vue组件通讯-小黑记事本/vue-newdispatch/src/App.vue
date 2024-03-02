<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @handleAdd="handleAdd"></TodoHeader>
    <TodoMain :list="list" @handleDel="handleDel"></TodoMain>
    <TodoFooter :list="list" @clear="clear"></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [
        { id: 1, name: "踢足球" },
        { id: 2, name: "买菜" },
        { id: 3, name: "加油" },
        { id: 4, name: "打游戏" },
        { id: 5, name: "写代码" },
      ],
    };
  },
  methods: {
    handleAdd(newValue) {
      this.list.push({
        id: +new Date(),
        name: newValue,
      });
    },
    handleDel(value) {
      this.list = this.list.filter((item) => item.id !== value);
    },
    clear() {
      this.list = [];
    },
  },
  watch: {
    list: {
      deep: true,
      handler(newValue) {
        localStorage.setItem("list", JSON.stringify(newValue));
      },
    },
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
};
</script>

<style>
</style>
