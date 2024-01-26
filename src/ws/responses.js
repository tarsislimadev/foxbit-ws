
export class FoxbitResponse {
  Endpoint = ''
  Payload = ''
  SequenceNumber = ''
  MessageType = ''

  constructor(str) {
    this.fromString(str)
  }

  fromJSON({ m, i, n, o } = {}) {
    this.MessageType = m
    this.SequenceNumber = i
    this.Endpoint = n
    this.Payload = JSON.parse(o)
  }

  fromString(str = '') {
    this.fromJSON(JSON.parse(str))
  }

  toJSON() {
    const { Endpoint, Payload, SequenceNumber, MessageType, } = this
    return { Endpoint, Payload, SequenceNumber, MessageType, }
  }

  toString() {
    return JSON.stringify(this.toJSON())
  }
}

export class AuthenticateUserResponse extends FoxbitResponse {
  Endpoint = 'AuthenticateUser'
}

export class Authenticate2FAResponse extends FoxbitResponse {
  Endpoint = 'Authenticate2FA'
}

export class CancelAllOrdersResponse extends FoxbitResponse {
  Endpoint = 'CancelAllOrders'
}

export class CancelOrderResponse extends FoxbitResponse {
  Endpoint = 'CancelOrder'
}

export class GetAccountInfoResponse extends FoxbitResponse {
  Endpoint = 'GetAccountInfo'
}

export class GetAccountPositionsResponse extends FoxbitResponse {
  Endpoint = 'GetAccountPositions'
}

export class GetAccountTradesResponse extends FoxbitResponse {
  Endpoint = 'GetAccountTrades'
}

export class GetDepositTicketsResponse extends FoxbitResponse {
  Endpoint = 'GetDepositTickets'
}

export class GetInstrumentResponse extends FoxbitResponse {
  Endpoint = 'GetInstrument'
}

export class GetInstrumentsResponse extends FoxbitResponse {
  Endpoint = 'GetInstruments'
}

export class GetOpenOrdersResponse extends FoxbitResponse {
  Endpoint = 'GetOpenOrders'
}

export class GetOrderFeeResponse extends FoxbitResponse {
  Endpoint = 'GetOrderFee'
}

export class GetOrderHistoryResponse extends FoxbitResponse {
  Endpoint = 'GetOrderHistory'
}

export class GetOrderStatusResponse extends FoxbitResponse {
  Endpoint = 'GetOrderStatus'
}

export class GetProductsResponse extends FoxbitResponse {
  Endpoint = 'GetProducts'
}

export class GetL2SnapshotResponse extends FoxbitResponse {
  Endpoint = 'GetL2Snapshot'
}

export class GetTickerHistoryResponse extends FoxbitResponse {
  Endpoint = 'GetTickerHistory'
}

export class GetTradesHistoryResponse extends FoxbitResponse {
  Endpoint = 'GetTradesHistory'
}

export class GetUserInfoResponse extends FoxbitResponse {
  Endpoint = 'GetUserInfo'
}

export class GetUserPermissionsResponse extends FoxbitResponse {
  Endpoint = 'GetUserPermissions'
}

export class GetWithdrawTicketsResponse extends FoxbitResponse {
  Endpoint = 'GetWithdrawTickets'
}

export class LogoutResponse extends FoxbitResponse {
  Endpoint = 'Logout'
}

export class SendOrderResponse extends FoxbitResponse {
  Endpoint = 'SendOrder'
}

export class SubscribeAccountEventsResponse extends FoxbitResponse {
  Endpoint = 'SubscribeAccountEvents'
}

export class SubscribeLevel1Response extends FoxbitResponse {
  Endpoint = 'SubscribeLevel1'
}

export class SubscribeLevel1MarketsResponse extends FoxbitResponse {
  Endpoint = 'SubscribeLevel1Markets'
}

export class SubscribeLevel2Response extends FoxbitResponse {
  Endpoint = 'SubscribeLevel2'
}

export class SubscribeTickerResponse extends FoxbitResponse {
  Endpoint = 'SubscribeTicker'
}

export class SubscribeTradesResponse extends FoxbitResponse {
  Endpoint = 'SubscribeTrades'
}

export class UnsubscribeLevel1Response extends FoxbitResponse {
  Endpoint = 'UnsubscribeLevel1'
}

export class UnsubscribeLevel2Response extends FoxbitResponse {
  Endpoint = 'UnsubscribeLevel2'
}

export class UnsubscribeTickerResponse extends FoxbitResponse {
  Endpoint = 'UnsubscribeTicker'
}

export class UnsubscribeTradesResponse extends FoxbitResponse {
  Endpoint = 'UnsubscribeTrades'
}
