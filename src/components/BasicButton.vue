<template>
  <button
    type="button"
    name="button"
    @click="clickHandler">{{ btnTxt }}</button>
</template>

<script>
  export default {
    props: {
      btnTxt: {
        type: String,
        default: 'Btn'
      },
      clickHandler: {
        type: Function,
        default: () => {}
      }
    }
  };
</script>

<style scoped lang="less">

</style>
