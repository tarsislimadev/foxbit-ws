import { WebSocketError } from '../../websocket/error.js'

export class GetInstrumentsError extends  WebSocketError  {
  Endpoint = 'GetInstruments'
}
