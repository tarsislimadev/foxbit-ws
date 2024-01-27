import { HTML, nH2, nInputTextGroup } from '@brtmvdl/frontend'
import { InputTextGroupComponent, ButtonComponent } from '../components/index.js'

import * as config from '../config.js'

export class Tab extends HTML {
  path = ''

  onCreate() {
    super.onCreate()
    this.setEvents()
    this.append(this.getTitleHTML())
    this.append(this.getForm())
    this.append(this.getButton())
  }

  setEvents() {
    this.on('message', ({ value }) => this.onEvent(value))
  }

  onEvent(value) {
    console.log('onEvent', value)
  }

  getTitleHTML() {
    const title = new nH2()
    title.setText(this.path)
    return title
  }

  getForm() {
    return new HTML()
  }

  getButton() {
    const button = new ButtonComponent()
    button.setText('Send')
    button.on('click', () => this.dispatchEvent('submit', { header: this.path, body: this.getBody() }))
    return button
  }

  getBody() {
    return { OMSId: 0 }
  }
}

export class AuthenticateUserHTML extends Tab {
  path = 'AuthenticateUser'

  children = {
    APIKey: new InputTextGroupComponent(),
    Nonce: new InputTextGroupComponent(),
    UserId: new InputTextGroupComponent(),
    Signature: new InputTextGroupComponent(),
  }

  getForm() {
    const form = new HTML()
    form.append(this.getAPIKeyInputTextGroup())
    form.append(this.getNonceInputTextGroup())
    form.append(this.getUserIdInputTextGroup())
    form.append(this.getSignatureInputTextGroup())
    return form
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
    this.children.APIKey.children.label.setText('APIKey')
    this.children.APIKey.children.input.setPlaceholder('APIKey')
    this.children.APIKey.children.input.setAttr('type', 'password')
    this.children.APIKey.children.input.setValue(config.access_key)
    return this.children.APIKey
  }

  getNonceInputTextGroup() {
    this.children.Nonce.children.label.setText('Nonce')
    this.children.Nonce.children.input.setPlaceholder('Nonce')
    return this.children.Nonce
  }

  getUserIdInputTextGroup() {
    this.children.UserId.children.label.setText('UserId')
    this.children.UserId.children.input.setPlaceholder('UserId')
    this.children.UserId.children.input.setValue(config.user_id)
    return this.children.UserId
  }

  getSignatureInputTextGroup() {
    this.children.Signature.children.label.setText('Signature')
    this.children.Signature.children.input.setPlaceholder('Signature')
    return this.children.Signature
  }
}

export class Authenticate2FAHTML extends Tab {
  path = 'Authenticate2FA'
}

export class CancelAllOrdersHTML extends Tab {
  path = 'CancelAllOrders'
}

export class CancelOrderHTML extends Tab {
  path = 'CancelOrder'
}

export class GetAccountInfoHTML extends Tab {
  path = 'GetAccountInfo'
}

export class GetAccountPositionsHTML extends Tab {
  path = 'GetAccountPositions'
}

export class GetAccountTradesHTML extends Tab {
  path = 'GetAccountTrades'
}

export class GetDepositTicketsHTML extends Tab {
  path = 'GetDepositTickets'
}

export class GetInstrumentHTML extends Tab {
  path = 'GetInstrument'
}

export class GetInstrumentsHTML extends Tab {
  path = 'GetInstruments'
}

export class GetOpenOrdersHTML extends Tab {
  path = 'GetOpenOrders'

  children = {
    OMSId: new InputTextGroupComponent(),
    AccountId: new InputTextGroupComponent(),
  }

  getForm() {
    const form = new HTML()
    form.append(this.getOMSIdInputTextGroup())
    form.append(this.getAccountIdInputTextGroup())
    return form
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

export class GetOrderFeeHTML extends Tab {
  path = 'GetOrderFee'
}

export class GetOrderHistoryHTML extends Tab {
  path = 'GetOrderHistory'
}

export class GetOrderStatusHTML extends Tab {
  path = 'GetOrderStatus'
}

export class GetProductsHTML extends Tab {
  path = 'GetProducts'
}

export class GetL2SnapshotHTML extends Tab {
  path = 'GetL2Snapshot'
}

export class GetTickerHistoryHTML extends Tab {
  path = 'GetTickerHistory'
}

export class GetTradesHistoryHTML extends Tab {
  path = 'GetTradesHistory'
}

export class GetUserInfoHTML extends Tab {
  path = 'GetUserInfo'
}

export class GetUserPermissionsHTML extends Tab {
  path = 'GetUserPermissions'
}

export class GetWithdrawTicketsHTML extends Tab {
  path = 'GetWithdrawTickets'
}

export class LogoutHTML extends Tab {
  path = 'Logout'
}

export class SendOrderHTML extends Tab {
  path = 'SendOrder'
}

export class SubscribeAccountEventsHTML extends Tab {
  path = 'SubscribeAccountEvents'
}

export class SubscribeLevel1HTML extends Tab {
  path = 'SubscribeLevel1'
}

export class SubscribeLevel1MarketsHTML extends Tab {
  path = 'SubscribeLevel1Markets'
}

export class SubscribeLevel2HTML extends Tab {
  path = 'SubscribeLevel2'
}

export class SubscribeTickerHTML extends Tab {
  path = 'SubscribeTicker'
}

export class SubscribeTradesHTML extends Tab {
  path = 'SubscribeTrades'
}

export class UnsubscribeLevel1HTML extends SubscribeLevel1HTML {
  path = 'UnsubscribeLevel1'
}

export class UnsubscribeLevel2HTML extends SubscribeLevel2HTML {
  path = 'UnsubscribeLevel2'
}

export class UnsubscribeTickerHTML extends SubscribeTickerHTML {
  path = 'UnsubscribeTicker'
}

export class UnsubscribeTradesHTML extends SubscribeTradesHTML {
  path = 'UnsubscribeTrades'
}
