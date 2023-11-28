import { Message } from '../message.js' 

export class GetAccountInfoMessage extends Message {
  Endpoint = 'GetAccountInfo'

  constructor(OMSId, AccountId) {
    super()

    this.Payload = { OMSId, AccountId }
  }
}
