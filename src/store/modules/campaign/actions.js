import apiService from '@/api/api.service'
import * as types from './mutation-types'

export const fetchCampaigns = ({ commit, dispatch, state }, task) => {
  return apiService.callApi(window.location.origin + '/static/data/campaign_listing.json', 'get').then((response) => {
    commit(types.UPDATE_CAMPAIGNS, response.data)
  })
}
