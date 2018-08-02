import Vue from 'vue'

import * as types from './mutation-types'

const mutations = {

  [types.UPDATE_ORGANIZATION_OPTIONS] (state, organizationOptions) {
    state.organizationOptions = organizationOptions
  },

  [types.UPDATE_ORGANIZATIONS] (state, organizations) {
    state.organizations = organizations
  },

  [types.UPDATE_ORG_IN_LIST] (state, updatedOrg) {
    const orgIndex = state.organizations.findIndex(org => org.id === updatedOrg.id)
    // Update the org in the organizations list
    Vue.set(state.organizations, orgIndex, updatedOrg)
  },

  [types.SELECT_ORGANIZATION] (state, organization) {
    state.selectedOrganization = organization
  },

  [types.UPDATE_ACTIVITY_LOGS] (state, activityLogs) {
    state.activityLogs = activityLogs
  }

}

export default mutations
