import { WebSocketMessage } from '../../websocket/message.js'

export class GetInstrumentMessage extends WebSocketMessage {
  Endpoint = 'GetInstrument'
}
