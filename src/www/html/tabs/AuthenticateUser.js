import { Tab } from './Tab.js'
import { InputTextGroupComponent } from '../components/index.js'
import * as config from '../config.js'

export class AuthenticateUserHTML extends Tab {
  path = 'AuthenticateUser'

  children = {
    APIKey: new InputTextGroupComponent('APIKey'),
    Nonce: new InputTextGroupComponent('Nonce'),
    UserId: new InputTextGroupComponent('UserId'),
    Signature: new InputTextGroupComponent('Signature'),
  }

  getForm() {
    return [
      this.getAPIKeyInputTextGroup(),
      this.getNonceInputTextGroup(),
      this.getUserIdInputTextGroup(),
      this.getSignatureInputTextGroup(),
    ]
  }

  getBody() {
    return {
      APIKey: this.children.APIKey.getValue(),
      Nonce: this.children.Nonce.getValue(),
      UserId: this.children.UserId.getValue(),
      Signature: this.children.Signature.getValue(),
    }
  }

  getAPIKeyInputTextGroup() {
    this.children.APIKey.children.input.setAttr('type', 'password')
    this.children.APIKey.children.input.setValue(config.access_key)
    return this.children.APIKey
  }

  getNonceInputTextGroup() {
    return this.children.Nonce
  }

  getUserIdInputTextGroup() {
    this.children.UserId.children.input.setValue(config.UserId)
    return this.children.UserId
  }

  getSignatureInputTextGroup() {
    return this.children.Signature
  }
}
