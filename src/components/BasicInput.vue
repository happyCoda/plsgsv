<template>
  <input
    type="text"
    value
    ref="input"
    v-model="value"
    :placeholder="placeholder"
    :name="name"
    :class="inputClassNames" />
</template>

<script>
  export default {
    name: 'BasicInput',
    props: {
      name: {
        type: String,
        default: 'name'
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      inputClassNames: {
        type: [Object, Array],
        default: () => {
          return {
            control: true,
            'control_input': true
          }
        }
      },
      onChange: {
        type: Function,
        default: () => {}
      }
    },
    data() {
      return {
        value: '',
        placeholder: ''
      };
    },
    watch: {
      value(newVal) {
        this.onChange(newVal);
      }
    },
    created() {
      setTimeout(() => {
        this.placeholder = 'Enter some stuff...';
      }, 1000);
    },
    mounted() {
      if (this.autofocus) {
        this.$refs.input.focus();
      }
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated() {
      console.log('updated');
    }
  };
</script>

<style scoped lang="less">
  .transition(@duration: .3s, @delay: 0s, @function: ease-in-out, @props: all) {
    transition: @props @duration @function @delay;
  }

  .control {
    visibility: visible;
    opacity: 1;
    .transition(3s);

    &.hidden {
      visibility: hidden;
      opacity: 0;
      .transition();
    }
  }
</style>
