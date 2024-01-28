import { InputTextGroupComponent, SelectGroupComponent } from '../components/index.js'
import { getInstrumentsList } from '../utils/lists.js'
import { getTime } from '../utils/datetime.js'
import { Tab } from './Tab.js'

export class GetCandlesticksTab extends Tab {
  path = 'Get candlesticks'

  children = {
    market_symbol: new SelectGroupComponent('market_symbol'),
    interval: new SelectGroupComponent('interval'),
    start_time: new InputTextGroupComponent('start_time'),
    end_time: new InputTextGroupComponent('end_time'),
    limit: new InputTextGroupComponent('limit'),
  }

  getMarketSymbolInputTextGroup() {
    getInstrumentsList()
      .map(({ Symbol }) => Symbol.toString().replace('/', ''))
      .map((Symbol) => this.children.market_symbol.children.select.addOption(Symbol, Symbol))
    return this.children.market_symbol
  }

  getIntervalInputTextGroup() {
    Array.from(['1m', '5m', '15m', '30m', '1h', '2h', '4h', '6h', '12h', '1d', '1w', '2w', '1M']).map((interval) => this.children.interval.children.select.addOption(interval, interval))
    return this.children.interval
  }

  getStartTimeInputTextGroup() {
    this.children.start_time.children.input.setValue(getTime(60 * 60 * 24 * 30))
    return this.children.start_time
  }

  getEndTimeInputTextGroup() {
    this.children.end_time.children.input.setValue(getTime())
    return this.children.end_time
  }

  getLimitInputTextGroup() {
    this.children.limit.children.input.setValue(500)
    return this.children.limit
  }

  getForm() {
    return [
      this.getMarketSymbolInputTextGroup(),
      this.getIntervalInputTextGroup(),
      this.getStartTimeInputTextGroup(),
      this.getEndTimeInputTextGroup(),
      this.getLimitInputTextGroup(),
    ]
  }

  getMarketSymbolInputTextGroupValue() {
    return this.children.market_symbol.getValue()
  }

  getUrl() {
    const market_symbol = this.getMarketSymbolInputTextGroupValue()
    return `/markets/${market_symbol}/candlesticks`
  }

  getQuery() {
    return {
      interval: this.children.interval.getValue(),
      start_time: this.children.start_time.getValue(),
      end_time: this.children.end_time.getValue(),
      limit: this.children.limit.getValue(),
    }
  }
}
