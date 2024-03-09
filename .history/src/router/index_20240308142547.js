import Vue from 'vue'
import VueRouter from 'vue-router'
import Book from '@/components/book.vue'

Vue.use(VueRouter)

const routes = [
   {path : '/', component: Book }
]

const router = new VueRouter({
  routes
})

export default router
