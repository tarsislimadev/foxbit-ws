const { Message } = require('../message.js')
const config = require('../../config.js')
const { createSignature } = require('../../utils.js')

class AuthenticateUserMessage extends Message {
  Endpoint = 'AuthenticateUser'

  constructor(UserId = config.user.id) {
    super()

    const APIKey = config.api.key
    const Nonce = Date.now()
    const Signature = createSignature(Nonce, config.user.id, APIKey, config.api.secret)

    this.Payload = { APIKey, Nonce, UserId, Signature }
  }
}

module.exports = { AuthenticateUserMessage }
