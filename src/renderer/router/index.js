import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Dashboard = require('@/components/Dashboard').default
const Home = require('@/components/Dashboard/Home').default
const Product = require('@/components/Dashboard/Product').default

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
        },
        {
          path: 'product',
          name: 'product',
          component: Product,
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/components/Login').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
