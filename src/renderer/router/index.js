import Vue from 'vue'
import Router from 'vue-router'
import constants from '../utils/constants'
import store from '../store'

Vue.use(Router)

const Dashboard = require('@/components/Dashboard').default
const Home = require('@/components/Dashboard/Home').default
const Product = require('@/components/Dashboard/Product').default
const Warehouse = require('@/components/Dashboard/Warehouse').default
const User = require('@/components/Dashboard/User').default

let router = new Router({
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
          meta: {
            isAdmin: false,
          },
        },
        {
          path: 'product',
          name: 'product',
          component: Product,
          meta: {
            isAdmin: true,
          },
        },
        {
          path: 'user',
          name: 'user',
          component: User,
          meta: {
            isAdmin: true,
          },
        },
        {
          path: 'warehouse',
          name: 'warehouse',
          component: Warehouse,
          meta: {
            isAdmin: false,
          },
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/components/Login').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
})

router.beforeEach((to, from, next) => {

  const userInfo = store.getters.userInfo
  const isAdminRoute = to.matched.some(route => route.meta.isAdmin)

  if (!userInfo && to.path != '/login') {
    next({
      path: '/login',
      params: { nextUrl: to.fullPath }
  })
  } else if (isAdminRoute && userInfo.user_role !== constants.USER_ROLES.ADMIN ) {
    next(false)
  } else {
    next()
  }
})

export default router
