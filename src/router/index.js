import Vue from 'vue'
import VueRouter from 'vue-router'
import NormalMode from '../views/NormalMode.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'normal',
    component: NormalMode
  },
  {
    path: '/kidding',
    name: 'kidding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/KiddingMode.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
