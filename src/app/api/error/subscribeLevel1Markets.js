import { WebSocketError } from '../../websocket/error.js'

export class SubscribeLevel1MarketsError extends  WebSocketError   {
  Endpoint = 'SubscribeLevel1Markets'
}
