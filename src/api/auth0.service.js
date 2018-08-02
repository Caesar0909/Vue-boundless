import Vue from 'vue'
import Auth0 from 'auth0-js'
import AUTH_CONFIG from '@/api/auth0.variables'
import router from '@/router/index'
import store from '@/store/index'

import {
  USER_SIGNUP_ERROR,
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_ERROR,
  USER_RESET_PASSWORD_ERROR,
  USER_RESET_PASSWORD_SUCCESS
} from '@/store/mutation-types'

const boundlessAccessToken = 'boundless_access_token'
const boundlessIdToken = 'boundless_id_token'
const boundlessExpiresAt = 'boundless_expires_at'
const boundlessCurrentUser = 'boundless_current_user'
const boundlessOriginOfDesiredRoute = 'boundless_origin_of_desired_route'
const boundlessDesiredRoute = 'boundless_desired_route'

export default class AuthService {
  authenticated = this.isAuthenticated()
  authNotifier = new Vue()

  webAuth = new Auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientID,
    redirectUri: AUTH_CONFIG.redirectUri,
    responseType: AUTH_CONFIG.responseType,
    scope: AUTH_CONFIG.scope
  })

  constructor () {
    this.signup = this.signup.bind(this)
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.resetPassword = this.resetPassword.bind(this)
    this.logout = this.logout.bind(this)
  }

  signup (username, email, password, userMetadata) {
    this.webAuth.signup({
      connection: AUTH_CONFIG.connection,
      username,
      email,
      password,
      user_metadata: userMetadata
    }, (err, resp) => {
      if (err) {
        store.commit(USER_SIGNUP_ERROR, {
          message: `${err.original.response.body.message || err.original.response.body.description}`,
          visible: true
        })
      } else {
        store.commit(USER_SIGNUP_SUCCESS, {
          message: 'User successfully created',
          visible: true
        })
      }
    })
  }

  login (username, password) {
    this.webAuth.client.login({
      connection: AUTH_CONFIG.connection,
      realm: AUTH_CONFIG.connection,
      username,
      password
    }, (err, authResult) => {
      if (err) {
        store.commit(USER_LOGIN_ERROR, {
          message: `${err.description}`,
          visible: true
        })
      } else {
        this.verifyUserProfile(authResult)
      }
    })
  }

  setSession (authResult) {
    let expiresAt = JSON.stringify(authResult.expiresIn * 1e3 + new Date().getTime())
    localStorage.setItem(boundlessAccessToken, authResult.accessToken)
    localStorage.setItem(boundlessIdToken, authResult.idToken)
    localStorage.setItem(boundlessExpiresAt, expiresAt)
    this.authNotifier.$emit('authChange', { authenticated: true })
  }

  isAuthenticated () {
    let expiresAt = JSON.parse(localStorage.getItem(boundlessExpiresAt))
    return new Date().getTime() < expiresAt
  }

  resetPassword (email) {
    this.webAuth.changePassword({
      connection: AUTH_CONFIG.connection,
      client_id: AUTH_CONFIG.clientID,
      email
    }, (err, authResult) => {
      if (err) {
        store.commit(USER_RESET_PASSWORD_ERROR, {
          message: `${err.data}`,
          visible: true
        })
      } else {
        store.commit(USER_RESET_PASSWORD_SUCCESS, {
          message: `${authResult} If you didn't receive the email it's most likely because you mistyped the email address`,
          visible: true
        })
      }
    })
  }

  logout () {
    localStorage.removeItem(boundlessAccessToken)
    localStorage.removeItem(boundlessIdToken)
    localStorage.removeItem(boundlessExpiresAt)
    localStorage.removeItem(boundlessCurrentUser)
    localStorage.removeItem(boundlessDesiredRoute)
    localStorage.removeItem(boundlessOriginOfDesiredRoute)
    this.authNotifier.$emit('authChange', false)
    router.replace('/')
  }
}
