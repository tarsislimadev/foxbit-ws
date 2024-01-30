import { HTML, nH2, nFlex, nSelect, nButton, nInputTextGroup } from '@brtmvdl/frontend'
import { InputTextGroupComponent, SelectGroupComponent } from './components/index.js'
import * as lists from './utils/lists.js'

import 'socket.io'

export class TitleHTML extends nH2 {
  onCreate() {
    super.onCreate()
    this.setText('Foxbit websocket API 2.0')
  }
}

export class ChatMessage extends HTML {
  side = null
  header = null
  body = null

  constructor(side, header, body = {}) {
    super()
    this.side = side
    this.header = header
    this.body = body
  }

  getName() { return 'chat-message' }

  onCreate() {
    super.onCreate()
    this.setStyle('background-color', this.getBackgroundColorBySide())
    this.setStyle('padding', '1rem 0rem')
    this.setStyle('margin', '0rem 1rem 1rem 1rem')
    this.append(this.getHeaderHTML())
    this.append(this.getBodyHTML())
    this.append(this.getFooterHTML())
  }

  getBackgroundColorBySide() {
    return this.side == 'left' ? '#ff0000' : '#0000ff'
  }

  getHeaderHTML() {
    const header = new HTML()
    header.setStyle('padding', '0rem 1rem')
    header.setText(this.header)
    return header
  }

  getBodyHTML(content = this.body) {
    const body = new HTML()
    if (typeof content === 'object') {
      Object.keys(content).map((key) => body.append(this.createTextHTML(key, content[key])))
    } else {
      body.append(this.createTextHTML('text', content))
    }
    return body
  }

  createTextHTML(key, value = '') {
    const html = new HTML()
    html.setStyle('padding', '0rem 1rem')
    html.setText(`${key}: ${value}`)
    return html
  }

  getFooterHTML() {
    const footer = new HTML()
    footer.setStyle('padding', '0rem 1rem')
    const datetime = new Date()
    footer.setText(datetime.toLocaleString())
    return footer
  }
}

export class LeftMessage extends ChatMessage {
  constructor(header, body = {}) {
    super('left', header, body)
  }
}

export class RightMessage extends ChatMessage {
  constructor(header, body = {}) {
    super('right', header, body)
  }
}

export class Page extends HTML {
  state = {
    socket: io('localhost:8080'),
  }

  children = {
    form: new HTML(),
    messages: new HTML(),
    operations: new nSelect(),
    inputs: new HTML(),
    send: new nButton(),
    //
    APIKey: new InputTextGroupComponent('APIKey'),
    Nonce: new InputTextGroupComponent('Nonce'),
    UserId: new InputTextGroupComponent('UserId'),
    Signature: new InputTextGroupComponent('Signature'),
    Code: new InputTextGroupComponent('Code'),
    InstrumentId: new SelectGroupComponent('InstrumentId'),
    OMSId: new InputTextGroupComponent('OMSId'),
    AccountId: new InputTextGroupComponent('AccountId'),
    ClOrderId: new InputTextGroupComponent('ClOrderId'),
    OrderId: new InputTextGroupComponent('OrderId'),
    StartIndex: new InputTextGroupComponent('StartIndex'),
    Count: new InputTextGroupComponent('Count'),
    ProductId: new InputTextGroupComponent('ProductId'),
    Amount: new InputTextGroupComponent('Amount'),
    OrderType: new SelectGroupComponent('OrderType'),
    MakerTaker: new InputTextGroupComponent('MakerTaker'),
    Side: new SelectGroupComponent('Side'),
    Quantity: new InputTextGroupComponent('Quantity'),
    Depth: new InputTextGroupComponent('Depth'),
    Interval: new InputTextGroupComponent('Interval'),
    FromDate: new InputTextGroupComponent('FromDate'),
    ToDate: new InputTextGroupComponent('ToDate'),
    Limit: new InputTextGroupComponent('Limit'),
    TimeInForce: new SelectGroupComponent('TimeInForce'),
    ClientOrderId: new InputTextGroupComponent('ClientOrderId'),
    OrderIdOCO: new InputTextGroupComponent('OrderIdOCO'),
    UseDisplayQuantity: new InputTextGroupComponent('UseDisplayQuantity'),
    PegPriceType: new SelectGroupComponent('PegPriceType'),
    LimitPrice: new InputTextGroupComponent('LimitPrice'),
    MarketId: new InputTextGroupComponent('MarketId'),
    IncludeLastCount: new InputTextGroupComponent('IncludeLastCount'),
  }

