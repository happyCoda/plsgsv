<template>
  <div class="home">
    <basic-input
      :onChange="onInputChange" />
    <p :class="['txt', 'msg']">{{ msg }}</p>

    <div class="group-checkbox">
      <basic-checkbox
        v-for="value in values"
        v-model="checkedValues"
        :name="name"
        :value="value"
        :onChange="onCheckboxChange" />
    </div>
    <!-- <group-checkbox
      :name="checkboxName"
      :values="checkboxValues"
      :onChange="onCheckboxChange" /> -->
  </div>
</template>

<script>
  import BasicInput from '@/components/BasicInput.vue';
  import GroupCheckbox from '@/components/GroupCheckbox.vue';
  import BasicCheckbox from '@/components/BasicCheckbox.vue';

  export default {
    name: 'home',
    components: {
      BasicInput,
      GroupCheckbox,
      BasicCheckbox
    },
    data() {
      return {
        msg: '',
        checkboxName: 'interests',
        checkboxValues: [
          'sports',
          'music',
          'movies'
        ]
      };
    },
    methods: {
      onInputChange(newVal) {
        this.msg = newVal;
      },
      onCheckboxChange(newVal) {
        console.log(newVal);
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
