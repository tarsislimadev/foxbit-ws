import { WebSocketError } from '../../websocket/error.js'

export class UnsubscribeLevel1Error extends  WebSocketError   {
  Endpoint = 'UnsubscribeLevel1'
}
