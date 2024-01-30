import { HTML } from '@brtmvdl/frontend'
import { Tab } from './Tab.js'
import { SelectGroupComponent } from '../select-group.js'
import * as lists from '../utils/lists.js'

export class GetInstrumentHTML extends Tab {
  path = 'GetInstrument'

  children = {
    InstrumentId: new SelectGroupComponent('InstrumentId'),
  }

  getInstrumentIdInputTextGroup() {
    lists.getInstrumentsList().map(({ InstrumentId, Symbol }) => this.children.InstrumentId.children.select.addOption(InstrumentId, Symbol))
    return this.children.InstrumentId
  }

  getForm() {
    return [
      this.getInstrumentIdInputTextGroup(),
    ]
  }

  getBody() {
    return {
      InstrumentId: this.children.InstrumentId.getValue(),
    }
  }
}
