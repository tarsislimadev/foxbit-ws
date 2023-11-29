import { WebSocketMessenger } from './websocket/messenger.js'

export class FoxbitWS extends WebSocketMessenger {
  OMSId = null

  constructor({ url } = {}) {
    super({ url })

    this.setTimeout(1000)
  }

  setOMSId(OMSId) {
    this.OMSId = OMSId
    return this
  }

}
