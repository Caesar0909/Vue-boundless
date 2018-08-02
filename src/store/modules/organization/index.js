import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const initialState = {
  organizationOptions: {},
  organizations: [],
  selectedOrganization: {
    id: null
  },
  activityLogs: []
}

export default {
  namespaced: true,

  state: initialState,

  getters,

  actions,

  mutations
}
