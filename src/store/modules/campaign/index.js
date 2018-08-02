import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const initialState = {
  campaigns: [],
  newCampaign: {
    name: '',
    splashPage: '',
    group: '',
    wifi: '',
    campaignStartDate: '',
    campaignFinishDate: '',
    campaignStartTime: '',
    campaignFinishTime: '',
    acceptTerms: false,
    active: false
  }
}

export default {
  namespaced: true,

  state: initialState,

  getters,

  actions,

  mutations
}
