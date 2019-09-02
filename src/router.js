import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Help from './views/Help.vue'
import Product from './views/Product.vue'
import Shop from './views/Shop.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'hello-vue',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
