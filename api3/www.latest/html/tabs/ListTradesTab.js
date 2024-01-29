import { HTML } from '@brtmvdl/frontend'
import { InputTextGroupComponent, SelectGroupComponent } from '../components/index.js'
import { getInstrumentsList } from '../utils/lists.js'
import { MONTH, getISO8601, getTime } from '../utils/datetime.js'
import { Tab } from './Tab.js'

export class ListTradesTab extends Tab {
  path = 'List trades'

  children = {
    start_time: new InputTextGroupComponent('start_time'),
    end_time: new InputTextGroupComponent('end_time'),
    page_size: new InputTextGroupComponent('page_size'),
    page: new InputTextGroupComponent('page'),
    market_symbol: new SelectGroupComponent('market_symbol'),
    order_sn: new InputTextGroupComponent('order_sn'),
    order_id: new InputTextGroupComponent('order_id'),
  }


  getStartTimeInputTextGroup() {
    this.children.start_time.children.input.setValue(getISO8601(MONTH))
    return this.children.start_time
  }

  getEndTimeInputTextGroup() {
    this.children.end_time.children.input.setValue(getISO8601())
    return this.children.end_time
  }

  getPageSizeInputTextGroup() {
    this.children.page_size.children.input.setValue(100)
    return this.children.page_size
  }

  getPageInputTextGroup() {
    this.children.page.children.input.setValue(1)
    return this.children.page
  }

  getMarketSymbolInputTextGroup() {
    getInstrumentsList()
      .map(({ Symbol }) => Symbol.toString().replace('/', ''))
      .map((Symbol) => this.children.market_symbol.children.select.addOption(Symbol, Symbol))
    return this.children.market_symbol
  }

  getOrderSNInputTextGroup() {
    return this.children.order_sn
  }

  getOrderIdInputTextGroup() {
    return this.children.order_id
  }

  getForm() {
    return [
      this.getStartTimeInputTextGroup(),
      this.getEndTimeInputTextGroup(),
      this.getPageSizeInputTextGroup(),
      this.getPageInputTextGroup(),
      this.getMarketSymbolInputTextGroup(),
      this.getOrderSNInputTextGroup(),
      this.getOrderIdInputTextGroup(),
    ]
  }

  getUrl() { return '/trades' }

  getQuery() {
    return {
      start_time: this.children.start_time.getValue(),
      end_time: this.children.end_time.getValue(),
      page_size: this.children.page_size.getValue(),
      page: this.children.page.getValue(),
      market_symbol: this.children.market_symbol.getValue(),
      order_sn: this.children.order_sn.getValue(),
      order_id: this.children.order_id.getValue(),
    }
  }
}
