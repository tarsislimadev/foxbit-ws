import { WebSocketError } from '../../websocket/error.js'

export class GetAccountPositionsError extends  WebSocketError  {
  Endpoint = 'GetAccountPositions'
}
