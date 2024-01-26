import { HTML } from '@brtmvdl/frontend'

import { InputTextGroupComponent, ButtonComponent } from '../components/index.js'

export class Tab extends HTML {
  path = ''

  getButton(getValue = (() => { })) {
    const button = new ButtonComponent()
    button.setText('Send')
    button.on('click', () => this.dispatchEvent('submit', { header: this.path, body: getValue() }))
    return button
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

  onCreate() {
    super.onCreate()
    this.append(this.getAPIKeyInputTextGroup())
    this.append(this.getNonceInputTextGroup())
    this.append(this.getUserIdInputTextGroup())
    this.append(this.getSignatureInputTextGroup())
    this.append(this.getButton(() => ({
      APIKey: this.children.APIKey.getValue(),
      Nonce: this.children.Nonce.getValue(),
      UserId: this.children.UserId.getValue(),
      Signature: this.children.Signature.getValue(),
    })))
  }

  getAPIKeyInputTextGroup() {
    this.children.APIKey.children.label.setText('APIKey')
    this.children.APIKey.children.input.setPlaceholder('APIKey')
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

  onCreate() {
    this.setText('Authenticate2FA')
  }
}

export class CancelAllOrdersHTML extends Tab {
  path = 'CancelAllOrders'

  onCreate() {
    this.setText('CancelAllOrders')
  }
}

export class CancelOrderHTML extends Tab {
  path = 'CancelOrder'

  onCreate() {
    this.setText('CancelOrder')
  }
}

export class GetAccountInfoHTML extends Tab {
  path = 'GetAccountInfo'

  onCreate() {
    this.setText('GetAccountInfo')
  }
}

export class GetAccountPositionsHTML extends Tab {
  path = 'GetAccountPositions'

  onCreate() {
    this.setText('GetAccountPositions')
  }
}

export class GetAccountTradesHTML extends Tab {
  path = 'GetAccountTrades'

  onCreate() {
    this.setText('GetAccountTrades')
  }
}

export class GetDepositTicketsHTML extends Tab {
  path = 'GetDepositTickets'

  onCreate() {
    this.setText('GetDepositTickets')
  }
}

export class GetInstrumentHTML extends Tab {
  path = 'GetInstrument'

  onCreate() {
    this.setText('GetInstrument')
  }
}

export class GetInstrumentsHTML extends Tab {
  path = 'GetInstruments'

  onCreate() {
    this.setText('GetInstruments')
  }
}

export class GetOpenOrdersHTML extends Tab {
  path = 'GetOpenOrders'

  onCreate() {
    this.setText('GetOpenOrders')
  }
}

export class GetOrderFeeHTML extends Tab {
  path = 'GetOrderFee'

  onCreate() {
    this.setText('GetOrderFee')
  }
}

export class GetOrderHistoryHTML extends Tab {
  path = 'GetOrderHistory'

  onCreate() {
    this.setText('GetOrderHistory')
  }
}

export class GetOrderStatusHTML extends Tab {
  path = 'GetOrderStatus'

  onCreate() {
    this.setText('GetOrderStatus')
  }
}

export class GetProductsHTML extends Tab {
  path = 'GetProducts'

  onCreate() {
    this.setText('GetProducts')
  }
}

export class GetL2SnapshotHTML extends Tab {
  path = 'GetL2Snapshot'

  onCreate() {
    this.setText('GetL2Snapshot')
  }
}

export class GetTickerHistoryHTML extends Tab {
  path = 'GetTickerHistory'

  onCreate() {
    this.setText('GetTickerHistory')
  }
}

export class GetTradesHistoryHTML extends Tab {
  path = 'GetTradesHistory'

  onCreate() {
    this.setText('GetTradesHistory')
  }
}

export class GetUserInfoHTML extends Tab {
  path = 'GetUserInfo'

  onCreate() {
    this.setText('GetUserInfo')
  }
}

export class GetUserPermissionsHTML extends Tab {
  path = 'GetUserPermissions'

  onCreate() {
    this.setText('GetUserPermissions')
  }
}

export class GetWithdrawTicketsHTML extends Tab {
  path = 'GetWithdrawTickets'

  onCreate() {
    this.setText('GetWithdrawTickets')
  }
}

export class LogoutHTML extends Tab {
  path = 'Logout'

  onCreate() {
    this.setText('Logout')
  }
}

export class SendOrderHTML extends Tab {
  path = 'SendOrder'

  onCreate() {
    this.setText('SendOrder')
  }
}

export class SubscribeAccountEventsHTML extends Tab {
  path = 'SubscribeAccountEvents'

  onCreate() {
    this.setText('SubscribeAccountEvents')
  }
}

export class SubscribeLevel1HTML extends Tab {
  path = 'SubscribeLevel1'

  onCreate() {
    this.setText('SubscribeLevel1')
  }
}

export class SubscribeLevel1MarketsHTML extends Tab {
  path = 'SubscribeLevel1Markets'

  onCreate() {
    this.setText('SubscribeLevel1Markets')
  }
}

export class SubscribeLevel2HTML extends Tab {
  path = 'SubscribeLevel2'

  onCreate() {
    this.setText('SubscribeLevel2')
  }
}

export class SubscribeTickerHTML extends Tab {
  path = 'SubscribeTicker'

  onCreate() {
    this.setText('SubscribeTicker')
  }
}

export class SubscribeTradesHTML extends Tab {
  path = 'SubscribeTrades'

  onCreate() {
    this.setText('SubscribeTrades')
  }
}

export class UnsubscribeLevel1HTML extends Tab {
  path = 'UnsubscribeLevel1'

  onCreate() {
    this.setText('UnsubscribeLevel1')
  }
}

export class UnsubscribeLevel2HTML extends Tab {
  path = 'UnsubscribeLevel2'

  onCreate() {
    this.setText('UnsubscribeLevel2')
  }
}

export class UnsubscribeTickerHTML extends Tab {
  path = 'UnsubscribeTicker'

  onCreate() {
    this.setText('UnsubscribeTicker')
  }
}

export class UnsubscribeTradesHTML extends Tab {
  path = 'UnsubscribeTrades'

  onCreate() {
    this.setText('UnsubscribeTrades')
  }
}
