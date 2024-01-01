import { WebSocketError } from '../../websocket/error.js'

export class SubscribeLevel2Error extends  WebSocketError  {
  Endpoint = 'SubscribeLevel2'

  constructor(InstrumentId, MarketId = '', Depth = 0) {
    super()

    this.Payload = { InstrumentId, MarketId, Depth }
  }
}
