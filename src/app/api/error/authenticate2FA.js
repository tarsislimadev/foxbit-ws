import { WebSocketError } from '../../websocket/error.js'

export class Authenticate2FAError extends  WebSocketError  {
  Endpoint = 'Authenticate2FA'
}
