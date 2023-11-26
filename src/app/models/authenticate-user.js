const { WebSocketMessage } = require('./message')

class AuthenticateUser extends WebSocketMessage {
  Endpoint = 'AuthenticateUser'

  constructor(email, password) {
    super()

    this.Payload = { email, password }
  }
}

module.exports = { AuthenticateUser }
