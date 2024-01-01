import { WebSocketError } from '../../websocket/error.js'

export class CancelOrderError extends  WebSocketError  {
  Endpoint = 'CancelOrder'

  constructor(OrderId, AccountId, ClOrderId = 0, OMSId = 1) {
    super()

    this.Payload = { OrderId, AccountId, ClOrderId, OMSId }
  }
}
