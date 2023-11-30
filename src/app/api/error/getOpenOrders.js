import { WebSocketError } from '../../websocket/error.js'

export class GetOpenOrdersError extends  WebSocketError  {
  Endpoint = 'GetOpenOrders'
}
