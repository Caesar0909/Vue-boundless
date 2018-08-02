import * as types from './mutation-types'

const mutations = {

  [types.UPDATE_SPLASHPAGES] (state, splashPages) {
    state.splashPages = splashPages
  },

  [types.UPDATE_TEMPLATE_TYPE] (state, templateType) {
    state.selectedSplashTemplateType = templateType
  }

}

export default mutations
