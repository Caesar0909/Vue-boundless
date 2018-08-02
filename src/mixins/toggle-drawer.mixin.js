let toggleDrawer = {
  methods: {
    toggleDrawer () {
      this.$store.commit('UPDATE_DRAWER', !this.drawer)
    }
  }
}

export default toggleDrawer
