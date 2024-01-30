import { HTML, nH2, nSelect, nButton, nFlex } from '@brtmvdl/frontend'
import * as events from './utils/events.js'
import * as tabs from './tabs/index.js'
import 'socket.io'

export class Page extends HTML {
  state = {
    socket: io('localhost:8080'),
  }

  children = {
    select: new nSelect(),
    inputs: new HTML(),
    button: new nButton(),
  }

  onCreate() {
    this.append(this.getTitleH2())
    this.append(this.getTabsHTML())
  }

  getTitleH2() {
    const h2 = new nH2()
    h2.setText('Foxbit websocket API 2.0')
    return h2
  }

  getSelect() {
    events.getEventsList().map((ev) => this.children.select.addOption(ev, ev))
    this.children.select.on('change', () => this.onChange())
    return this.children.select
  }

  onChange() {
    this.children.inputs.clear()
    const html = this.getInputsHTML(this.children.select.getValue())
    html.on('submit', ({ value: { header, body } }) => this.state.socket.emit(header, body))
    this.on('message', ({ value }) => html.dispatchEvent('message', value))
    this.children.inputs.append(html)
  }

  getInputs() {
    return this.children.inputs
  }

  getButton() {
    this.children.button.setText('send')
    this.children.button.on('click', () => this.onClick())
    return this.children.button
  }

  onClick() {
    this.dispatchEvent('message', {})
  }

  getInputsHTML(event) {
    switch (event) {
      case 'AuthenticateUser': return new tabs.AuthenticateUserHTML()
      case 'Authenticate2FA': return new tabs.Authenticate2FAHTML()
      case 'GetOrderHistory': return new tabs.GetOrderHistoryHTML()
      case 'GetTickerHistory': return new tabs.GetTickerHistoryHTML()
      case 'GetTradesHistory': return new tabs.GetTradesHistoryHTML()
      case 'GetAccountInfo': return new tabs.GetAccountInfoHTML()
      case 'GetAccountPositions': return new tabs.GetAccountPositionsHTML()
      case 'GetAccountTrades': return new tabs.GetAccountTradesHTML()
      case 'GetDepositTickets': return new tabs.GetDepositTicketsHTML()
      case 'GetInstrument': return new tabs.GetInstrumentHTML()
      case 'GetInstruments': return new tabs.GetInstrumentsHTML()
      case 'GetOrderFee': return new tabs.GetOrderFeeHTML()
      case 'GetOrderStatus': return new tabs.GetOrderStatusHTML()
      case 'GetProducts': return new tabs.GetProductsHTML()
      case 'GetL2Snapshot': return new tabs.GetL2SnapshotHTML()
      case 'GetUserInfo': return new tabs.GetUserInfoHTML()
      case 'GetUserPermissions': return new tabs.GetUserPermissionsHTML()
      case 'GetWithdrawTickets': return new tabs.GetWithdrawTicketsHTML()
      case 'Logout': return new tabs.LogoutHTML()
      case 'SendOrder': return new tabs.SendOrderHTML()
      case 'SubscribeAccountEvents': return new tabs.SubscribeAccountEventsHTML()
      case 'SubscribeLevel1': return new tabs.SubscribeLevel1HTML()
      case 'SubscribeLevel1Markets': return new tabs.SubscribeLevel1MarketsHTML()
      case 'SubscribeLevel2': return new tabs.SubscribeLevel2HTML()
      case 'SubscribeTicker': return new tabs.SubscribeTickerHTML()
      case 'SubscribeTrades': return new tabs.SubscribeTradesHTML()
      case 'UnsubscribeLevel1': return new tabs.UnsubscribeLevel1HTML()
      case 'UnsubscribeLevel2': return new tabs.UnsubscribeLevel2HTML()
      case 'UnsubscribeTicker': return new tabs.UnsubscribeTickerHTML()
      case 'UnsubscribeTrades': return new tabs.UnsubscribeTradesHTML()
      case 'CancelAllOrders': return new tabs.CancelAllOrdersHTML()
      case 'GetOpenOrders': return new tabs.GetOpenOrdersHTML()
      case 'CancelOrder': return new tabs.CancelOrderHTML()
    }

    return new HTML()
  }

  getTabsHTML() {
    const tabs = new nFlex()
    tabs.append(this.getSelect().setContainerStyle('width', '10%'))
    tabs.append(this.getInputs().setContainerStyle('width', '80%'))
    tabs.append(this.getButton().setContainerStyle('width', '10%'))
    return tabs
  }
}
