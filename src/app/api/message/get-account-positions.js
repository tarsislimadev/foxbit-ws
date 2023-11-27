const { Message } = require('../message')

class GetAccountPositionsMessage extends Message {
  Endpoint = 'GetAccountPositions'

  constructor(AccountId, OMSId) {
    super()

    this.Payload = { OMSId, AccountId }
  }
}

module.exports = { GetAccountPositionsMessage }
