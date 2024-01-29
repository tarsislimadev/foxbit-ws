import { InputTextGroupComponent, SelectGroupComponent } from '../components/index.js'
import { Tab } from './Tab.js'
import * as lists from '../utils/lists.js'

export class CreateOrderTab extends Tab {
  path = 'Create an order'

  children = {
    side: new SelectGroupComponent('side'),
    market_symbol: new SelectGroupComponent('market_symbol'),
    quantity: new InputTextGroupComponent('quantity'),
  }

  getMethod() {
    return 'POST'
  }

  getUrl() {
    return '/orders'
  }

  getSideInputTextGroup() {
    Array.from(['buy', 'sell']).map((side) => this.children.side.children.select.addOption(side, side))
    return this.children.side
  }

  getMarketSymbolSelectGroup() {
    lists.getInstrumentsList()
      .map(({ Symbol }) => this.children.market_symbol.children.select.addOption(Symbol.replace('/', ''), Symbol))
    return this.children.market_symbol
  }

  getQuantityInputTextGroup() {
    return this.children.quantity
  }


  getForm() {
    return [
      this.getSideInputTextGroup(),
      this.getMarketSymbolSelectGroup(),
      this.getQuantityInputTextGroup(),
    ]
  }

  getBody() {
    return {
      side: this.children.side.getValue(),
      type: 'MARKET',
      market_symbol: this.children.market_symbol.getValue(),
      quantity: this.children.quantity.getValue(),
    }
  }
}
