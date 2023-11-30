import { WebSocketError } from '../../websocket/error.js'

export class GetDepositTicketsError extends  WebSocketError  {
  Endpoint = 'GetDepositTickets'
}
