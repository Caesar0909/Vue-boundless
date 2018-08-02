import * as types from './mutation-types'

const mutations = {

  [types.AUTH_SUCCESS] (state, token) {
    state.token = token
    state.status = 'success'
  },

  [types.AUTH_LOGOUT] (state) {
    state.token = null
  },

  [types.AUTH_ERROR] (state) {
    state.token = 'token'
    state.status = 'error'
  }

}

export default mutations
