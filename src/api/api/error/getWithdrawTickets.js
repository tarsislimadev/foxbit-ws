import { WebSocketError } from '../../websocket/error.js'

export class GetWithdrawTicketsError extends  WebSocketError  {
  Endpoint = 'GetWithdrawTickets'
}
