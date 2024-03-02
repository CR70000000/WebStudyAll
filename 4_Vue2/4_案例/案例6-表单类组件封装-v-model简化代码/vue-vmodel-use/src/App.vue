<template>
  <div class="app">
    <Son v-model="text"></Son>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Son from "./components/sonCom.vue";
export default {
  data() {
    return {
      text: "父组件",
    };
  },
  components: {
    Son,
  },
};
</script>

<style>
</style>