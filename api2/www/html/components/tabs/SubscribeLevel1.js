import { Tab } from './Tab.js'
import { InputTextGroupComponent, SelectGroupComponent } from '../components/index.js'
import * as lists from '../utils/lists.js'

export class SubscribeLevel1HTML extends Tab {
  path = 'SubscribeLevel1'
  children = {
    InstrumentId: new SelectGroupComponent(),
    MarketId: new InputTextGroupComponent()
  }

  getInstrumentIdInputTextGroup() {
    lists.getInstrumentsList().map(({ InstrumentId, Symbol }) => this.children.InstrumentId.children.select.addOption(InstrumentId, Symbol))
    return this.children.InstrumentId
  }

  getMarketIdInputTextGroup() {
    this.children.MarketId.children.input.setValue('btcbrl')
    return this.children.MarketId
  }

  getForm() {
    return [
      this.getInstrumentIdInputTextGroup(),
      this.getMarketIdInputTextGroup(),
    ]
  }

  getBody() {
    return {
      InstrumentId: this.children.InstrumentId.getValue(),
      MarketId: this.children.MarketId.getValue(),
    }
  }
}
