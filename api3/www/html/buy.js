import { HTML, nH2, nButton, nFlex } from '@brtmvdl/frontend'
import { SelectGroupComponent } from './components/index.js'
import * as lists from './utils/lists.js'

import 'socket.io'

export class TitleH2Component extends nH2 {
  onCreate() {
    super.onCreate()
    this.setText('Foxbit REST API 3.0')
  }
}

export class GetOrderBookHTML extends HTML {

  state = {
    sequence_id: '',
    asks: [],
    bids: [],
  }

  children = {
    sequence_id: new HTML(),
    asks: new HTML(),
    bids: new HTML(),
  }

  constructor({ sequence_id, asks, bids } = {}) {
    super()
    this.state.sequence_id = sequence_id
    this.state.asks = asks
    this.state.bids = bids
  }

  onCreate() {
    this.append(this.getFlex())
  }

  getFlex() {
    const flex = new nFlex()
    flex.append(this.getSequenceIdHTML().setContainerStyle('width', '10%'))
    flex.append(this.getAsksHTML().setContainerStyle('width', '45%'))
    flex.append(this.getBidsHTML().setContainerStyle('width', '45%'))
    return flex
  }

  getSequenceIdHTML() {
    this.children.sequence_id.setText(this.state.sequence_id)
    return this.children.sequence_id
  }

  getAsksHTML() {
    this.children.asks.append(this.createTable(this.state.asks))
    return this.children.asks
  }

  getBidsHTML() {
    this.children.bids.append(this.createTable(this.state.bids, 1))
    return this.children.bids
  }

  createTextHTML(text = '') {
    const html = new HTML()
    html.setText(text)
    html.setStyle('padding', '0rem calc(1rem / 2)')
    return html
  }

  createTable(data = [], order_by = 0) {
    const table = new HTML()
    Array.from(data).sort((a, b) => a[order_by] - b[order_by]).map(([a, b]) => {
      const line = new nFlex()
      line.append(this.createTextHTML(a))
      line.append(this.createTextHTML(b))
      line.append(this.createTextHTML(a * b))
      table.append(line)
    })
    return table
  }
}

export class Page extends HTML {
  state = {
    socket: io('localhost:4080'),
    running: false,
  }

  children = {
    market_symbol: new SelectGroupComponent(),
    start: new nButton(),
    stop: new nButton(),
    data: new HTML(),
  }

  onCreate() {
    this.setSocketEvents()
    this.append(new TitleH2Component())
    this.append(this.getMarketSymbolSelectGroup())
    this.append(this.getStartButton())
    this.append(this.getStopButton())
    this.append(this.getDataHTML())
  }

  setSocketEvents() {
    this.state.socket.on('message', (data) => this.onMessage(data))
  }

  getMarketSymbolSelectGroup() {
    lists.getInstrumentsList().map(({ Symbol }) => this.children.market_symbol.children.select.addOption(Symbol, Symbol))
    return this.children.market_symbol
  }

  getStartButton() {
    this.children.start.setText('start')
    this.children.start.on('click', () => this.onStart())
    return this.children.start
  }

  onStart() {
    console.log('onStart')
    this.setRunning(true)
    this.emitOrderBook()
  }

  getStopButton() {
    this.children.stop.setText('stop')
    this.children.stop.on('click', () => this.onStop())
    return this.children.stop
  }

  onStop() {
    console.log('onStop')
    this.setRunning(false)
  }

  setRunning(running) {
    this.state.running = running
  }

  getDataHTML() {
    return this.children.data
  }

  onMessage(message) {
    console.log('onMessage', message)
    this.showMessage(message)
    this.reemitMessage(message)
  }

  showMessage(message) {
    console.log('showMessage', message)
    const html = new HTML()
    html.append(new GetOrderBookHTML(message.output))
    this.children.data.append(html)
  }

  reemitMessage(message) {
    console.log('reemitMessage', message)
    if (message.input.header === 'Get order book') {
      if (this.state.running) {
        setTimeout(() => this.emitOrderBook(), 100)
      }
    }
  }

  emitOrderBook() {
    const market_symbol = this.children.market_symbol.getValue().toString().replace('/', '')
    this.emitMessage({
      header: 'Get order book',
      body: {
        Method: 'GET',
        Url: `/markets/${market_symbol}/orderbook`,
        Query: { depth: '100', },
        Body: {}
      }
    })
  }

  emitMessage(message) {
    this.state.socket.emit('message', message)
  }
}
