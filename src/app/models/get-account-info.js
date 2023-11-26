const { WebSocketMessage } = require('./message')

class GetAccountInfo extends WebSocketMessage {
  Endpoint = 'GetAccountInfo'
}

module.exports = { GetAccountInfo }
