import { WebSocketMessenger } from './messenger.js'
import { WebSocketMessage } from './message.js'

export class FoxbitWS extends WebSocketMessenger {
  OMSId = null

  SequenceNumber = 0

  constructor({ url, timeout } = {}) {
    super({ url })
    this.setTimeout(timeout)
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
