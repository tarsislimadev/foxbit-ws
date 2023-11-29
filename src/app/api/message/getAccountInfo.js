import { WebSocketMessage } from '../../websocket/message.js'

export class GetAccountInfoMessage extends WebSocketMessage {
  Endpoint = 'GetAccountInfo'
}
