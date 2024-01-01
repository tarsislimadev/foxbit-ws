import { WebSocketError } from '../../websocket/error.js'

export class GetUserPermissionsError extends  WebSocketError  {
  Endpoint = 'GetUserPermissions'
}
