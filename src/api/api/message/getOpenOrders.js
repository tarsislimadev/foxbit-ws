import { WebSocketMessage } from '../../websocket/message.js'

export class GetOpenOrdersMessage extends WebSocketMessage {
  Endpoint = 'GetOpenOrders'
}
