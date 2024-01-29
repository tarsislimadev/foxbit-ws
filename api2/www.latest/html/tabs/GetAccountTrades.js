import { HTML } from '@brtmvdl/frontend'
import { Tab } from './Tab.js'
import { InputTextGroupComponent } from '../components/index.js'

export class GetAccountTradesHTML extends Tab {
  path = 'GetAccountTrades'
  children = {
    StartIndex: new InputTextGroupComponent('StartIndex'),
    Count: new InputTextGroupComponent('Count'),
  }

  getStartIndexInputTextGroup() {
    this.children.StartIndex.children.input.setValue(0)
    return this.children.StartIndex
  }

  getCountInputTextGroup() {
    this.children.Count.children.input.setValue(1)
    return this.children.Count
  }

  getForm() {
    return [
      this.getStartIndexInputTextGroup(),
      this.getCountInputTextGroup(),
    ]
  }

  getBody() {
    return {
      StartIndex: this.children.StartIndex.getValue(),
      Count: this.children.Count.getValue(),
    }
  }
}
