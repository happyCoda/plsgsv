<template>
  <div class="group-checkbox">
    <basic-checkbox
      v-for="value in values"
      v-model="checkedValues"
      :name="name"
      :value="value"
      :onChange="onCheckboxChange" />
  </div>
</template>

<script>
  import BasicCheckbox from '@/components/BasicCheckbox.vue';

  export default {
    name: 'GroupCheckbox',
    components: {
      BasicCheckbox
    },
    props: {
      name: {
        type: String,
        default: ''
      },
      values: {
        type: Array,
        default: () => {
          return [];
        }
      },
      onChange: {
        type: Function,
        default: () => {}
      }
    },
    data() {
      return {
        checkedValues: []
      };
    },
    methods: {
      onCheckboxChange(checkboxObj) {
        let val = Object.keys(checkboxObj)[0];
        let isChecked = Object.values(checkboxObj)[0];

        if (isChecked) {
          this.checkedValues.push(val);
          this.onChange(this.checkedValues);
        } else {
          this.checkedValues = this.checkedValues.filter((item) => {
            return item !== val;
          });
          this.onChange(this.checkedValues);
        }
      }
    }
  };
</script>

<style lang="less">
</style>
