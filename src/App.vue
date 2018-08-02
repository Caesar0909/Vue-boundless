<template lang='pug'>
  router-view(:auth="auth", :authenticated="authenticated")
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {stopZoomingWhenDoubleTapped} from './utils/functions'
import PieceLabelChart from 'chart.piecelabel.js'

import AuthService from './api/auth0.service'

const auth = new AuthService()
const {login, logout, authenticated, authNotifier} = auth

export default {
  name: 'Main',

  components: {
    PieceLabelChart
  },

  mounted () {
    this.setIsMobile()

    this.setPointerIsTouch('ontouchstart' in window)

    if (this.pointerIsTouch) {
      stopZoomingWhenDoubleTapped()
    }

    this.setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })

    window.addEventListener('resize', () => {
      clearTimeout(this.debounceWindowResize)
      this.debounceWindowResize = setTimeout(() => {
        this.setIsMobile()
        this.setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }, 1e3)
    })
  },

  data () {
    authNotifier.$on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },

  computed: {
    ...mapGetters(['isMobile', 'pointerIsTouch', 'showActivityIndicator'])
  },

  methods: {
    ...mapActions(['setIsMobile', 'setWindowSize', 'setPointerIsTouch']),
    stopActivityIndicator () {
      this.$store.commit('UPDATE_ACTIVITY_INDICATOR', false)
    },
    login,
    logout
  }
}
</script>

<style lang="sass">
  .table-container
    width: 100%
</style>
