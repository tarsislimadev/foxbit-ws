const { Message } = require('../message')

class GetOrderHistoryMessage extends Message {
  Endpoint = 'GetOrderHistory'
}

module.exports = { GetOrderHistoryMessage }
