const { Message } = require('../message')

class GetTickerHistoryMessage extends Message {
  Endpoint = 'GetTickerHistory'
}

module.exports = { GetTickerHistoryMessage }
