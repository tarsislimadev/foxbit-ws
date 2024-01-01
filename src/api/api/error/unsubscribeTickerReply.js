import { WebSocketError } from '../../websocket/error.js'

export class UnsubscribeTickerReplyError extends  WebSocketError   {
  Endpoint = 'UnsubscribeTickerReply'
}
