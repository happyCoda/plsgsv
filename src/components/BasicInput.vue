<template>
  <input
    type="text"
    value
    v-model="value" />
</template>

<script>
  export default {
    name: 'BasicInput',
    props: {
      onChange: {
        type: Function,
        default: () => {}
      }
    },
    data() {
      return {
        value: ''
      };
    },
    watch: {
      value(newVal) {
        this.onChange(newVal);
      }
    }
  };
</script>

<style lang="less">
</style>
