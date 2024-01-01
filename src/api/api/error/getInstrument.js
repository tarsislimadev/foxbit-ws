import { WebSocketError } from '../../websocket/error.js'

export class GetInstrumentError extends  WebSocketError  {
  Endpoint = 'GetInstrument'
}
