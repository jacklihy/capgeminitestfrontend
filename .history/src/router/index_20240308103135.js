import Vue from 'vue'
import VueRouter from 'vue-router'
import HeaderV from '@/components/header.vue'

Vue.use(VueRouter)

const routes = [
   {path : '/', component: HeaderV }
]

const router = new VueRouter({
  routes
})

export default router
