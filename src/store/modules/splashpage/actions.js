import apiService from '@/api/api.service'
import * as types from './mutation-types'

export const fetchSplashPages = ({ commit, dispatch, state }, task) => {
  return apiService.callApi(window.location.origin + '/static/data/splash_page_listing.json', 'get').then((response) => {
    commit(types.UPDATE_SPLASHPAGES, response.data)
  })
}

export const selectSplashTemplateType = ({ commit, dispatch, state }, templateType) => {
  commit(types.UPDATE_TEMPLATE_TYPE, templateType)
}
