<template>
  <ul>
    <li
      contenteditable="true"
      v-for="item, idx of items"
      :data-idx="idx"
      @keypress.enter="update">{{ `${item}, ${idx}` }}</li>
  </ul>
</template>

<script>
  export default {
    name: 'List',
    props: {
      items: {
        type: Array,
        default: () => []
      },
      update: {
        type: Function,
        default: () => {}
      }
    }
  };
</script>

<style scoped lang="less">
</style>
