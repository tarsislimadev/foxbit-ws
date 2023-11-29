import { WebSocketMessage } from '../../websocket/message.js'

export class UnsubscribeTickerMessage extends WebSocketMessage  {
  Endpoint = 'UnsubscribeTicker'
}
