import { WebSocketMessage } from '../../websocket/message.js'

export class LogoutMessage extends WebSocketMessage  {
  Endpoint = 'Logout'
}
