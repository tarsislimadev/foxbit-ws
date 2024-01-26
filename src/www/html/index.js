import { HTML, nH2, nButton, nFlex, nInputTextGroup } from '@brtmvdl/frontend'

import * as tabs from './tabs/index.js'
import * as events from './utils/events.js'

import 'socket.io'

export class Page extends HTML {

  children = {
    tabs: new HTML(),
  }

  state = {
    socket: io('localhost:8080'),
  }

  onCreate() {
    this.setHTMLEvents()
    this.setSocketEvents()
    this.append(this.getTitleH2())
    this.append(this.getTabsHTML())
  }

  getTabHTML(tab) {
    switch (tab) {
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

  onTab(tab) {
    this.children.tabs.clear()
    const html = this.getTabHTML(tab)
    html.on('submit', ({ value: { header, body } }) => this.state.socket.emit(header, body))
    this.children.tabs.append(html)
  }

  setHTMLEvents() {
    this.on('tab', (ev) => this.onTab(ev.value))
  }

  setSocketEvents() {
    this.state.socket.on('message', (data) => console.log('message', data))
    events.getEventsList().map((ev) => this.state.socket.on(ev, (data) => console.log(ev, data)))
  }

  getTitleH2() {
    const h2 = new nH2()
    h2.setText('Foxbit websocket API 2.0')
    return h2
  }

  createTabHeader(header) {
    const html = new HTML()
    html.setText(header)
    html.setStyle('cursor', 'pointer')
    html.on('click', () => this.dispatchEvent('tab', header))
    return html
  }

  getTabsHeaders() {
    const html = new HTML()
    events.getEventsList().map((tab) => html.append(this.createTabHeader(tab)))
    return html
  }

  getTabsContents() {
    return this.children.tabs
  }

  getTabsHTML() {
    const tabs = new nFlex()
    tabs.append(this.getTabsHeaders().setContainerStyle('width', '20%'))
    tabs.append(this.getTabsContents().setContainerStyle('width', '80%'))
    return tabs
  }
}
