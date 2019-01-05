import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuetify)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// -- SQLite setup -->
import initDatabase from './utils/database-init'
Vue.prototype.$db = initDatabase(__dirname + '/db/app.db')

/* eslint-disable no-new */
new Vue({
	components: { App },
	router,
	store,
	template: '<App/>',
}).$mount('#app')
