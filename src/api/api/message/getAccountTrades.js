import { WebSocketMessage } from '../../websocket/message.js'

export class GetAccountTradesMessage extends WebSocketMessage {
  Endpoint = 'GetAccountTrades'
}
