import { WebSocketError } from '../../websocket/error.js'

export class GetAccountInfoError extends  WebSocketError  {
  Endpoint = 'GetAccountInfo'
}
