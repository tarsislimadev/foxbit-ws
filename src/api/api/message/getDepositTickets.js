import { WebSocketMessage } from '../../websocket/message.js'

export class GetDepositTicketsMessage extends WebSocketMessage {
  Endpoint = 'GetDepositTickets'
}
