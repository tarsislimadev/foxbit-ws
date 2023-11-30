import { WebSocketError } from '../../websocket/error.js'

export class GetAccountTradesError extends  WebSocketError  {
  Endpoint = 'GetAccountTrades'
}
