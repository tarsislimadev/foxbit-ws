import { HTML, nFlex } from '@brtmvdl/frontend'

import { TextHTML } from '../text.js'

export class BodyMessage extends HTML {
  body = null

  constructor(body = null) {
    super()
    this.body = body
  }

  onCreate() {
    super.onCreate()
    this.setStyle('padding', '0rem 1rem 1rem 1rem')
  }
}

export class SocketBodyMessage extends BodyMessage {
  onCreate() {
    super.onCreate()
    this.setText(`Id: ${this.body.Id}`)
  }
}

export class AuthenticateUserBodyMessage extends BodyMessage {
  onCreate() {
    super.onCreate()
    this.append(new TextHTML(`Authenticated: ${this.body.Authenticated}`))
    this.append(new TextHTML(`TwoFAType: ${this.body.TwoFAType}`))
    this.append(new TextHTML(`UserId: ${this.body.User?.UserId}`))
    this.append(new TextHTML(`AccountId: ${this.body.User?.AccountId}`))
    this.append(new TextHTML(`OMSId: ${this.body.User?.OMSId}`))
  }
}

export class Authenticate2FABodyMessage extends BodyMessage { }

export class LogoutBodyMessage extends BodyMessage { }

export class SendOrderBodyMessage extends BodyMessage { }

export class CancelOrderBodyMessage extends BodyMessage { }

export class CancelAllOrdersBodyMessage extends BodyMessage { }

export class GetOpenOrdersBodyMessage extends BodyMessage { }

export class GetOrderFeeBodyMessage extends BodyMessage { }

export class GetOrderHistoryBodyMessage extends BodyMessage { }

export class GetOrderStatusBodyMessage extends BodyMessage { }

export class GetAccountInfoBodyMessage extends BodyMessage { }

export class GetAccountPositionsBodyMessage extends BodyMessage { }

export class GetAccountTradesBodyMessage extends BodyMessage { }

export class GetDepositTicketsBodyMessage extends BodyMessage { }

export class GetInstrumentBodyMessage extends BodyMessage { }

export class GetInstrumentsBodyMessage extends BodyMessage { }

export class GetProductsBodyMessage extends BodyMessage { }

export class GetL2SnapshotBodyMessage extends BodyMessage { }

export class GetTradesHistoryBodyMessage extends BodyMessage { }

export class GetUserInfoBodyMessage extends BodyMessage { }

export class GetUserPermissionsBodyMessage extends BodyMessage { }

export class GetWithdrawTicketsBodyMessage extends BodyMessage { }

export class GetTickerHistoryBodyMessage extends BodyMessage { }

export class SubscribeAccountEventsBodyMessage extends BodyMessage { }

export class SubscribeTickerBodyMessage extends BodyMessage { }

export class UnsubscribeTickerBodyMessage extends BodyMessage { }

export class SubscribeLevel1BodyMessage extends BodyMessage { }

export class SubscribeLevel1MarketsBodyMessage extends BodyMessage { }

export class UnsubscribeLevel1BodyMessage extends BodyMessage { }

export class SubscribeLevel2BodyMessage extends BodyMessage { }

export class UnsubscribeLevel2BodyMessage extends BodyMessage { }

export class SubscribeTradesBodyMessage extends BodyMessage {
  onCreate() {
    super.onCreate()
    this.append(this.getTable())
  }

  getTable() {
    const table = new HTML()
    const tr = new nFlex()
    getTradeHeaders().map((cell) => {
      const td = new HTML()
      td.setStyle('padding', 'calc(1rem / 4)')
      td.setText(cell)
      tr.append(td)
    })
    table.append(tr)
    Array.from(this.body).map((line) => {
      const tr = new nFlex()
      Array.from(line).map((cell) => {
        const td = new HTML()
        td.setStyle('padding', 'calc(1rem / 4)')
        td.setText(cell)
        tr.append(td)
      })
      table.append(tr)
    })
    return table
  }
}

export class UnsubscribeTradesBodyMessage extends BodyMessage { }

export class TradeDataUpdateEventBodyMessage extends BodyMessage { }

export const getTradeHeaders = () => Array.from(['TradeId', 'ProductPairCode', 'Quantity', 'Price', 'Order1', 'Order2', 'Tradetime', 'Direction', 'TakerSide', 'BlockTrade', 'order1ClientId'])
