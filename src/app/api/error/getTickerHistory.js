import { WebSocketError } from '../../websocket/error.js'

export class GetTickerHistoryError extends  WebSocketError  {
  Endpoint = 'GetTickerHistory'
}
