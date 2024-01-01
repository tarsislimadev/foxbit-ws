import { WebSocketMessage } from '../../websocket/message.js'

export class GetTradesHistoryMessage extends WebSocketMessage {
  Endpoint = 'GetTradesHistory'
}
