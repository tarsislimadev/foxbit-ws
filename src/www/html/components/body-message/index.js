import { HTML, nButton, nFlex, nTable, nTr, nTd } from '@brtmvdl/frontend'
import { getInstrumentsList, getProductsList } from '../../lists.js'
import { TextHTML } from '../text.js'

export class MessageActionButton extends nButton {
  text = ''
  action = (() => { })

  constructor(text, action = (() => { })) {
    super()
    this.text = text
    this.action = action
  }

  onCreate() {
    super.onCreate()
    this.setText(this.text)
    this.on('click', () => this.action())
  }
}

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
    if (typeof this.body == 'string') this.append(new TextHTML(`Error message: ${this.body}`))
    if (this.body.errormsg) {
      this.append(new TextHTML(`Error message: ${this.body.errormsg}`))
      this.append(new TextHTML(`Error code: ${this.body.errorcode}`))
      this.append(new TextHTML(`Error detail: ${this.body.detail}`))
    }
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
    if (this.body.Authenticated) {
      html.append(new TextHTML(`TwoFAType: ${this.body.TwoFAType}`))
      html.append(new TextHTML(`UserId: ${this.body.User?.UserId}`))
      html.append(new TextHTML(`AccountId: ${this.body.User?.AccountId}`))
      html.append(new TextHTML(`OMSId: ${this.body.User?.OMSId}`))
    }
    return html
  }
}

export class TableBodyMessage extends BodyMessage {
  onOutput() {
    const table = new nTable()
    table.append(this.getHeaders(this.body[0]))
    Array.from(this.body).map((line) => table.append(this.getLine(line)))
    return table
  }

  getHeaders(line) {
    const tr = new nTr()
    Object.keys(line).map((cell, ix) => tr.append(this.getTd(cell)))
    return tr
  }

  getLine(line) {
    const tr = new nTr()
    Object.keys(line).map((cell, ix) => tr.append(this.getTd(line[cell])))
    return tr
  }

  getTd(text) {
    const td = new nTd()
    td.setStyle('padding', 'calc(1rem / 4)')
    td.setText(text)
    return td
  }

  createHeaders(headers = []) {
    const th = new nTr()
    Array.from(headers)
      .map((cell, ix) => {
        const td = new nTd()
        td.setStyle('padding', 'calc(1rem / 4)')
        td.setText(cell)
        th.append(td)
      })
    return th
  }
}

export class ObjectBodyMessage extends TableBodyMessage {
  onOutput() {
    const table = new nTable()
    table.append(this.getHeaders(this.body))
    table.append(this.getLine(this.body))
    return table
  }
}

export class Authenticate2FABodyMessage extends BodyMessage { }

export class LogoutBodyMessage extends BodyMessage { }

export class SendOrderBodyMessage extends BodyMessage { }

export class CancelOrderBodyMessage extends BodyMessage { }

export class CancelAllOrdersBodyMessage extends BodyMessage { }

export class GetOpenOrdersBodyMessage extends BodyMessage { }

export class GetOrderFeeBodyMessage extends BodyMessage {
  onOutput() {
    const html = new HTML()
    if (!this.body.errormsg) {
      html.append(new TextHTML(`OrderFee: ${this.body.OrderFee}`))
      html.append(new TextHTML(`ProductId: ${this.getProductPairCode(this.body.ProductId)}`))
    }
    return html
  }

  getProductPairCode(text) {
    return getProductsList().find(({ ProductId }) => +ProductId == +text).Product
  }
}

export class GetOrderHistoryBodyMessage extends BodyMessage { }

export class GetOrderStatusBodyMessage extends BodyMessage { }

export class GetAccountInfoBodyMessage extends BodyMessage { }

export class GetAccountPositionsBodyMessage extends BodyMessage { }

export class GetAccountTradesBodyMessage extends BodyMessage { }

export class GetDepositTicketsBodyMessage extends BodyMessage { }

export class GetInstrumentBodyMessage extends ObjectBodyMessage { }

export class GetInstrumentsBodyMessage extends TableBodyMessage { }

export class GetProductsBodyMessage extends TableBodyMessage { }

export class GetL2SnapshotBodyMessage extends TableBodyMessage {
  getHeaders() {
    return this.createHeaders(Array.from(['MDUpdateID', 'Accounts', 'ActionDateTime', 'ActionType', 'LastTradePrice', 'Orders', 'Price', 'ProductPairCode', 'Quantity', 'Side']))
  }

  getLine(line) {
    const tr = new nTr()
    Array.from(line).map((cell, ix) => {
      const td = new nTd()
      td.setStyle('padding', 'calc(1rem / 4)')
      let text = cell
      if (ix == 2) text = this.getActionDateTime(cell)
      if (ix == 3) text = this.getActionType(cell)
      if (ix == 7) text = this.getProductPairCode(cell)
      if (ix == 9) text = this.getSide(cell)
      td.setText(text)
      tr.append(td)
    })
    return tr
  }

