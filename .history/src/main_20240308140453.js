import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// import global css 
import './assets/css/global.css'
import axios from 'axios'
// config baseurl
// const apiClient = axios.create({
//   baseURL: 'http://127.0.0.1:8484',
//   timeout: 1000,
//   withCredentials: true, 
//   headers: { 
//     'Access-Control-Allow-Origin': '*' 
//   }
// });
axios.defaults.baseURL='http://127.0.0.1:8484'
Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
