import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// import global css 
import './assets/css/global.css'
import axios from 'axios'
// config baseurl
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8282',
  withCredentials: true, 
  headers: {
    'Access-Control-Allow-Origin': 'http://127.0.0.1:8080'
  }
});
Vue.prototype.$http = apiClient;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
