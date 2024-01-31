import { InputTextGroupComponent, SelectGroupComponent } from '../components/index.js'
import { Tab } from './Tab.js'
import * as lists from '../utils/lists.js'

export class SendOrderHTML extends Tab {
  path = 'SendOrder'

  children = {
    InstrumentId: new SelectGroupComponent('InstrumentId'),
    Side: new SelectGroupComponent('Side'),
    Quantity: new InputTextGroupComponent('Quantity'),
  }

  getInstrumentIdInputTextGroup() {
    lists.getInstrumentsList().map(({ InstrumentId, Symbol }) => this.children.InstrumentId.children.select.addOption(InstrumentId, Symbol))
    return this.children.InstrumentId
  }

  getSideInputTextGroup() {
    Array.from(['Buy', 'Sell', 'Short', 'unknown',]).map((side, ix) => this.children.Side.children.select.addOption(ix, side))
    return this.children.Side
  }

  getQuantityInputTextGroup() {
    return this.children.Quantity
  }

  getForm() {
    return [
      this.getInstrumentIdInputTextGroup(),
      this.getSideInputTextGroup(),
      this.getQuantityInputTextGroup(),
    ]
  }

  getBody() {
    return {
      InstrumentId: this.children.InstrumentId.getValue(),
      Side: this.children.Side.getValue(),
      Quantity: this.children.Quantity.getValue(),
    }
  }
}
