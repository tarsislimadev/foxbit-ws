import { WebSocketMessenger } from './websocket/messenger.js'
import { WebSocketMessage } from './websocket/message.js'

export class FoxbitWS extends WebSocketMessenger {
  OMSId = null

  SequenceNumber = 0

  constructor({ url } = {}) {
    super({ url })
    this.setTimeout(1000)
  }

  setOMSId(OMSId) {
    this.OMSId = OMSId
    return this
  }

  send(message = new WebSocketMessage()) {
    message.SequenceNumber = ++this.SequenceNumber
    super.send(message)
  }
}
