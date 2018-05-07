<template>
  <div class="home">
    <basic-input
      :autofocus="true"
      :class="inputClassNames" />
    <basic-button
      btnTxt="Show input"
      :clickHandler="toggleInputHandler" />
    <p :class="['txt', 'msg']">{{ msg }}</p>
    <div class="group-checkbox">
      <div
        v-for="val in checkboxValues"
        class="checkbox-wrapper">
        <label :for="val">{{ val }}</label>
        <basic-checkbox
          :id="val"
          :value="val"
          :onChange="onCheckboxChange"
          name="name" />
      </div>
    </div>
    <div>
      checked: {{ checkedValues }}
    </div>
    <!-- <group-checkbox
      :name="checkboxName"
      :values="checkboxValues"
      :onChange="onCheckboxChange" /> -->

    <div
      class="group-btn"
      @keypress.q="qPressHandler">
      <label for="option1">option1</label>
      <input type="radio" id="option1" name="option" value="option1" />
      <label for="option2">option2</label>
      <input type="radio" id="option2" name="option" value="option2" />
    </div>
    <div class="mouse-click-area">
      <p
        class="mouse-click-area__text"
        @keypress="keypressHandler">click without left modifier</p>
      <p class="mouse-click-area__text">click with left modifier</p>
      <div
        @mousedown="clickMouseAreaHandler"
        class="mouse-click-area__left"></div>
      <div
        @mousedown.left="clickMouseAreaHandler"
      class="mouse-click-area__right"></div>
    </div>
    <p class="message">{{ message }}</p>
    <list
      :items="beers"
      :update="updateBeers" />
    <div>{{ beers }}</div>
  </div>
</template>

<script>
  import BasicInput from '@/components/BasicInput.vue';
  import BasicButton from '@/components/BasicButton.vue';
  import GroupCheckbox from '@/components/GroupCheckbox.vue';
  import BasicCheckbox from '@/components/BasicCheckbox.vue';
  import List from '@/components/List.vue';

  export default {
    name: 'home',
    components: {
      BasicInput,
      BasicButton,
      GroupCheckbox,
      BasicCheckbox,
      List
    },
    data() {
      return {
        inputClassNames: {
          hidden: false
        },
        msg: '',
        checkboxName: 'interests',
        checkboxValues: [
          'sports',
          'music',
          'movies'
        ],
        checkedValues: [
          {
            key: 'sports',
            val: false
          },
          {
            key: 'music',
            val: false
          },
          {
            key: 'movies',
            val: false
          }
        ],
        message: 'one',
        beers: [
          'Black Jack Stout',
          'Crazy Moose',
          '#100'
        ]
      };
    },
    methods: {
      toggleInputHandler() {
        this.inputClassNames['hidden'] = !this.inputClassNames['hidden'];
      },
      onInputChange(newVal) {
        this.msg = newVal;
      },
      onCheckboxChange(valObj) {
        this.checkedValues = this.checkedValues.map(item => {
            if (typeof valObj[item.key] !== 'undefined') {
              item.val = valObj[item.key];
            }
            return item;
        });
      },
      keypressHandler(evt) {
        console.log(evt.keyCode);
      },
      qPressHandler(evt) {
        console.log('q pressed!');
      },
      clickMouseAreaHandler(evt) {
        console.log(evt.which);
      },
      updateBeers(evt) {
        this.$set(this.beers, evt.target.dataset.idx, evt.target.textContent);
      }
    },
    created() {
      console.time('Home.vue');
    },
    mounted() {
      console.timeEnd('Home.vue');

      this.$nextTick(() => {
        this.message = 'two';
      });
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

  .mouse-click-area {
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    height: 300px;
    margin: 10px auto;
    border: 1px solid rgb(106, 164, 99);

    &__text {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__left,
    &__right {
      width: 50%;
      box-sizing: border-box;
      border: 1px solid rgb(49, 58, 106);
    }
  }
</style>
