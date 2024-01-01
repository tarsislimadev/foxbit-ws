import { WebSocketMessage } from '../../websocket/message.js'

export class GetUserPermissionsMessage extends WebSocketMessage {
  Endpoint = 'GetUserPermissions'
}
