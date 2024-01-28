import { HTML, nH2, nFlex } from '@brtmvdl/frontend'
import * as events from './utils/events.js'
import * as tabs from './tabs/index.js'
import 'socket.io'

export class Page extends HTML {
  state = {
    socket: io('localhost:4080'),
  }

  children = {
    tabs: new HTML(),
  }

  onCreate() {
    this.setHTMLEvents()
    this.setSocketEvents()
    this.append(this.getTitleH2())
    this.append(this.getTabsHTML())
  }

  getTabHTML(tab) {
    switch (tab) {
      case 'List currencies': return new tabs.ListCurrenciesTab()
      // case 'List markets': return new tabs.List marketsTab(),
      // case 'Get a market quotation': return new tabs.Get a market quotationTab(),
      // case 'Get order book': return new tabs.Get order bookTab(),
      // case 'Get candles Deprecated': return new tabs.Get candles DeprecatedTab(),
      // case 'Get candlesticks': return new tabs.Get candlesticksTab(),
      // case 'List banks': return new tabs.List banksTab(),
      // case 'Get current time': return new tabs.Get current timeTab(),
      // case 'Get current member details': return new tabs.Get current member detailsTab(),
      // case 'Create an order': return new tabs.Create an orderTab(),
      // case 'List orders': return new tabs.List ordersTab(),
      // case 'Get an order by SN Deprecated': return new tabs.Get an order by SN DeprecatedTab(),
      // case 'Get an order by ID': return new tabs.Get an order by IDTab(),
      // case 'Get an order by client ID': return new tabs.Get an order by client IDTab(),
      // case 'Cancel orders': return new tabs.Cancel ordersTab(),
      // case 'List trades': return new tabs.List tradesTab(),
      // case 'Get member accounts': return new tabs.Get member accountsTab(),
      // case 'Get member PnL data': return new tabs.Get member PnL dataTab(),
      // case 'List deposits': return new tabs.List depositsTab(),
      // case 'Get a deposit': return new tabs.Get a depositTab(),
      // case 'Get a deposit address': return new tabs.Get a deposit addressTab(),
      // case 'List withdrawals': return new tabs.List withdrawalsTab(),
      // case 'Create a withdrawal': return new tabs.Create a withdrawalTab(),
      // case 'Get a withdrawal': return new tabs.Get a withdrawalTab(),
      // case 'List Transactional Limits': return new tabs.List Transactional LimitsTab(),
    }

    return new HTML()
  }

  onTab(tab) {
    console.log('onTab', tab)
    this.children.tabs.clear()
    const html = this.getTabHTML(tab)
    html.on('submit', ({ value }) => this.onSubmit(value))
    this.on('message', ({ value }) => html.dispatchEvent('message', value))
    this.children.tabs.append(html)
  }

  onSubmit(message) {
    console.log('onSubmit', message)
    this.sendMessage(message)
  }

  setHTMLEvents() {
    this.on('tab', (ev) => this.onTab(ev.value))
  }

  setSocketEvents() {
    this.state.socket.on('message', (data) => this.dispatchEvent('message', data))
  }

  sendMessage(message) {
    console.log('message', message)
    this.state.socket.emit('message', message)
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
