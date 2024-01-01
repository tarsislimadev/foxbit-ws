import { WebSocketError } from '../../websocket/error.js'

export class CancelAllOrdersError extends  WebSocketError  {
  Endpoint = 'CancelAllOrders'

  constructor(IntrumentId) {
    super()

    this.Payload = { IntrumentId }
  }
}
