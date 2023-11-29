import { WebSocketMessage } from '../../websocket/message.js'

export class Authenticate2FAMessage extends WebSocketMessage {
  Endpoint = 'Authenticate2FA'
}
