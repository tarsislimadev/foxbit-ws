import { WebSocketMessage } from '../../websocket/message.js'

export class GetInstrumentsMessage extends WebSocketMessage {
  Endpoint = 'GetInstruments'
}
