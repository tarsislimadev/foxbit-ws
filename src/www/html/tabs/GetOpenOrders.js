import { Tab } from './Tab.js'

export class GetOpenOrdersHTML extends Tab {
  path = 'GetOpenOrders'
  children = {
    OMSId: new InputTextGroupComponent(),
    AccountId: new InputTextGroupComponent(),
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
    this.children.OMSId.children.label.setText('OMSId')
    this.children.OMSId.children.input.setPlaceholder('OMSId')
    return this.children.OMSId
  }

  getAccountIdInputTextGroup() {
    this.children.AccountId.children.label.setText('AccountId')
    this.children.AccountId.children.input.setPlaceholder('AccountId')
    return this.children.AccountId
  }
}
