import { WebSocketError } from '../../websocket/error.js'

export class GetOrderFeeError extends  WebSocketError  {
  Endpoint = 'GetOrderFee'
}
