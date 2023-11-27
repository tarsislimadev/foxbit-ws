const { Message } = require('../message')

class GetAccountInfoMessage extends Message {
  Endpoint = 'GetAccountInfo'

  constructor(OMSId, AccountId) {
    super()

    this.Payload = { OMSId, AccountId }
  }
}

module.exports = { GetAccountInfoMessage }