  onCreate() {
    this.setSocketEvents()
    this.append(new TitleHTML())
    this.append(this.getChatHTML())
  }

  setSocketEvents() {
    this.state.socket.on('message', (message) => this.onSocketMessage(message))
  }

  onSocketMessage(message) {
    console.log('onSocketMessage', message)
    this.showMessage('left', message.Endpoint, message.Payload)
  }

  getChatHTML() {
    const chat = new nFlex()
    chat.append(this.getFormHTML())
    chat.append(this.getVerticalSeparatorHTML())
    chat.append(this.getMessagesHTML())
    return chat
  }

  getFormHTML() {
    this.children.form.append(this.getOperationsSelect())
    this.children.form.append(this.getInputsHTML())
    this.children.form.append(this.getSendButton())
    this.children.form.setContainerStyle('width', '20%')
    this.children.form.setStyle('padding', '1rem')
    return this.children.form
  }

  getOperationsSelect() {
    lists.getOperationsList().map((op) => this.children.operations.addOption(op, op))
    this.children.operations.setStyle('background-color', 'transparent')
    this.children.operations.setStyle('appearance', 'none')
    this.children.operations.setStyle('border', 'none')
    this.children.operations.on('change', () => this.onOperationsChange())
    this.children.operations.setStyle('padding', '1rem')
    return this.children.operations
  }

  onOperationsChange() {
    this.updateForm(this.children.operations.getValue())
  }

  updateForm(op) {
    this.children.inputs.clear()
    this.getFormInputs(op).forEach((input) => this.children.inputs.append(this[`get${input}Component`]?.()))
  }

  getFormInputs(op) {
    switch (op) {
      case 'AuthenticateUser': return ['APIKey', 'Nonce', 'UserId', 'Signature']
      case 'Authenticate2FA': return ['Code']
      case 'Logout': return []
      case 'SendOrder': return ['OMSId', 'InstrumentId', 'AccountId', 'TimeInForce', 'ClientOrderId', 'OrderIdOCO', 'UseDisplayQuantity', 'Side', 'Quantity', 'OrderType', 'PegPriceType', 'LimitPrice']
      case 'CancelOrder': return ['OMSId', 'AccountId', 'ClOrderId', 'OrderId']
      case 'CancelAllOrders': return ['InstrumentId']
      case 'GetOpenOrders': return ['OMSId', 'AccountId']
      case 'GetOrderFee': return ['OMSId', 'AccountId', 'InstrumentId', 'ProductId', 'Amount', 'OrderType', 'MakerTaker', 'Side', 'Quantity']
      case 'GetOrderHistory': return ['OMSId', 'AccountId', 'Depth']
      case 'GetOrderStatus': return ['AccountId', 'OrderId']
      case 'GetAccountInfo': return ['OMSId', 'AccountId']
      case 'GetAccountPositions': return ['AccountId', 'OMSId']
      case 'GetAccountTrades': return ['OMSId', 'AccountId', 'StartIndex', 'Count']
      case 'GetDepositTickets': return []
      case 'GetInstrument': return ['InstrumentId']
      case 'GetInstruments': return ['OMSId']
      case 'GetProducts': return ['OMSId']
      case 'GetL2Snapshot': return ['OMSId', 'InstrumentId', 'Depth']
      case 'GetTradesHistory': return []
      case 'GetUserInfo': return []
      case 'GetUserPermissions': return []
      case 'GetWithdrawTickets': return ['Limit']
      case 'GetTickerHistory': return ['InstrumentId', 'Interval', 'FromDate', 'ToDate']
      case 'SubscribeAccountEvents': return []
      case 'SubscribeTicker': return ['OMSId', 'InstrumentId', 'Interval', 'IncludeLastCount']
      case 'UnsubscribeTicker': return ['InstrumentId']
      case 'SubscribeLevel1': return ['InstrumentId', 'MarketId']
      case 'SubscribeLevel1Markets': return ['MarketId']
      case 'UnsubscribeLevel1': return ['OMSId', 'InstrumentId']
      case 'SubscribeLevel2': return ['InstrumentId', 'MarketId', 'Depth']
      case 'UnsubscribeLevel2': return ['OMSId', 'InstrumentId']
      case 'SubscribeTrades': return ['OMSId', 'InstrumentId', 'IncludeLastCount']
      case 'UnsubscribeTrades': return ['OMSId', 'InstrumentId']
    }

    return []
  }

