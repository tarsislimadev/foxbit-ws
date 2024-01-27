import { Tab } from './Tab.js'
import { InputTextGroupComponent } from '../components/index.js'
import * as config from '../config.js'

export class GetAccountInfoHTML extends Tab {
  path = 'GetAccountInfo'

  children = {
    OMSId: new InputTextGroupComponent('OMSId'),
    AccountId: new InputTextGroupComponent('AccountId'),
  }

  getOMSIdInputTextGroup() {
    return this.children.OMSId
  }

  getAccountIdInputTextGroup() {
    this.children.AccountId.children.input.setValue(config.user_id)
    return this.children.AccountId
  }

  getForm() {
    return [
      this.getOMSIdInputTextGroup(),
      this.getAccountIdInputTextGroup(),
    ]
  }

  getBody() {
    return {
      OMSId: this.children.OMSId.children.input.getValue(),
      AccountId: this.children.AccountId.children.input.getValue(),
    }
  }
}
