import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import auth from './modules/auth'
import campaign from './modules/campaign'
import splashpage from './modules/splashpage'
import organization from './modules/organization'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state,
  getters,
  mutations,
  actions,

  modules: {
    auth,
    campaign,
    splashpage,
    organization
  }
})
