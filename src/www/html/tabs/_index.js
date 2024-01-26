import { HTML, nFlex, nButton, nInputTextGroup } from '@brtmvdl/frontend'

export class Tab extends HTML {
  path = ''

  onCreate() {
    this.append(this.getTitle())
  }

  getTitle() {
    const title = new HTML()
    title.setText(this.path)
    return title
  }

  getAllData() {
    return {}
  }

  getSaveButton() {
    const { path } = this
    const button = new nButton()
    button.on('click', () => this.dispatchEvent('save', { path, body: this.getAllData() }))
    button.setText('save')
    return button
  }

  getSendButton() {
    const { path } = this
    const button = new nButton()
    button.on('click', () => this.dispatchEvent('send', { path, body: this.getAllData() }))
    button.setText('send')
    return button
  }

  getButtons() {
    const flex = new HTML()
    flex.append(this.getSaveButton())
    flex.append(this.getSendButton())
    return flex
  }
}

export class IndexTab extends Tab {
  path = 'Index'
}

export class AuthenticateUserTab extends Tab {
  path = 'AuthenticateUser'

  children = {
    apikey: new nInputTextGroup(),
    nonce: new nInputTextGroup(),
    userid: new nInputTextGroup(),
    signature: new nInputTextGroup(),
  }

  onCreate() {
    super.onCreate()
    this.append(this.getAPIKey())
    this.append(this.getNonce())
    this.append(this.getUserId())
    this.append(this.getSignature())
    this.append(this.getButtons())
  }

  getAPIKey() {
    this.children.apikey.children.label.setText('APIKey')
    return this.children.apikey
  }

  getNonce() {
    this.children.nonce.children.label.setText('Nonce')
    return this.children.nonce
  }

  getUserId() {
    this.children.userid.children.label.setText('UserId')
    return this.children.userid
  }

  getSignature() {
    this.children.signature.children.label.setText('Signature')
    return this.children.signature
  }

  getAllData() {
    const apikey = this.children.apikey.children.input.getValue()
    const nonce = this.children.nonce.children.input.getValue()
    const userid = this.children.userid.children.input.getValue()
    const signature = this.children.signature.children.input.getValue()

    return { apikey, nonce, userid, signature }
  }
}

export class Authenticate2FATab extends Tab {
  path = 'Authenticate2FA'
}

export class CancelAllOrdersTab extends Tab {
  path = 'CancelAllOrders'
}

export class CancelOrderTab extends Tab {
  path = 'CancelOrder'
}

export class GetAccountInfoTab extends Tab {
  path = 'GetAccountInfo'
}

export class GetAccountPositionsTab extends Tab {
  path = 'GetAccountPositions'
}

export class GetAccountTradesTab extends Tab {
  path = 'GetAccountTrades'
}

export class GetDepositTicketsTab extends Tab {
  path = 'GetDepositTickets'
}

export class GetInstrumentTab extends Tab {
  path = 'GetInstrument'
}

export class GetInstrumentsTab extends Tab {
  path = 'GetInstruments'
}

export class GetOpenOrdersTab extends Tab {
  path = 'GetOpenOrders'
}

export class GetOrderFeeTab extends Tab {
  path = 'GetOrderFee'
}

export class GetOrderHistoryTab extends Tab {
  path = 'GetOrderHistory'
}

export class GetOrderStatusTab extends Tab {
  path = 'GetOrderStatus'
}

export class GetProductsTab extends Tab {
  path = 'GetProducts'
}

export class GetL2SnapshotTab extends Tab {
  path = 'GetL2Snapshot'
}

export class GetTickerHistoryTab extends Tab {
  path = 'GetTickerHistory'
}

export class GetTradesHistoryTab extends Tab {
  path = 'GetTradesHistory'
}

export class GetUserInfoTab extends Tab {
  path = 'GetUserInfo'
}

export class GetUserPermissionsTab extends Tab {
  path = 'GetUserPermissions'
}

export class GetWithdrawTicketsTab extends Tab {
  path = 'GetWithdrawTickets'
}

export class LogoutTab extends Tab {
  path = 'Logout'
}

export class SendOrderTab extends Tab {
  path = 'SendOrder'
}

export class SubscribeAccountEventsTab extends Tab {
  path = 'SubscribeAccountEvents'
}

export class SubscribeLevel1Tab extends Tab {
  path = 'SubscribeLevel1'
}

export class SubscribeLevel1MarketsTab extends Tab {
  path = 'SubscribeLevel1Markets'
}

export class SubscribeLevel2Tab extends Tab {
  path = 'SubscribeLevel2'
}

export class SubscribeTickerTab extends Tab {
  path = 'SubscribeTicker'
}

export class SubscribeTradesTab extends Tab {
  path = 'SubscribeTrades'
}

export class UnsubscribeLevel1Tab extends Tab {
  path = 'UnsubscribeLevel1'
}

export class UnsubscribeLevel2Tab extends Tab {
  path = 'UnsubscribeLevel2'
}

export class UnsubscribeTickerTab extends Tab {
  path = 'UnsubscribeTicker'
}

export class UnsubscribeTradesTab extends Tab {
  path = 'UnsubscribeTrades'
}
