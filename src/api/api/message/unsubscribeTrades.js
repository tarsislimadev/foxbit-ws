import { WebSocketMessage } from '../../websocket/message.js'

export class UnsubscribeTradesMessage extends WebSocketMessage  {
  Endpoint = 'UnsubscribeTrades'
}
