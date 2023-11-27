const { Message } = require('../message')
const config = require('../../config')
const { createSignature } = require('../../utils')

class AuthenticateUserMessage extends Message {
  Endpoint = 'AuthenticateUser'

  constructor(UserId = config.user_id, APIKey = config.api_key, APISecret = config.api_secret, Nonce = Date.now()) {
    super()

    const Signature = createSignature(Nonce, UserId, APIKey, APISecret)

    this.Payload = { APIKey, Nonce, UserId, Signature }
  }
}

module.exports = { AuthenticateUserMessage }
