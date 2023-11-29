import { WebSocketMessage } from '../../websocket/message.js'

export class SubscribeTickerMessage extends WebSocketMessage  {
  Endpoint = 'SubscribeTicker'
}
