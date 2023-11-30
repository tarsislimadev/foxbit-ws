import { WebSocketError } from '../../websocket/error.js'

export class SubscribeTickerError extends  WebSocketError   {
  Endpoint = 'SubscribeTicker'
}
