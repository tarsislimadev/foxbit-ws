import { HTML } from '@brtmvdl/frontend'
import { SelectGroupComponent } from '../components/index.js'
import { Tab } from './Tab.js'
import * as lists from '../utils/lists.js'

export class SubscribeTradesHTML extends Tab {
  path = 'SubscribeTrades'

  children = {
    InstrumentId: new SelectGroupComponent('InstrumentId'),
  }

  getForm() {
    return [this.getInstrumentIdInputTextGroup(),]
  }

  getInstrumentIdInputTextGroup() {
    lists.getInstrumentsList().map(({ InstrumentId, Symbol }) => this.children.InstrumentId.children.select.addOption(InstrumentId, Symbol))
    return this.children.InstrumentId
  }

  getBody() {
    return {
      OMSId: 1,
      InstrumentId: this.children.InstrumentId.getValue(),
      IncludeLastCount: 100,
    }
  }
}
