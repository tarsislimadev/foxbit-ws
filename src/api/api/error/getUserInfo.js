import { WebSocketError } from '../../websocket/error.js'

export class GetUserInfoError extends  WebSocketError  {
  Endpoint = 'GetUserInfo'
}
