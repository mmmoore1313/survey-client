import auth0 from 'auth-js'
import history from './history'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'webapp1.auth0.com',
    clientID: '',
    redirectUri: 'h'
  })
}
