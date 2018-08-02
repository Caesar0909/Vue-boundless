import Vue from 'vue'
import Vuetify from 'vuetify'
import VueTouch from 'vue-touch'
import Meta from 'vue-meta'
import colors from 'vuetify/es5/util/colors'
import Ls from '@/services/ls.js'
import store from './store'
import Vuelidate from 'vuelidate'

/**
 * Global Component Imports
 */

import baseSwitch from '@/components/common/base-switch'
import baseDialog from '@/components/common/base-dialog'

/**
 * CSS Imports
 */

import 'vuetify/dist/vuetify.min.css' // En
import 'toastr/build/toastr.min.css'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import '@/styles/main.scss'

/**
 * Globals
 */

global.axios = require('axios')
global.toastr = require('toastr')
global._ = require('lodash')

/**
 * Global Axios Request Interceptor
 */

global.axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  const AUTH_TOKEN = Ls.get('auth.token')

  if (AUTH_TOKEN) {
    config.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
  }

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

/**
 * Global Axios Response Interceptor
 */

global.axios.interceptors.response.use(undefined, function (err) {
  // Do something with request error
  return new Promise((resolve, reject) => {
    // Do not logout and redirect if the error code is present in the exemptedCodes
    const exemptedCodes = ['reset_token_invalid', 'wrong_credentials']

    if (err.response.status === 403 && err.config && !err.config.__isRetryRequest) {
      if (!exemptedCodes.includes(err.response.data.error.detail.code)) {
        console.log('NOT AUTHENTICATED')
        // Logout if you get Unauthorized
        store.dispatch('auth/logout')
        console.log('Unauthorized! Logging out.')
      }
    }
    throw err
  })
})

/**
 * Plugins
 */

Vue.use(Vuetify, {
  theme: {
    primary: '#4b83f0',
    secondary: '#3260D3',
    accent: colors.purple.base,
    error: '#EC5F59',
    warning: colors.orange.base,
    info: colors.yellow.base,
    success: '#62d862'
  }
})

Vue.use(VueTouch)
Vue.use(Meta)
Vue.use(Vuelidate)

Vue.config.productionTip = false

/**
 * Custom Directive
 */

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.event = function (event) {
      // here I check that click was outside the el and his childrens
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', el.event)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.event)
  }
})

/**
 * Register Global Components
 */

Vue.component('base-switch', baseSwitch)
Vue.component('base-dialog', baseDialog)
