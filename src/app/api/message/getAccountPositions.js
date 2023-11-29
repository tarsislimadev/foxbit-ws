import { WebSocketMessage } from '../../websocket/message.js'

export class GetAccountPositionsMessage extends WebSocketMessage {
  Endpoint = 'GetAccountPositions'
}
