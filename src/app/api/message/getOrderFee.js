import { WebSocketMessage } from '../../websocket/message.js'

export class GetOrderFeeMessage extends WebSocketMessage {
  Endpoint = 'GetOrderFee'
}
