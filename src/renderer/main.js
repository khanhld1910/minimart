import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import globalMixin from '../mixins/global-mixin'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
// -- SQLite setup -->
const sqlite3 = require('sqlite3').verbose()
Vue.prototype.$db = new sqlite3.Database(':memory:')

Vue.mixin(globalMixin)
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
