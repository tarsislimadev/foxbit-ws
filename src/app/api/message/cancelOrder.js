import { WebSocketMessage } from '../../websocket/message.js'

export class CancelOrderMessage extends WebSocketMessage  {
  Endpoint = 'CancelOrder'
}
