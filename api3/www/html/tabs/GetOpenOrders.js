import { Tab } from './Tab.js'
import { InputTextGroupComponent } from '../components/index.js'

export class GetOpenOrdersHTML extends Tab {
  path = 'GetOpenOrders'

  children = {
    OMSId: new InputTextGroupComponent('OMSId'),
    AccountId: new InputTextGroupComponent('AccountId'),
  }

  getForm() {
    return [
      this.getOMSIdInputTextGroup(),
      this.getAccountIdInputTextGroup(),
    ]
  }

  getBody() {
    return {
      OMSId: this.children.OMSId.getValue(),
      AccountId: this.children.AccountId.getValue(),
    }
  }

  getOMSIdInputTextGroup() {
    return this.children.OMSId
  }

  getAccountIdInputTextGroup() {
    return this.children.AccountId
  }
}
