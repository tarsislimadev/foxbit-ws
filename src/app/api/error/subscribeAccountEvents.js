import { WebSocketError } from '../../websocket/error.js'

export class SubscribeAccountEventsError extends  WebSocketError   {
  Endpoint = 'SubscribeAccountEvents'
}
