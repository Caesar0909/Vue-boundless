import * as types from './mutation-types'

const mutations = {

  [types.UPDATE_CAMPAIGNS] (state, campaigns) {
    state.campaigns = campaigns
  }

}

export default mutations
