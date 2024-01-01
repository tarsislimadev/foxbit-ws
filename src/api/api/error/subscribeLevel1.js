import { WebSocketError } from '../../websocket/error.js'

export class SubscribeLevel1Error extends  WebSocketError  {
  Endpoint = 'SubscribeLevel1'

  constructor(InstrumentId, MarketId = '') {
    super()

    this.Payload = { InstrumentId, MarketId }
  }
}
