import { Message } from '../message.js' 

export class GetAccountPositionsMessage extends Message {
  Endpoint = 'GetAccountPositions'

  constructor(AccountId, OMSId) {
    super()

    this.Payload = { OMSId, AccountId }
  }
}
