import * as types from './mutation-types'

export default {
  [types.UPDATE_USER_DETAILS]: (state, user) => {
    state.currentUser = user.profile
    state.currentUser.email = user.email
  },
  [types.USER_SIGNUP_ERROR]: (state, serverRegistrationErrorMessage) => {
    state.serverRegistrationErrorMessage = serverRegistrationErrorMessage
  },
  [types.USER_SIGNUP_SUCCESS]: (state, serverRegistrationSuccessMessage) => {
    state.serverRegistrationSuccessMessage = serverRegistrationSuccessMessage
  },
  [types.USER_LOGIN_ERROR]: (state, serverLoginErrorMessage) => {
    state.serverLoginErrorMessage = serverLoginErrorMessage
  },
  [types.USER_RESET_PASSWORD_ERROR]: (state, serverResetPassErrorMessage) => {
    state.serverResetPassErrorMessage = serverResetPassErrorMessage
  },
  [types.USER_RESET_PASSWORD_SUCCESS]: (state, serverResetPassSuccessMessage) => {
    state.serverResetPassSuccessMessage = serverResetPassSuccessMessage
  },
  [types.USER_RESET_PASSWORD_RESULT]: (state, passwordResetResult) => {
    state.passwordResetResult = passwordResetResult
  },
  [types.UPDATE_GROUP_SITE_STRUCTURE]: (state, groupAndSiteFileStructure) => {
    state.groupAndSiteFileStructure = groupAndSiteFileStructure
  },
  [types.UPDATE_TAGS_MENU]: (state, tagsMenu) => {
    state.tagsMenu = tagsMenu
  },
  [types.UPDATE_EQUIPMENT_DETAILS]: (state, equipmentDetails) => {
    state.equipmentDetails = equipmentDetails
  },
  [types.UPDATE_MOVE_MENU]: (state, moveMenu) => {
    state.moveMenu = moveMenu
  },
  [types.UPDATE_DRAWER]: (state, drawer) => {
    state.drawer = drawer
  },
  [types.UPDATE_NOTIFICATION_PANEL]: (state, notificationPanel) => {
    state.notificationPanel = notificationPanel
  },
  [types.UPDATE_ORGANIZATIONS]: (state, organizations) => {
    state.organizations = organizations
  },
  [types.UPDATE_WIFI_AUTHORIZATION_LISTING]: (state, wifiAuthorizationListing) => {
    state.wifiAuthorizationListing = wifiAuthorizationListing
  },
  [types.UPDATE_DEVICES]: (state, devices) => {
    state.devices = devices
  },
  [types.UPDATE_USERS]: (state, users) => {
    state.users = users
  },
  [types.UPDATE_COUNTRIES]: (state, countries) => {
    state.countries = countries
  },
  [types.UPDATE_MENU]: (state, menu) => {
    state.menu = menu
  },
  [types.UPDATE_IS_MOBILE]: (state, isMobile) => {
    state.isMobile = !!isMobile
  },
  [types.UPDATE_POUNTER_IS_TOUCH]: (state, isTouch) => {
    state.pointerIsTouch = !!isTouch
  },
  [types.UPDATE_WINDOW_SIZE]: (state, windowSize) => {
    state.windowSize = windowSize
  },
  [types.UPDATE_ACTIVITY_INDICATOR]: (state, showActivityIndicator) => {
    state.showActivityIndicator = showActivityIndicator
  }
}
