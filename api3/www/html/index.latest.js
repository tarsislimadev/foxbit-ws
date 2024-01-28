import { HTML, nH2, nButton, nFlex, nInputTextGroup } from '@brtmvdl/frontend'
import * as tabs from './tabs/index.js'
import * as events from './utils/events.js'
import 'socket.io'

export class Page extends HTML {
  children = {
    tabs: new HTML(),
  }

  state = {
    socket: io('localhost:4080'),
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
      case 'List markets': return new tabs.ListMarketsTab()
      case 'List banks': return new tabs.ListBanksTab()
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
    this.state.socket.on('connection', (socket) => {
      socket.emit('client hello', Date.now())
      socket.on('message', (data) => console.log('socket.on.message', data))
      events.getEventsList().map((ev) => socket.on(ev, (data) => console.log(ev, data)))
    })
    this.state.socket.on('message', (data) => console.log('this.state.socket.on.message', data))
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
