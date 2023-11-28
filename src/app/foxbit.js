import { WebSocketMessenger } from './messenger.js'

export class FoxbitWS extends WebSocketMessenger {
  OMSId = null

  setOMSId(OMSId) {
    this.OMSId = OMSId
    return this
  }

}
