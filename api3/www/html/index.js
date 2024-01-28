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
      case 'me': return new tabs.MeTab()
      case 'banks': return console.log('banks')
      case 'currencies': return console.log('currencies')
      case 'transactional_limits': return console.log('transactional_limits')
      case 'markets': return console.log('markets')
      case 'markets-quotes': return console.log('markets-quotes')
      case 'markets-market_symbol-orderbook': return console.log('markets-market_symbol-orderbook')
      case 'markets-market_symbol-candles': return console.log('markets-market_symbol-candles')
      case 'markets-market_symbol-candlesticks': return console.log('markets-market_symbol-candlesticks')
      case 'orders': return console.log('orders')
      case 'orders-order_sn': return console.log('orders-order_sn')
      case 'orders-by-order-id-id': return console.log('orders-by-order-id-id')
      case 'orders-by-client-order-id-client_order_id': return console.log('orders-by-client-order-id-client_order_id')
      case 'orders-cancel': return console.log('orders-cancel')
      case 'trades': return console.log('trades')
      case 'system-time': return console.log('system-time')
      case 'accounts': return console.log('accounts')
      case 'accounts-pnl': return console.log('accounts-pnl')
      case 'deposits': return console.log('deposits')
      case 'deposits-deposit_sn': return console.log('deposits-deposit_sn')
      case 'deposits-address': return console.log('deposits-address')
      case 'withdrawals': return console.log('withdrawals')
      case 'withdrawals-withdrawal_sn': return console.log('withdrawals-withdrawal_sn')
    }

    return new HTML()
  }

  onTab(tab) {
    this.children.tabs.clear()
    const html = this.getTabHTML(tab)
    html.on('submit', ({ value: { header, body } }) => this.state.socket.emit(header, body))
    this.on('message', ({ value }) => html.dispatchEvent('message', value))
    this.children.tabs.append(html)
  }

  setHTMLEvents() {
    this.on('tab', (ev) => this.onTab(ev.value))
  }

  setSocketEvents() {
    this.state.socket.on('message', (data) => this.dispatchEvent('message', data))
    events.getEventsList().map((ev) => this.state.socket.on(ev, (data) => console.log(ev, data)))
  }

  getTitleH2() {
    const h2 = new nH2()
    h2.setText('Foxbit REST API 3.0')
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
