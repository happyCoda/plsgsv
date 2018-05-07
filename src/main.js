import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

Vue.use(Buefy);
Vue.config.productionTip = false;
Vue.config.keyCodes = {
  q: 113,
  v: 118
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
