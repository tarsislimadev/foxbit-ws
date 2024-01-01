import { WebSocketMessage } from '../../websocket/message.js'

export class CancelAllOrdersMessage extends WebSocketMessage {
  Endpoint = 'CancelAllOrders'
}
