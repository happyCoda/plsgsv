<template>
  <div class="home">
    <basic-input
      :onChange="onInputChange" />
    <p :class="['txt', 'msg']">{{ msg }}</p>
  </div>
</template>

<script>
  import BasicInput from '@/components/BasicInput.vue';

  export default {
    name: 'home',
    components: {
      BasicInput
    },
    data() {
      return {
        msg: ''
      };
    },
    methods: {
      onInputChange(newVal) {
        this.msg = newVal;
      }
    }
  };
</script>
<style scoped lang="less">
  .txt {
    font: 14px/1.2 normal Arial, Helvetica, sans-serif;
  }
  .msg {
    color: rgb(233, 103, 42);
  }
</style>
