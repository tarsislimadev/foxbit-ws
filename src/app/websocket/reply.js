import { WebSocketMessage } from './message.js'

export class WebSocketReply extends WebSocketMessage {
  constructor(response) {
    super()

    this.fromMessage(response)
  }
}
