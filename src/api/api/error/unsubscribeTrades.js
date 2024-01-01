import { WebSocketError } from '../../websocket/error.js'

export class UnsubscribeTradesError extends  WebSocketError   {
  Endpoint = 'UnsubscribeTrades'
}
