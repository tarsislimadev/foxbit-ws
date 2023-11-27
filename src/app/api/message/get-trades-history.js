const { Message } = require('../message')

class GetTradesHistoryMessage extends Message {
  Endpoint = 'GetTradesHistory'
}

module.exports = { GetTradesHistoryMessage }
