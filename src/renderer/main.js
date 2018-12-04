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


const importTemplate = async () => {
  await import ('gentelella/vendors/bootstrap/dist/css/bootstrap.min.css')
  await import ('gentelella/vendors/font-awesome/css/font-awesome.min.css')
  await import ('gentelella/vendors/nprogress/nprogress.css')
  await import ('gentelella/build/css/custom.min.css')
  global.$ = global.jQuery = await require('gentelella/vendors/jquery/dist/jquery.min')
}
// admin template theme -->


importTemplate()
  .then(() => {
    // import scripts
    require('gentelella/vendors/bootstrap/dist/js/bootstrap.min')
    require('gentelella/vendors/fastclick/lib/fastclick')
    require('gentelella/build/js/custom.min.js')

    Vue.mixin(globalMixin)
    /* eslint-disable no-new */
    new Vue({
      components: { App },
      router,
      store,
      template: '<App/>'
    }).$mount('#app')

  })

