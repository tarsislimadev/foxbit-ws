import { WebSocketError } from '../../websocket/error.js'

export class UnsubscribeLevel2Error extends  WebSocketError   {
  Endpoint = 'UnsubscribeLevel2'
}
