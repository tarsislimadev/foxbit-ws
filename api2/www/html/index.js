import { HTML, nH2, nFlex, nSelect, nButton, nInputTextGroup } from '@brtmvdl/frontend'
import { InputTextGroupComponent } from './components/index.js'
import * as lists from './utils/lists.js'

import 'socket.io'

export class TitleHTML extends nH2 {
  onCreate() {
    super.onCreate()
    this.setText('Foxbit websocket API 2.0')
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
    IntrumentId: new InputTextGroupComponent('IntrumentId'),
    OMSId: new InputTextGroupComponent('OMSId'),
    AccountId: new InputTextGroupComponent('AccountId'),
    ClOrderId: new InputTextGroupComponent('ClOrderId'),
    OrderId: new InputTextGroupComponent('OrderId'),
    StartIndex: new InputTextGroupComponent('StartIndex'),
    Count: new InputTextGroupComponent('Count'),
    ProductId: new InputTextGroupComponent('ProductId'),
    Amount: new InputTextGroupComponent('Amount'),
    OrderType: new InputTextGroupComponent('OrderType'),
    MakerTaker: new InputTextGroupComponent('MakerTaker'),
    Side: new InputTextGroupComponent('Side'),
    Quantity: new InputTextGroupComponent('Quantity'),
    Depth: new InputTextGroupComponent('Depth'),
    Interval: new InputTextGroupComponent('Interval'),
    FromDate: new InputTextGroupComponent('FromDate'),
    ToDate: new InputTextGroupComponent('ToDate'),
    Limit: new InputTextGroupComponent('Limit'),
    TimeInForce: new InputTextGroupComponent('TimeInForce'),
    ClientOrderId: new InputTextGroupComponent('ClientOrderId'),
    OrderIdOCO: new InputTextGroupComponent('OrderIdOCO'),
    UseDisplayQuantity: new InputTextGroupComponent('UseDisplayQuantity'),
    PegPriceType: new InputTextGroupComponent('PegPriceType'),
    LimitPrice: new InputTextGroupComponent('LimitPrice'),
    MarketId: new InputTextGroupComponent('MarketId'),
    IncludeLastCount: new InputTextGroupComponent('IncludeLastCount'),
  }

  onCreate() {
    this.append(new TitleHTML())
    this.append(this.getChatHTML())
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
      case 'CancelAllOrders': return ['IntrumentId']
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
      case 'UnsubscribeTicker': return ['IntrumentId']
      case 'SubscribeLevel1': return ['InstrumentId', 'MarketId']
      case 'SubscribeLevel1Markets': return ['MarketId']
      case 'UnsubscribeLevel1': return ['OMSId', 'IntrumentId']
      case 'SubscribeLevel2': return ['InstrumentId', 'MarketId', 'Depth']
      case 'UnsubscribeLevel2': return ['OMSId', 'IntrumentId']
      case 'SubscribeTrades': return ['OMSId', 'InstrumentId', 'IncludeLastCount']
      case 'UnsubscribeTrades': return ['OMSId', 'IntrumentId']
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
    console.log('emit socket', op, this.getFormInputs(op))
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

  getIntrumentIdComponent() {
    return this.children.IntrumentId
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
    return this.children.OrderType
  }

  getMakerTakerComponent() {
    return this.children.MakerTaker
  }

  getSideComponent() {
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
