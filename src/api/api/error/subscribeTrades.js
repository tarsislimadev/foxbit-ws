import { WebSocketError } from '../../websocket/error.js'

export class SubscribeTradesError extends  WebSocketError   {
  Endpoint = 'SubscribeTrades'
}
