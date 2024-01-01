import { WebSocketError } from '../../websocket/error.js'

export class UnsubscribeTickerError extends  WebSocketError   {
  Endpoint = 'UnsubscribeTicker'
}
