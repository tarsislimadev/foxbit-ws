import { WebSocketMessage } from '../../websocket/message.js'

export class GetTickerHistoryMessage extends WebSocketMessage {
  Endpoint = 'GetTickerHistory'
}
