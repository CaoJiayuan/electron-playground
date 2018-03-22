import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
  mounted(){
    let ws = new WebSocket('ws://localhost:3003')
    ws.onopen = function () {
      ws.send('Hello')
    }
  }
}).$mount('#app')
