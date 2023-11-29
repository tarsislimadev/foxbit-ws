import { WebSocketMessage } from '../../websocket/message.js'

import { TimeInForceEnum } from '../../utils/constants.js'

export class SendOrderMessage extends WebSocketMessage {
  Endpoint = 'SendOrder'

  constructor(
    Side,
    OrderType,
    InstrumentId,
    Quantity,
    AccountId,
    LimitPrice = null,
    TimeInForce = TimeInForceEnum.GTC,
    ClientOrderId = 0,
    OrderIdOCO = -1,
    UseDisplayQuantity = false,
    PegPriceType = null,
    OMSId = 1,
  ) {
    super()

    this.Payload = {
      OMSId,
      InstrumentId,
      AccountId,
      TimeInForce,
      ClientOrderId,
      OrderIdOCO,
      UseDisplayQuantity,
      Side,
      Quantity,
      OrderType,
      PegPriceType,
      LimitPrice
    }
  }
}
