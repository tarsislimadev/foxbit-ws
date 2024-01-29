import { HTML, nH2, nButton } from '@brtmvdl/frontend'
import { SelectGroupComponent } from './components/index.js'
import * as lists from './utils/lists.js'

import 'socket.io'

export class TitleH2Component extends nH2 {
  onCreate() {
    super.onCreate()
    this.setText('Foxbit REST API 3.0')
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
    this.emitMarketQuotation()
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
    html.setText(JSON.stringify(message))
    this.children.data.append(html)
  }

  reemitMessage(message) {
    console.log('reemitMessage', message)
    if (message.input.header === 'Get a market quotation') {
      if (this.state.running) {
        this.emitMarketQuotation()
      }
    }
  }

  emitMarketQuotation() {
    const [base_currency, quote_currency] = this.children.market_symbol.getValue().toLowerCase().split('/')
    this.emitMessage({
      header: 'Get a market quotation',
      body: {
        Method: 'GET',
        Url: '/markets/quotes',
        Query: {
          side: 'buy',
          base_currency,
          quote_currency,
          amount: '1'
        },
        Body: {}
      }
    })
  }

  emitMessage(message) {
    this.state.socket.emit('message', message)
  }
}
