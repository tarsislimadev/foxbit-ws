import { HTML } from '@brtmvdl/frontend'
import { InputTextGroupComponent, SelectGroupComponent } from '../components/index.js'
import { getInstrumentsList } from '../utils/lists.js'
import { Tab } from './Tab.js'

export class GetOrderBookTab extends Tab {
  path = 'Get order book'

  children = {
    market_symbol: new SelectGroupComponent('market_symbol'),
    depth: new InputTextGroupComponent('depth'),
  }

  getMarketSymbolSelectGroup() {
    getInstrumentsList()
      .map(({ Symbol }) => Symbol.toString().replace('/', ''))
      .map((Symbol) => this.children.market_symbol.children.select.addOption(Symbol, Symbol))
    return this.children.market_symbol
  }

  getDepthInputTextGroup() {
    this.children.depth.children.input.setValue(100)
    return this.children.depth
  }

  getForm() {
    return [
      this.getMarketSymbolSelectGroup(),
      this.getDepthInputTextGroup(),
    ]
  }

  getMarketSymbolValue() {
    return this.children.market_symbol.getValue()
  }

  getUrl() {
    return `/markets/${this.getMarketSymbolValue()}/orderbook`
  }

  getQuery() {
    return {
      market_symbol: this.getMarketSymbolValue(),
      depth: this.children.depth.getValue(),
    }
  }
}
