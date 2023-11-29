import { WebSocketMessage } from '../../websocket/message.js'

export class SubscribeTradesMessage extends WebSocketMessage  {
  Endpoint = 'SubscribeTrades'
}
