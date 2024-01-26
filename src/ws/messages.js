
let SequenceNumber = 0

export class FoxbitMessage {
  Endpoint = ''
  Payload = {}

  constructor(Payload = {}) { this.Payload = Payload }

  toJSON() {
    return { n: this.Endpoint, o: JSON.stringify(this.Payload), i: ++SequenceNumber, m: 0, }
  }

  toString() {
    return JSON.stringify(this.toJSON())
  }
}

export class AuthenticateUserMessage extends FoxbitMessage {
  Endpoint = 'AuthenticateUser'
}

export class Authenticate2FAMessage extends FoxbitMessage {
  Endpoint = 'Authenticate2FA'
}

export class CancelAllOrdersMessage extends FoxbitMessage {
  Endpoint = 'CancelAllOrders'
}

export class CancelOrderMessage extends FoxbitMessage {
  Endpoint = 'CancelOrder'
}

export class GetAccountInfoMessage extends FoxbitMessage {
  Endpoint = 'GetAccountInfo'
}

export class GetAccountPositionsMessage extends FoxbitMessage {
  Endpoint = 'GetAccountPositions'
}

export class GetAccountTradesMessage extends FoxbitMessage {
  Endpoint = 'GetAccountTrades'
}

export class GetDepositTicketsMessage extends FoxbitMessage {
  Endpoint = 'GetDepositTickets'
}

export class GetInstrumentMessage extends FoxbitMessage {
  Endpoint = 'GetInstrument'
}

export class GetInstrumentsMessage extends FoxbitMessage {
  Endpoint = 'GetInstruments'
}

export class GetOpenOrdersMessage extends FoxbitMessage {
  Endpoint = 'GetOpenOrders'
}

export class GetOrderFeeMessage extends FoxbitMessage {
  Endpoint = 'GetOrderFee'
}

export class GetOrderHistoryMessage extends FoxbitMessage {
  Endpoint = 'GetOrderHistory'
}

export class GetOrderStatusMessage extends FoxbitMessage {
  Endpoint = 'GetOrderStatus'
}

export class GetProductsMessage extends FoxbitMessage {
  Endpoint = 'GetProducts'
}

export class GetL2SnapshotMessage extends FoxbitMessage {
  Endpoint = 'GetL2Snapshot'
}

export class GetTickerHistoryMessage extends FoxbitMessage {
  Endpoint = 'GetTickerHistory'
}

export class GetTradesHistoryMessage extends FoxbitMessage {
  Endpoint = 'GetTradesHistory'
}

export class GetUserInfoMessage extends FoxbitMessage {
  Endpoint = 'GetUserInfo'
}

export class GetUserPermissionsMessage extends FoxbitMessage {
  Endpoint = 'GetUserPermissions'
}

export class GetWithdrawTicketsMessage extends FoxbitMessage {
  Endpoint = 'GetWithdrawTickets'
}

export class LogoutMessage extends FoxbitMessage {
  Endpoint = 'Logout'
}

export class SendOrderMessage extends FoxbitMessage {
  Endpoint = 'SendOrder'
}

export class SubscribeAccountEventsMessage extends FoxbitMessage {
  Endpoint = 'SubscribeAccountEvents'
}

export class SubscribeLevel1Message extends FoxbitMessage {
  Endpoint = 'SubscribeLevel1'
}

export class SubscribeLevel1MarketsMessage extends FoxbitMessage {
  Endpoint = 'SubscribeLevel1Markets'
}

export class SubscribeLevel2Message extends FoxbitMessage {
  Endpoint = 'SubscribeLevel2'
}

export class SubscribeTickerMessage extends FoxbitMessage {
  Endpoint = 'SubscribeTicker'
}

export class SubscribeTradesMessage extends FoxbitMessage {
  Endpoint = 'SubscribeTrades'
}

export class UnsubscribeLevel1Message extends FoxbitMessage {
  Endpoint = 'UnsubscribeLevel1'
}

export class UnsubscribeLevel2Message extends FoxbitMessage {
  Endpoint = 'UnsubscribeLevel2'
}

export class UnsubscribeTickerMessage extends FoxbitMessage {
  Endpoint = 'UnsubscribeTicker'
}

export class UnsubscribeTradesMessage extends FoxbitMessage {
  Endpoint = 'UnsubscribeTrades'
}
