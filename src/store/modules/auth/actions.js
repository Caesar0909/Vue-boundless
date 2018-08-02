import * as types from './mutation-types'
import axios from 'axios'
import Ls from '@/services/ls'
import router from '@/router'

const API_URL = process.env.API_URL

export const login = ({ commit, dispatch, state }, data) => {
  return new Promise((resolve, reject) => {
    axios.post(API_URL + '/signin/', data).then((response) => {
      let token = response.data.data.token
      Ls.set('auth.token', token)
      commit(types.AUTH_SUCCESS, token)
      resolve(response)
    }).catch(err => {
      commit(types.AUTH_ERROR, err)
      Ls.remove('auth.token')
      reject(err)
    })
  })
}

export const logout = ({ commit, dispatch, state }, user) => {
  return new Promise((resolve, reject) => {
    commit(types.AUTH_LOGOUT)
    Ls.remove('auth.token')
    router.replace({name: 'login'})
    resolve()
  })
}

export const signup = ({ commit, dispatch, state }, data) => {
  return new Promise((resolve, reject) => {
    axios.post(API_URL + '/signup/', data).then((response) => {
      let token = response.data.data.token
      Ls.set('auth.token', token)

      // We remove `organization` from local storage
      // because this org may be from another user
      // and we don't want it to be loaded when the user
      // first signed up.
      Ls.remove('organization')

      commit(types.AUTH_SUCCESS, token)
      resolve(response)
    }).catch(err => {
      commit(types.AUTH_ERROR, err)
      Ls.remove('auth.token')
      reject(err)
    })
  })
}

export const sendResetLink = ({ commit, dispatch, state }, data) => {
  return new Promise((resolve, reject) => {
    axios.post(API_URL + '/signin/send-reset-email/', data).then((response) => {
      console.log(response)
      resolve(response)
    }).catch(err => {
      reject(err)
    })
  })
}

export const resetPassword = ({ commit, dispatch, state }, data) => {
  return new Promise((resolve, reject) => {
    axios.post(API_URL + '/signin/reset/', data).then((response) => {
      console.log(response)
      resolve(response)
    }).catch(err => {
      reject(err)
    })
  })
}
