import Vue from 'vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n/i18n'
import {sync} from 'vuex-router-sync'

import App from './App'

import './bootstrap'

sync(store, router)

/* eslint-disable no-new */
let root = new Vue(Vue.util.extend({router, store, i18n}, App))

document.addEventListener('DOMContentLoaded', () => root.$mount('#app'))
