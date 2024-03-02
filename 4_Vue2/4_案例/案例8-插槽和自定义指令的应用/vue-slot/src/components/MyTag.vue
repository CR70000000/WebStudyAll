<template>
  <div class="my-tag">
    <input
      v-if="isEdit"
      ref="inp"
      @blur="isEdit = false"
      v-focus
      :value="value"
      @keyup.enter="changeValue"
      class="input"
      type="text"
      placeholder="输入标签"
    />
    <div v-else @dblclick="changeEdit" class="text">{{ value }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEdit: false,
    };
  },
  props: {
    value: String,
  },
  methods: {
    changeEdit() {
      this.isEdit = true;

      // this.$nextTick(() => {
      //   this.$refs.inp.focus();
      // });
    },
    changeValue(e) {
      if (e.target.value.trim() === "") {
        alert("请输入内容！");
        return;
      }
      this.$emit("input", e.target.value);
      this.isEdit = false;
    },
  },
};
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>