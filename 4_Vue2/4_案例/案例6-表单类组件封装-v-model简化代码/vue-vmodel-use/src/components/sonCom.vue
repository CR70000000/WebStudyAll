<template>
  <div>
    <input :value="value" @input="handleInput" type="text" name="" id="" />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
      console.log(e.target.value)
    },
  },
}; 
</script>

<style>
</style>