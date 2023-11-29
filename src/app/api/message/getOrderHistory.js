import { WebSocketMessage } from '../../websocket/message.js'

export class GetOrderHistoryMessage extends WebSocketMessage {
  Endpoint = 'GetOrderHistory'
}
