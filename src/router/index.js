import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

// Layouts
// ----------------------------------
import LayoutLogin from '@/components/layouts/layout-login'
import LayoutOrganization from '@/components/layouts/layout-organization'
import LayoutSidebar from '@/components/layouts/layout-sidebar'

// Users
// ----------------------------------
import UserProfile from '@/components/user/profile'

import PageNotFound from '@/components/pages/page-not-found'

// Routes
// ----------------------------------
import AuthRoutes from './auth'
import OrganizationRoutes from './organization'

import Home from '@/components/pages/Home'

import Ls from '@/services/ls'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      component: LayoutLogin,
      children: [
        ...AuthRoutes
      ]
    },
    {
      path: '/',
      component: LayoutSidebar,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/profile',
          name: 'UserProfile',
          component: UserProfile
        },
        {
          path: ':orgId',
          component: LayoutOrganization,
          children: [
            ...OrganizationRoutes
          ]
        }
      ]
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const vuexStore = store
  if (!vuexStore.getters['auth/isAuthenticated']) {
    // Redirect to login when unauthenticated user
    if (to.matched.some(m => m.meta.requiresAuth)) {
      return next({name: 'login'})
    } else if (to.path === '/') {
      // This is necessary since auth urls match path `/`
      // so we'll redirect it to login page
      return next({name: 'login'})
    }
  } else {
    if (to.path === '/') {
      const orgId = Number.parseInt(Ls.get('organization'))
      if (orgId && vuexStore.dispatch['organization/hasOrganization']) {
        // Redirect to appropriate org url
        return next({name: 'OrganizationHome', params: {orgId: orgId}})
      } else if (!to.name) {
        // Check if `to.name` is undefined, this means that the user
        // visits directly the home page by inputting the url
        // in the address bar.  Checking the name first avoids
        // infinite loop of redirection
        return next({name: 'Home'})
      }
    }
  }
  return next()
})

export default router
