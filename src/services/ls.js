export default {
  get (key) {
    return localStorage.getItem(key)
  },

  set (key, val) {
    localStorage.setItem(key, val)
  },

  remove (key) {
    localStorage.removeItem(key)
  }
}
