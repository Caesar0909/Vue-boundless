import Config from '@/utils/app.config.js'
import appCache from './api.service.cache.js'

let apiService = {
  cacheRequest (path, cacheTime) {
    return new Promise((resolve, reject) => {
      appCache.get(path, cacheTime)
        .then(response => resolve(response))
        .catch((error) => reject(error))
    })
  },
  callApi (url, method) {
    let requestParams = {
      url,
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      timeout: 3e4
    }
    return new Promise((resolve, reject) => {
      this.cacheRequest(requestParams, Config.genericCachingTime)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
  }
}

export default apiService
