import { HTML, nFlex, nTable, nTr, nTd } from '@brtmvdl/frontend'
import { getInstrumentsList } from '../../lists.js'
import { TextHTML } from '../text.js'

export class BodyMessage extends HTML {
  body = null
  side = null

  constructor(body = null, side = null) {
    super()
    this.body = body
    this.side = side
  }

  onCreate() {
    super.onCreate()
    this.setStyle('padding', '0rem 1rem 1rem 1rem')
    this.append(this.side == 'input' ? this.onInput() : this.onOutput())
  }

  onInput() {
    return new HTML()
  }

  onOutput() {
    return new HTML()
  }
}

export class SocketBodyMessage extends BodyMessage {
  onCreate() {
    super.onCreate()
    this.setText(`Id: ${this.body.Id}`)
  }
}

export class AuthenticateUserBodyMessage extends BodyMessage {
  onOutput() {
    const html = new HTML()
    html.append(new TextHTML(`Authenticated: ${this.body.Authenticated}`))
    html.append(new TextHTML(`TwoFAType: ${this.body.TwoFAType}`))
    html.append(new TextHTML(`UserId: ${this.body.User?.UserId}`))
    html.append(new TextHTML(`AccountId: ${this.body.User?.AccountId}`))
    html.append(new TextHTML(`OMSId: ${this.body.User?.OMSId}`))
    return html
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

export class GetInstrumentsBodyMessage extends BodyMessage {
  onOutput() {
    const table = new nTable()
    const th = new nTr()
    Object.keys(this.body[0]).map((cell) => {
      const td = new nTd()
      td.setStyle('padding', 'calc(1rem / 4)')
      td.setText(cell)
      th.append(td)
    })
    table.append(th)
    Array.from(this.body).map((line) => {
      const tr = new nTr()
      Object.keys(line).map((cell, ix) => {
        const td = new nTd()
        td.setStyle('padding', 'calc(1rem / 4)')
        td.setText(line[cell])
        tr.append(td)
      })
      table.append(tr)
    })
    return table
  }
}

export class GetProductsBodyMessage extends BodyMessage {
  onOutput() {
    const table = new nTable()
    const th = new nTr()
    Object.keys(this.body[0]).map((cell) => {
      const td = new nTd()
      td.setStyle('padding', 'calc(1rem / 4)')
      td.setText(cell)
      th.append(td)
    })
    table.append(th)
    Array.from(this.body).map((line) => {
      const tr = new nTr()
      Object.keys(line).map((cell, ix) => {
        const td = new nTd()
        td.setStyle('padding', 'calc(1rem / 4)')
        td.setText(line[cell])
        tr.append(td)
      })
      table.append(tr)
    })
    return table
  }
}

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
  onOutput() {
    const table = new nTable()
    const tr = new nTr()
    getTradeHeaders().map((cell) => {
      const td = new nTd()
      td.setStyle('padding', 'calc(1rem / 4)')
      td.setText(cell)
      tr.append(td)
    })
    table.append(tr)
    Array.from(this.body).map((line) => {
      const tr = new nTr()
      Array.from(line).map((cell, ix) => {
        const td = new nTd()
        td.setStyle('padding', 'calc(1rem / 4)')
        let text = cell
        if (ix == 1) text = this.getInstrumentName(cell)
        else if (ix == 7) text = this.getDirection(cell)
        else if (ix == 8) text = this.getTakerSide(cell)
        td.setText(text)
        tr.append(td)
      })
      table.append(tr)
    })
    return table
  }

  getInstrumentName(text) {
    return getInstrumentsList().find(({ InstrumentId }) => +InstrumentId == +text).Symbol
  }

  getDirection(text) {
    return Array.from(['NoChange', 'UpTick', 'DownTick'])[+text]
  }

  getTakerSide(text) {
    return Array.from(['Buy', 'Sell'])[+text]
  }
}

export class UnsubscribeTradesBodyMessage extends BodyMessage { }

export class TradeDataUpdateEventBodyMessage extends SubscribeTradesBodyMessage { }

export const getTradeHeaders = () => Array.from(['TradeId', 'ProductPairCode', 'Quantity', 'Price', 'Order1', 'Order2', 'Tradetime', 'Direction', 'TakerSide', 'BlockTrade', 'order1ClientId'])