  getActionDateTime(text) {
    const datetime = new Date(text)
    return datetime.toLocaleString()
  }

  getActionType(text) {
    return Array.from(['new', 'update', 'deletion'])[+text]
  }

  getProductPairCode(text) {
    return getInstrumentsList().find(({ InstrumentId }) => +InstrumentId == +text).Symbol
  }

  getSide(text) {
    return Array.from(['Buy', 'Sell'])[+text]
  }
}

export class GetTradesHistoryBodyMessage extends BodyMessage { }

export class GetUserInfoBodyMessage extends BodyMessage { }

export class GetUserPermissionsBodyMessage extends BodyMessage { }

export class GetWithdrawTicketsBodyMessage extends BodyMessage { }

export class GetTickerHistoryBodyMessage extends TableBodyMessage {
  getHeaders() {
    return this.createHeaders(Array.from(['DateTime', 'High', 'Low', 'Open', 'Close', 'Volume', 'Inside Bid Price', 'Inside Ask Price', 'InstrumentId', 'Initial DateTime']))
  }
}

export class SubscribeAccountEventsBodyMessage extends ObjectBodyMessage { }

export class SubscribeTickerBodyMessage extends TableBodyMessage {
  getHeaders() {
    return this.createHeaders(Array.from(['DateTime', 'High', 'Low', 'Open', 'Close', 'Volume', 'Inside Bid Price', 'Inside Ask Price', 'InstrumentId', 'Initial DateTime']))
  }
}

export class UnsubscribeTickerBodyMessage extends BodyMessage { }

export class SubscribeLevel1BodyMessage extends BodyMessage { }

export class SubscribeLevel1MarketsBodyMessage extends BodyMessage { }

export class UnsubscribeLevel1BodyMessage extends BodyMessage { }

export class Level1UpdateEventBodyMessage extends ObjectBodyMessage { }

export class SubscribeLevel2BodyMessage extends BodyMessage { }

export class UnsubscribeLevel2BodyMessage extends BodyMessage { }

export class SubscribeTradesBodyMessage extends TableBodyMessage {
  getHeaders() {
    return this.createHeaders(getTradeHeaders())
  }

  getLine(line) {
    const tr = new nTr()
    Array.from(line).map((cell, ix) => {
      const td = new nTd()
      td.setStyle('padding', 'calc(1rem / 4)')
      let text = cell
      if (ix == 1) text = this.getInstrumentName(cell)
      else if (ix == 6) text = this.getTradetime(cell)
      else if (ix == 7) text = this.getDirection(cell)
      else if (ix == 8) text = this.getTakerSide(cell)
      td.setText(text)
      tr.append(td)
    })
    return tr
  }

  getInstrumentName(text) {
    return getInstrumentsList().find(({ InstrumentId }) => +InstrumentId == +text).Symbol
  }

  getTradetime(text) {
    const datetime = new Date(text)
    return datetime.toLocaleString()
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

export class Level2UpdateEventBodyMessage extends TableBodyMessage {
  onOutput() {
    const html = new HTML()
    html.append(super.onOutput())
    html.append(new MessageActionButton('buy', () => console.log('buy', this.body[0][6] * this.body[0][8], this.body[0][7])))
    html.append(new MessageActionButton('sell', () => console.log('sell', this.body[0][6] * this.body[0][8], this.body[0][7])))
    return html
  }

  getHeaders() {
    return this.createHeaders(Array.from(['MDUpdateID', 'NumberAccounts', 'ActionDateTime', 'ActionType', 'LastTradePrice', 'NumberOrders', 'Price', 'ProductPairCode', 'Quantity', 'Side',]))
  }

  getLine(line) {
    const tr = new nTr()
    Array.from(line).map((cell, ix) => {
      const td = new nTd()
      td.setStyle('padding', 'calc(1rem / 4)')
      let text = cell
      if (ix == 3) text = this.getActionType(cell)
      else if (ix == 7) text = this.getProductPairCode(cell)
      else if (ix == 9) text = this.getSide(cell)
      td.setText(text)
      tr.append(td)
    })
    return tr
  }

  getActionType(text) {
    return Array.from(['new', 'update', 'deletion'])[+text]
  }

  getProductPairCode(text) {
    return getInstrumentsList().find(({ InstrumentId }) => +InstrumentId == +text).Symbol
  }

  getSide(text) {
    return Array.from(['Buy', 'Sell'])[+text]
  }
}

export const getTradeHeaders = () => Array.from(['TradeId', 'ProductPairCode', 'Quantity', 'Price', 'Order1', 'Order2', 'Tradetime', 'Direction', 'TakerSide', 'BlockTrade', 'order1ClientId'])
