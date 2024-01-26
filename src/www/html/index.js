import { HTML, nH2, nButton, nFlex, nInputTextGroup } from '@brtmvdl/frontend'
import * as tabs from './tabs/index.js'
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
    this.state.socket.on('AuthenticateUser', (data) => console.log('AuthenticateUser', data))
    this.state.socket.on('Authenticate2FA', (data) => console.log('Authenticate2FA', data))
    this.state.socket.on('CancelAllOrders', (data) => console.log('CancelAllOrders', data))
    this.state.socket.on('CancelOrder', (data) => console.log('CancelOrder', data))
    this.state.socket.on('GetAccountInfo', (data) => console.log('GetAccountInfo', data))
    this.state.socket.on('GetAccountPositions', (data) => console.log('GetAccountPositions', data))
    this.state.socket.on('GetAccountTrades', (data) => console.log('GetAccountTrades', data))
    this.state.socket.on('GetDepositTickets', (data) => console.log('GetDepositTickets', data))
    this.state.socket.on('GetInstrument', (data) => console.log('GetInstrument', data))
    this.state.socket.on('GetInstruments', (data) => console.log('GetInstruments', data))
    this.state.socket.on('GetOpenOrders', (data) => console.log('GetOpenOrders', data))
    this.state.socket.on('GetOrderFee', (data) => console.log('GetOrderFee', data))
    this.state.socket.on('GetOrderHistory', (data) => console.log('GetOrderHistory', data))
    this.state.socket.on('GetOrderStatus', (data) => console.log('GetOrderStatus', data))
    this.state.socket.on('GetProducts', (data) => console.log('GetProducts', data))
    this.state.socket.on('GetL2Snapshot', (data) => console.log('GetL2Snapshot', data))
    this.state.socket.on('GetTickerHistory', (data) => console.log('GetTickerHistory', data))
    this.state.socket.on('GetTradesHistory', (data) => console.log('GetTradesHistory', data))
    this.state.socket.on('GetUserInfo', (data) => console.log('GetUserInfo', data))
    this.state.socket.on('GetUserPermissions', (data) => console.log('GetUserPermissions', data))
    this.state.socket.on('GetWithdrawTickets', (data) => console.log('GetWithdrawTickets', data))
    this.state.socket.on('Logout', (data) => console.log('Logout', data))
    this.state.socket.on('SendOrder', (data) => console.log('SendOrder', data))
    this.state.socket.on('SubscribeAccountEvents', (data) => console.log('SubscribeAccountEvents', data))
    this.state.socket.on('SubscribeLevel1', (data) => console.log('SubscribeLevel1', data))
    this.state.socket.on('SubscribeLevel1Markets', (data) => console.log('SubscribeLevel1Markets', data))
    this.state.socket.on('SubscribeLevel2', (data) => console.log('SubscribeLevel2', data))
    this.state.socket.on('SubscribeTicker', (data) => console.log('SubscribeTicker', data))
    this.state.socket.on('SubscribeTrades', (data) => console.log('SubscribeTrades', data))
    this.state.socket.on('UnsubscribeLevel1', (data) => console.log('UnsubscribeLevel1', data))
    this.state.socket.on('UnsubscribeLevel2', (data) => console.log('UnsubscribeLevel2', data))
    this.state.socket.on('UnsubscribeTicker', (data) => console.log('UnsubscribeTicker', data))
    this.state.socket.on('UnsubscribeTrades', (data) => console.log('UnsubscribeTrades', data))
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
    Array.from([
      'AuthenticateUser',
      'Authenticate2FA',
      'GetOpenOrders',
      'GetOrderFee',
      'GetOrderHistory',
      'GetOrderStatus',
      'SendOrder',
      'CancelAllOrders',
      'CancelOrder',
      'SubscribeTicker',
      'UnsubscribeTicker',
      'SubscribeAccountEvents',
      'SubscribeLevel1',
      'UnsubscribeLevel1',
      'SubscribeLevel1Markets',
      'SubscribeLevel2',
      'UnsubscribeLevel2',
      'SubscribeTrades',
      'UnsubscribeTrades',
      'GetAccountInfo',
      'GetAccountPositions',
      'GetAccountTrades',
      'GetDepositTickets',
      'GetInstrument',
      'GetInstruments',
      'GetProducts',
      'GetL2Snapshot',
      'GetTickerHistory',
      'GetTradesHistory',
      'GetUserInfo',
      'GetUserPermissions',
      'GetWithdrawTickets',
      'Logout',
    ]).map((tab) => html.append(this.createTabHeader(tab)))
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
