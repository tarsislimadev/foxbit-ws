import { HTML } from '@brtmvdl/frontend'
import { Tab } from './Tab.js'
import { InputTextGroupComponent } from '../components/index.js'

export class GetAccountTradesHTML extends Tab {
  path = 'GetAccountTrades'
  children = {
    OMSId: new InputTextGroupComponent('OMSId'),
    AccountId: new InputTextGroupComponent('AccountId'),
    StartIndex: new InputTextGroupComponent('StartIndex'),
    Count: new InputTextGroupComponent('Count'),
  }

  getOMSIdInputTextGroup() {
    this.children.OMSId.children.input.setValue(0)
    return this.children.OMSId
  }

  getAccountIdInputTextGroup() {
    this.children.AccountId.children.input.setAttr('type', 'password')
    return this.children.AccountId
  }

  getStartIndexInputTextGroup() {
    this.children.StartIndex.children.input.setValue(0)
    return this.children.StartIndex
  }

  getCountInputTextGroup() {
    this.children.Count.children.input.setValue(200)
    return this.children.Count
  }

  getForm() {
    return [
      this.getOMSIdInputTextGroup(),
      this.getAccountIdInputTextGroup(),
      this.getStartIndexInputTextGroup(),
      this.getCountInputTextGroup(),
    ]
  }

  getBody() {
    return {
      OMSId: this.children.OMSId.getValue(),
      AccountId: this.children.AccountId.getValue(),
      StartIndex: this.children.StartIndex.getValue(),
      Count: this.children.Count.getValue(),
    }
  }
}
