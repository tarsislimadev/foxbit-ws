import { WebSocketMessage } from '../../websocket/message.js'

export class GetProductsMessage extends WebSocketMessage {
  Endpoint = 'GetProducts'
}
