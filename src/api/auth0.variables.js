let AUTH_CONFIG = {
  domain: 'web-components.eu.auth0.com',
  connection: 'Username-Password-Authentication',
  clientID: 'AFp7g9bf4QEGx471TuUaLF2hT0pHOZ9I',
  redirectUri: `${window.location.origin}/callback`,
  audience: 'https://web-components.eu.auth0.com/userinfo',
  responseType: 'token id_token',
  scope: 'openid email profile user_metadata'
}

if (process.env.NODE_ENV === 'development') {
  AUTH_CONFIG = {
    domain: 'web-components.eu.auth0.com',
    connection: 'Username-Password-Authentication',
    clientID: 'ahowbiVwab3sNDiPtGOdb00cn0R46Tcp',
    redirectUri: `http://localhost:8080/callback/`,
    audience: 'https://web-components.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid email profile user_metadata'
  }
}

export default AUTH_CONFIG
