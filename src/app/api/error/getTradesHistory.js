import { WebSocketError } from '../../websocket/error.js'

export class GetTradesHistoryError extends  WebSocketError  {
  Endpoint = 'GetTradesHistory'
}
