import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import Router from './routes.js'

Vue.use(Vuex);


Vue.http.options.root = 'http://127.0.0.1:8080'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router: Router,
})
