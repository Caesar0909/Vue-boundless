let toggleNotificationPanel = {
  methods: {
    toggleNotificationPanel () {
      this.$store.commit('UPDATE_NOTIFICATION_PANEL', !this.notificationPanel)
    }
  }
}

export default toggleNotificationPanel
