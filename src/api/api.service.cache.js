import Config from '@/utils/app.config.js'
import request from 'axios'
import localforage from 'localforage'

request.defaults.baseURL = Config.wpDomain

const cacheService = {
  store: '',
  storeCacheTime: '',
  currentTime: '',
  isBrowser: false,
  networkFirstStrategy: (requestOptions, cacheTime) => {
    return new Promise((resolve, reject) => {
      request(requestOptions)
        .then((response) => {
          // Response returned, cache it and return it
          if (response.status === 200) {
            if (cacheService.isBrowser) {
              cacheService.storeCacheTime.setItem(requestOptions.url || requestOptions, cacheService.currentTime + cacheTime)
              cacheService.store.setItem(requestOptions.url || requestOptions, {
                data: response.data,
                headers: response.headers
              })
                .then((response) => {
                  resolve(response)
                })
                .catch((err) => reject(err))
            } else {
              resolve(response)
            }
          } else {
            if (cacheService.isBrowser) {
              cacheService.store.getItem(requestOptions.url)
                .then((response) => {
                  resolve(response)
                })
                .catch((err) => reject(err))
            } else {
              console.log('Cannot get ' + requestOptions.url)
            }
          }
        }).catch(error => {
          console.log(error)
        })
    })
  },
  offlineFirstStrategy: (requestOptions, cacheTime) => {
    return new Promise((resolve, reject) => {
      cacheService.storeCacheTime.getItem(requestOptions.url || requestOptions).then(function (timeLastCached) {
        // Cache has expired
        if (timeLastCached < cacheService.currentTime) {
          cacheService.networkFirstStrategy(requestOptions, cacheTime)
            .then((response) => {
              resolve(response)
            })
            .catch((err) => reject(err))
        } else {
          // Get item from cache
          cacheService.store.getItem(requestOptions.url || requestOptions)
            .then((response) => {
              if (response) {
                // Is in cache perfect!
                resolve(response)
              } else {
                // Doesn't exist in cache try network
                cacheService.networkFirstStrategy(requestOptions.url, cacheTime)
                  .then((response) => {
                    resolve(response)
                  })
                  .catch((err) => reject(err))
              }
            })
            .catch((error) => {
              console.log(error)
              // Doesn't exist in cache try network
              cacheService.networkFirstStrategy(requestOptions.url, cacheTime)
                .then((response) => resolve(response))
                .catch((err) => reject(err))
            })
        }
      }).catch((error) => {
        console.log(error)
        // Doesn't exist in cache timeouts try network
        cacheService.networkFirstStrategy(requestOptions.url, cacheTime)
          .then((response) => resolve(response))
          .catch((err) => reject(err))
      })
    })
  },
  get: function (requestOptions, cacheTime) {
    return new Promise((resolve, reject) => {
      cacheService.currentTime = Math.floor(Date.now() / 1000)
      cacheService.isBrowser = (typeof window !== 'undefined')
      if (cacheService.isBrowser) {
        cacheService.store = localforage.createInstance({
          name: Config.loadDbName
        })
        cacheService.storeCacheTime = localforage.createInstance({
          name: Config.loadDbName + '_CacheTime'
        })
      }
      if (!cacheTime || cacheTime === 0) {
        cacheService.networkFirstStrategy(requestOptions, 0)
          .then(response => {
            resolve(response || '')
          })
          .catch((err) => {
            reject(err)
          })
      } else {
        cacheService.offlineFirstStrategy(requestOptions, cacheTime)
          .then(response => {
            resolve(response || '')
          })
          .catch((err) => reject(err))
      }
    })
  }
}

export default cacheService
