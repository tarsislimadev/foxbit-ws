import { Tab } from './Tab.js'
import { InputTextGroupComponent, SelectGroupComponent } from '../index.js'
import * as lists from '../utils/lists.js'

export class GetTickerHistoryHTML extends Tab {
  path = 'GetTickerHistory'

  children = {
    InstrumentId: new SelectGroupComponent('InstrumentId'),
    Interval: new InputTextGroupComponent('Interval'),
    FromDate: new InputTextGroupComponent('FromDate'),
    ToDate: new InputTextGroupComponent('ToDate'),
  }

  getForm() {
    return [
      this.getInstrumentIdInputTextGroup(),
      this.getIntervalInputTextGroup(),
      this.getFromDateInputTextGroup(),
      this.getToDateInputTextGroup(),
    ]
  }

  getInstrumentIdInputTextGroup() {
    lists.getInstrumentsList().map(({ InstrumentId, Symbol }) => this.children.InstrumentId.children.select.addOption(InstrumentId, Symbol))
    return this.children.InstrumentId
  }

  getIntervalInputTextGroup() {
    return this.children.Interval
  }

  getFromDateInputTextGroup() {
    return this.children.FromDate
  }

  getToDateInputTextGroup() {
    return this.children.ToDate
  }

  getBody() {
    return {
      InstrumentId: this.children.InstrumentId.getValue(),
      Interval: this.children.Interval.getValue(),
      FromDate: this.children.FromDate.getValue(),
      ToDate: this.children.ToDate.getValue(),
    }
  }
}
