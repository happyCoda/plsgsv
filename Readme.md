```
1. v-once for single rendering

2. bind to classes not to styles:
  :class="['txt', 'msg']" instead of :style="{ color: '#c3f1a9' }"

3. .once - event modifier for single event handler invokation
  .self - only trigger handler if event.target is the element itself
  i.e. not from a child element
  for defining custom key modifiers use:
  Vue.config.keyCodes = {
    f1: 112
  }
```
