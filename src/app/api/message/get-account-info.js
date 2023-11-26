const { Message } = require('../message')

class GetAccountInfo extends Message {
  Endpoint = 'GetAccountInfo'
}

module.exports = { GetAccountInfo }
