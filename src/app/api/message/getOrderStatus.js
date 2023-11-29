import { WebSocketMessage } from '../../websocket/message.js'

export class GetOrderStatusMessage extends WebSocketMessage {
  Endpoint = 'GetOrderStatus'
}
