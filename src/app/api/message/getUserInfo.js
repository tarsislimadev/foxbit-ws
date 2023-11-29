import { WebSocketMessage } from '../../websocket/message.js'

export class GetUserInfoMessage extends WebSocketMessage {
  Endpoint = 'GetUserInfo'
}