  getInputsHTML() {
    return this.children.inputs
  }

  getSendButton() {
    this.children.send.setText('send')
    this.children.send.on('click', () => this.onSendButtonClick())
    this.children.send.setStyle('padding', '1rem')
    this.children.send.setStyle('width', '100%')
    return this.children.send
  }

  onSendButtonClick() {
    const op = this.children.operations.getValue()
    const body = this.getFormValues(op)
    this.emitSocketMessage(op, body)
  }

  emitSocketMessage(header, body = {}) {
    console.log('emitSocketMessage', header, body)
    this.state.socket.emit(header, body)
    this.showMessage('right', header, body)
  }

  showMessage(side, header, body = {}) {
    console.log('showMessage', side, header, body)
    this.children.messages.append(side == 'left' ? new LeftMessage(header, body) : new RightMessage(header, body))
  }

  getFormValues(op) {
    return this.getFormInputs(op).reduce((b, input) => ({ ...b, [input]: this.children[input].getValue() }), {})
  }

  getVerticalSeparatorHTML() {
    const separator = new HTML()
    separator.setStyle('height', '100%')
    separator.setStyle('box-shadow', '0rem 0rem 0rem 1px #000000')
    return separator
  }

  getMessagesHTML() {
    this.children.messages.setContainerStyle('width', '80%')
    return this.children.messages
  }

  getAPIKeyComponent() {
    return this.children.APIKey
  }

  getNonceComponent() {
    return this.children.Nonce
  }

  getUserIdComponent() {
    return this.children.UserId
  }

  getSignatureComponent() {
    return this.children.Signature
  }

  getCodeComponent() {
    return this.children.Code
  }

  getInstrumentIdComponent() {
    lists.getInstrumentsList().map(({ InstrumentId, Symbol }) => this.children.InstrumentId.children.select.addOption(InstrumentId, Symbol))
    return this.children.InstrumentId
  }

  getOMSIdComponent() {
    return this.children.OMSId
  }

  getAccountIdComponent() {
    return this.children.AccountId
  }

  getClOrderIdComponent() {
    return this.children.ClOrderId
  }

  getOrderIdComponent() {
    return this.children.OrderId
  }

  getStartIndexComponent() {
    return this.children.StartIndex
  }

  getCountComponent() {
    return this.children.Count
  }

  getProductIdComponent() {
    return this.children.ProductId
  }

  getAmountComponent() {
    return this.children.Amount
  }

  getOrderTypeComponent() {
    Array.from(['Unknown', 'Market', 'Limit', 'StopMarket', 'StopLimit', 'TrailingStopMarket', 'TrailingStopLimit', 'BlockTrade']).map((orderType, index) => this.children.OrderType.children.select.addOption(index, orderType))
    return this.children.OrderType
  }

  getMakerTakerComponent() {
    return this.children.MakerTaker
  }

  getSideComponent() {
    Array.from(['Buy', 'Sell', 'Short', 'unknown']).map((side, index) => this.children.Side.children.select.addOption(index, side))
    return this.children.Side
  }

  getQuantityComponent() {
    return this.children.Quantity
  }

  getDepthComponent() {
    return this.children.Depth
  }

  getIntervalComponent() {
    return this.children.Interval
  }

  getFromDateComponent() {
    return this.children.FromDate
  }

  getToDateComponent() {
    return this.children.ToDate
  }

  getLimitComponent() {
    return this.children.Limit
  }

  getTimeInForceComponent() {
    Array.from(['Unknown', 'GTC', 'OPG', 'IOC', 'FOK', 'GTX', 'GTD']).map((timeInForce, index) => this.children.TimeInForce.children.select.addOption(index, timeInForce))
    return this.children.TimeInForce
  }

  getClientOrderIdComponent() {
    return this.children.ClientOrderId
  }

  getOrderIdOCOComponent() {
    return this.children.OrderIdOCO
  }

  getUseDisplayQuantityComponent() {
    return this.children.UseDisplayQuantity
  }

  getPegPriceTypeComponent() {
    Array.from(['Last', 'Bid', 'Ask', 'Midpoint']).map((type, index) => this.children.PegPriceType.children.select.addOption(index + 1, type))
    return this.children.PegPriceType
  }

  getLimitPriceComponent() {
    return this.children.LimitPrice
  }

  getMarketIdComponent() {
    return this.children.MarketId
  }

  getIncludeLastCountComponent() {
    return this.children.IncludeLastCount
  }

}
