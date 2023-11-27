const { Message } = require('../message')

class GetUserInfoMessage extends Message {
  Endpoint = 'GetUserInfo'
}

module.exports = { GetUserInfoMessage }
