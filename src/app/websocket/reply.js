import { WebSocketMessage } from './message.js'

export class WebSocketReply extends WebSocketMessage {
  constructor(response) {
    super()

    this.fromMessage(response)
  }

  toJSON() {
    const { MessageType, SequenceNumber, Endpoint, Payload } = this

    return { MessageType, SequenceNumber, Endpoint, Payload }
  }
}
