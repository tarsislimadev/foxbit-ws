import { WebSocketError } from '../../websocket/error.js'

export class GetOrderHistoryError extends  WebSocketError  {
  Endpoint = 'GetOrderHistory'
}
