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
  }

  onCreate() {
    this.setSocketEvents()
    this.append(new TitleH2Component())
    this.append(this.getMarketSymbolSelectGroup())
    this.append(this.getStartButton())
    this.append(this.getStopButton())
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
    this.emitMessage()
  }

  setRunning(running) {
    this.state.running = running
  }

  emitMessage() {
    this.state.socket.emit('message', this.createMessage())
  }

  createMessage() {
    const [base_currency, quote_currency] = this.children.market_symbol.getValue().toLowerCase().split('/')
    return {
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
    }
  }

  onMessage(message) {
    console.log('onMessage', message)
    this.showMessage(message)
    if (this.state.running) this.emitMessage()
  }

  showMessage(message) {
    console.log('showMessage', message)
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

  onSubmit(message) {
    console.log('onSubmit', message)
    this.state.socket.emit('message', message)
  }

  setSocketEvents() {
    this.state.socket.on('message', (data) => this.onMessage(data))
  }
}
