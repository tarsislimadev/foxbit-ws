import { HTML, nH2, nSelect, nButton, nFlex } from '@brtmvdl/frontend'
import { SelectGroupComponent, ButtonComponent, InputTextGroupComponent } from './components/index.js'
import * as events from './utils/events.js'
import { getTabHTML as getInputsHTML } from './tabs/tabs.js'

import 'socket.io'

export class Page extends HTML {
  state = {
    socket: io('localhost:8080'),
  }

  children = {
    select: new SelectGroupComponent(),
    inputs: new nFlex(),
    button: new ButtonComponent(),
    //
    InstrumentId: new SelectGroupComponent('InstrumentId'),
    Interval: new InputTextGroupComponent('Interval'),
    FromDate: new InputTextGroupComponent('FromDate'),
    ToDate: new InputTextGroupComponent('ToDate'),
    OmsId: new InputTextGroupComponent('omsId'),
    AccountId: new InputTextGroupComponent('accountId'),
    TradeId: new InputTextGroupComponent('tradeId'),
    OrderId: new InputTextGroupComponent('orderId'),
    UserId: new InputTextGroupComponent('userId'),
    StartTimeStamp: new InputTextGroupComponent('startTimeStamp'),
    EndTimeStamp: new InputTextGroupComponent('endTimeStamp'),
    Depth: new InputTextGroupComponent('depth'),
    StartIndex: new InputTextGroupComponent('startIndex'),
    ExecutionId: new InputTextGroupComponent('executionId'),
    Side: new SelectGroupComponent('Side'),
    Quantity: new InputTextGroupComponent('Quantity'),
    MarketId: new InputTextGroupComponent('MarketId'),
  }

  onCreate() {
    this.append(this.getTabsHTML())
  }

  getTabsHTML() {
    const tabs = new nFlex()
    tabs.append(this.getSelect().setContainerStyle('width', '10%'))
    tabs.append(this.getInputs().setContainerStyle('width', '80%'))
    tabs.append(this.getButton().setContainerStyle('width', '10%'))
    return tabs
  }

  getSelect() {
    events.getEventsList().map((ev) => this.children.select.children.select.addOption(ev, ev))
    this.children.select.on('change', () => this.onSelectChange())
    return this.children.select
  }

  onSelectChange() {
    console.log('onSelectChange')
    this.children.inputs.clear()
    this.getInputsHTML().map((input) => this.children.inputs.append(input))
  }

  getInputsHTML() {
    switch (this.getSelectValue()) {
      case 'AuthenticateUser': return [new HTML()]
      case 'Authenticate2FA': return [new HTML()]
      case 'GetOrderHistory': return [new HTML()]
      case 'GetTickerHistory': return [new HTML()]
      case 'GetTradesHistory': return [new HTML()]
      case 'GetAccountInfo': return [new HTML()]
      case 'GetAccountPositions': return [new HTML()]
      case 'GetAccountTrades': return [new HTML()]
      case 'GetDepositTickets': return [new HTML()]
      case 'GetInstrument': return [new HTML()]
      case 'GetInstruments': return [new HTML()]
      case 'GetOrderFee': return [new HTML()]
      case 'GetOrderStatus': return [new HTML()]
      case 'GetProducts': return [new HTML()]
      case 'GetL2Snapshot': return [new HTML()]
      case 'GetUserInfo': return [new HTML()]
      case 'GetUserPermissions': return [new HTML()]
      case 'GetWithdrawTickets': return [new HTML()]
      case 'Logout': return [new HTML()]
      case 'SendOrder': return [new HTML()]
      case 'SubscribeAccountEvents': return [new HTML()]
      case 'SubscribeLevel1': return [new HTML()]
      case 'SubscribeLevel1Markets': return [new HTML()]
      case 'SubscribeLevel2': return [new HTML()]
      case 'SubscribeTicker': return [new HTML()]
      case 'SubscribeTrades': return [new HTML()]
      case 'UnsubscribeLevel1': return [new HTML()]
      case 'UnsubscribeLevel2': return [new HTML()]
      case 'UnsubscribeTicker': return [new HTML()]
      case 'UnsubscribeTrades': return [new HTML()]
      case 'CancelAllOrders': return [new HTML()]
      case 'GetOpenOrders': return [new HTML()]
      case 'CancelOrder': return [new HTML()]
    }

    return [new HTML()]
  }

  getInputs() {
    return this.children.inputs
  }

  getButton() {
    this.children.button.setContainerStyle('padding', '1rem')
    this.children.button.setStyle('width', '100%')
    this.children.button.setText('send')
    this.children.button.on('click', () => this.onButtonClick())
    return this.children.button
  }

  onButtonClick() {
    this.emitSocketMessage(this.getSelectValue(), this.getBody())
  }

  emitSocketMessage(header, body = {}) {
    console.log('emitSocketMessage', header, body)
    this.state.socket.emit(header, body)
  }

  getSelectValue() {
    return this.children.select.getValue()
  }

  getBody() {
    switch (this.getSelectValue()) {
      case 'AuthenticateUser': return {}
      case 'Authenticate2FA': return {}
      case 'GetOrderHistory': return {}
      case 'GetTickerHistory': return {}
      case 'GetTradesHistory': return {}
      case 'GetAccountInfo': return {}
      case 'GetAccountPositions': return {}
      case 'GetAccountTrades': return {}
      case 'GetDepositTickets': return {}
      case 'GetInstrument': return {}
      case 'GetInstruments': return {}
      case 'GetOrderFee': return {}
      case 'GetOrderStatus': return {}
      case 'GetProducts': return {}
      case 'GetL2Snapshot': return {}
      case 'GetUserInfo': return {}
      case 'GetUserPermissions': return {}
      case 'GetWithdrawTickets': return {}
      case 'Logout': return {}
      case 'SendOrder': return {}
      case 'SubscribeAccountEvents': return {}
      case 'SubscribeLevel1': return {}
      case 'SubscribeLevel1Markets': return {}
      case 'SubscribeLevel2': return {}
      case 'SubscribeTicker': return {}
      case 'SubscribeTrades': return {}
      case 'UnsubscribeLevel1': return {}
      case 'UnsubscribeLevel2': return {}
      case 'UnsubscribeTicker': return {}
      case 'UnsubscribeTrades': return {}
      case 'CancelAllOrders': return {}
      case 'GetOpenOrders': return {}
      case 'CancelOrder': return {}
    }

    return {}
  }

}
