<template>
  <input
    type="checkbox"
    ref="checkbox"
    v-model="checked"
    :name="name"
    :value="value" />
</template>

<script>
  export default {
    name: 'BasicCheckbox',
    props: {
      name: {
        type: String,
        default: 'name'
      },
      value: {
        type: String,
        default: ''
      },
      onChange: {
        type: Function,
        default: () => {}
      }
    },
    data() {
      return {
        checked: false
      };
    },
    watch: {
      checked(newVal) {
        this.onChange({ [this.value]: newVal });
      }
    },
    beforeUpdate() {
      console.log('update!!!');
    }
  };
</script>

<style lang="less">
</style>
