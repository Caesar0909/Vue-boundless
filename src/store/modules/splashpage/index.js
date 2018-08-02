import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const initialState = {
  splashPages: [],
  splashTemplateTypes: [
    {id: 1, icon: 'fas fa-code', title: 'splash.importHtml'},
    {id: 2, icon: 'fas fa-download', title: 'splash.importZip'},
    {id: 3, icon: 'fas fa-columns', title: 'splash.chooseTemplate'},
    {id: 4, icon: 'fas fa-file', title: 'splash.chooseTheme'},
    {id: 5, icon: 'fas fa-bars', title: 'splash.projectMode'},
    {id: 6, icon: 'fas fa-cloud', title: 'splash.connectApi'}
  ],
  selectedSplashTemplateType: {id: null}
}

export default {
  namespaced: true,

  state: initialState,

  getters,

  actions,

  mutations
}
