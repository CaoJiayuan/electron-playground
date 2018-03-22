import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  components: {App},
  router,
  store,
  template  : '<App/>',
  mounted() {

  }
}).$mount('#app');
