const { WebSocketMessage } = require('./message')

class WebAuthenticateUser extends WebSocketMessage {
  Endpoint = 'WebAuthenticateUser'
}

module.exports = { WebAuthenticateUser }
