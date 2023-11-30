import { WebSocketError } from '../../websocket/error.js'

export class GetOrderStatusError extends  WebSocketError  {
  Endpoint = 'GetOrderStatus'
}
