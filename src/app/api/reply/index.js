const { Message } = require('../message')

class AuthenticateUserReply extends Message {
  constructor(response) {
    super()

    this.fromMessage(response)
  }
}

module.exports = { AuthenticateUserReply }
