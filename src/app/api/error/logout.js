import { WebSocketError } from '../../websocket/error.js'

export class LogoutError extends  WebSocketError   {
  Endpoint = 'Logout'
}
