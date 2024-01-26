import { HTML, nButton, nFlex } from '@brtmvdl/frontend'
import 'socket.io'

export class Page extends HTML {
  children = {
    tab: new HTML()
  }

  state = {
    socket: io('localhost:8080'),
  }

  onCreate() {
    this.setEvents()
    this.append(this.getPageHTML())
  }

  getTabHTML(tab) {
    switch (tab) {
      case 'AuthenticateUser': new AuthenticateUserHTML()
      case 'Authenticate2FA': new Authenticate2FAHTML()
      case 'GetOrderHistory': new GetOrderHistoryHTML()
      case 'GetTickerHistory': new GetTickerHistoryHTML()
      case 'GetTradesHistory': new GetTradesHistoryHTML()
      case 'GetAccountInfo': new GetAccountInfoHTML()
      case 'GetAccountPositions': new GetAccountPositionsHTML()
      case 'GetAccountTrades': new GetAccountTradesHTML()
      case 'GetDepositTickets': new GetDepositTicketsHTML()
      case 'GetInstrument': new GetInstrumentHTML()
      case 'GetInstruments': new GetInstrumentsHTML()
      case 'GetOrderFee': new GetOrderFeeHTML()
      case 'GetOrderStatus': new GetOrderStatusHTML()
      case 'GetProducts': new GetProductsHTML()
      case 'GetL2Snapshot': new GetL2SnapshotHTML()
      case 'GetUserInfo': new GetUserInfoHTML()
      case 'GetUserPermissions': new GetUserPermissionsHTML()
      case 'GetWithdrawTickets': new GetWithdrawTicketsHTML()
      case 'Logout': new LogoutHTML()
      case 'SendOrder': new SendOrderHTML()
      case 'SubscribeAccountEvents': new SubscribeAccountEventsHTML()
      case 'SubscribeLevel1': new SubscribeLevel1HTML()
      case 'SubscribeLevel1Markets': new SubscribeLevel1MarketsHTML()
      case 'SubscribeLevel2': new SubscribeLevel2HTML()
      case 'SubscribeTicker': new SubscribeTickerHTML()
      case 'SubscribeTrades': new SubscribeTradesHTML()
      case 'UnsubscribeLevel1': new UnsubscribeLevel1HTML()
      case 'UnsubscribeLevel2': new UnsubscribeLevel2HTML()
      case 'UnsubscribeTicker': new UnsubscribeTickerHTML()
      case 'UnsubscribeTrades': new UnsubscribeTradesHTML()
      case 'CancelAllOrders': new CancelAllOrdersHTML()
      case 'GetOpenOrders': new GetOpenOrdersHTML()
      case 'CancelOrder': new CancelOrderHTML()
    }
  }

  onTab(tab) {
    // this.children.tab.clear()

    this.children.tab.append(this.getTabHTML(tab))
  }

  setEvents() {
    this.on('tab', ({ value: header }) => this.onTab(header))
  }

  getPageHTML() {
    const page = new HTML()
    page.setStyle('margin', '0 auto')
    page.setStyle('width', '40rem')
    page.append(this.getTitleHTML())
    page.append(this.getButton())
    page.append(this.getTabsHTML())
    this.append(page)
  }

  getTitleHTML() {
    const html = new HTML()
    html.setText('Foxbit websocket API 2.0')
    return html
  }

  getButton() {
    const button = new nButton()
    button.setText('socket')
    button.on('click', () => console.log('socket', this.state.socket.emit('AuthenticateUser', {})))
    return button
  }

  getTabsHTML() {
    const tabs = new HTML()
    tabs.append(this.getTabsHeaders())
    tabs.append(this.getTabsContents())
    return tabs
  }

  createTabHeader(header) {
    const html = new HTML()
    html.setText(header)
    html.setStyle('padding', '1rem')
    html.setStyle('cursor', 'pointer')
    html.on('click', () => this.dispatchEvent('tab', header))
    return html
  }

  getTabsHeaders() {
    const html = new nFlex()
    html.setStyle('overflow-y', 'auto')
    html.append(this.createTabHeader('AuthenticateUser'))
    html.append(this.createTabHeader('Authenticate2FA'))
    html.append(this.createTabHeader('CancelAllOrders'))
    html.append(this.createTabHeader('CancelOrder'))
    html.append(this.createTabHeader('GetAccountInfo'))
    html.append(this.createTabHeader('GetAccountPositions'))
    html.append(this.createTabHeader('GetAccountTrades'))
    html.append(this.createTabHeader('GetDepositTickets'))
    html.append(this.createTabHeader('GetInstrument'))
    html.append(this.createTabHeader('GetInstruments'))
    html.append(this.createTabHeader('GetOpenOrders'))
    html.append(this.createTabHeader('GetOrderFee'))
    html.append(this.createTabHeader('GetOrderHistory'))
    html.append(this.createTabHeader('GetOrderStatus'))
    html.append(this.createTabHeader('GetProducts'))
    html.append(this.createTabHeader('GetL2Snapshot'))
    html.append(this.createTabHeader('GetTickerHistory'))
    html.append(this.createTabHeader('GetTradesHistory'))
    html.append(this.createTabHeader('GetUserInfo'))
    html.append(this.createTabHeader('GetUserPermissions'))
    html.append(this.createTabHeader('GetWithdrawTickets'))
    html.append(this.createTabHeader('Logout'))
    html.append(this.createTabHeader('SendOrder'))
    html.append(this.createTabHeader('SubscribeAccountEvents'))
    html.append(this.createTabHeader('SubscribeLevel1'))
    html.append(this.createTabHeader('SubscribeLevel1Markets'))
    html.append(this.createTabHeader('SubscribeLevel2'))
    html.append(this.createTabHeader('SubscribeTicker'))
    html.append(this.createTabHeader('SubscribeTrades'))
    html.append(this.createTabHeader('UnsubscribeLevel1'))
    html.append(this.createTabHeader('UnsubscribeLevel2'))
    html.append(this.createTabHeader('UnsubscribeTicker'))
    html.append(this.createTabHeader('UnsubscribeTrades'))
    return html
  }

  getTabsContents() {
    return this.children.tab
  }
}

// 

export class AuthenticateUserHTML extends HTML {
  onCreate() {
    this.setText('AuthenticateUser')
  }
}

export class Authenticate2FAHTML extends HTML {
  onCreate() {
    this.setText('Authenticate2FA')
  }
}

export class CancelAllOrdersHTML extends HTML {
  onCreate() {
    this.setText('CancelAllOrders')
  }
}

export class CancelOrderHTML extends HTML {
  onCreate() {
    this.setText('CancelOrder')
  }
}

export class GetAccountInfoHTML extends HTML {
  onCreate() {
    this.setText('GetAccountInfo')
  }
}

export class GetAccountPositionsHTML extends HTML {
  onCreate() {
    this.setText('GetAccountPositions')
  }
}

export class GetAccountTradesHTML extends HTML {
  onCreate() {
    this.setText('GetAccountTrades')
  }
}

export class GetDepositTicketsHTML extends HTML {
  onCreate() {
    this.setText('GetDepositTickets')
  }
}

export class GetInstrumentHTML extends HTML {
  onCreate() {
    this.setText('GetInstrument')
  }
}

export class GetInstrumentsHTML extends HTML {
  onCreate() {
    this.setText('GetInstruments')
  }
}

export class GetOpenOrdersHTML extends HTML {
  onCreate() {
    this.setText('GetOpenOrders')
  }
}

export class GetOrderFeeHTML extends HTML {
  onCreate() {
    this.setText('GetOrderFee')
  }
}

export class GetOrderHistoryHTML extends HTML {
  onCreate() {
    this.setText('GetOrderHistory')
  }
}

export class GetOrderStatusHTML extends HTML {
  onCreate() {
    this.setText('GetOrderStatus')
  }
}

export class GetProductsHTML extends HTML {
  onCreate() {
    this.setText('GetProducts')
  }
}

export class GetL2SnapshotHTML extends HTML {
  onCreate() {
    this.setText('GetL2Snapshot')
  }
}

export class GetTickerHistoryHTML extends HTML {
  onCreate() {
    this.setText('GetTickerHistory')
  }
}

export class GetTradesHistoryHTML extends HTML {
  onCreate() {
    this.setText('GetTradesHistory')
  }
}

export class GetUserInfoHTML extends HTML {
  onCreate() {
    this.setText('GetUserInfo')
  }
}

export class GetUserPermissionsHTML extends HTML {
  onCreate() {
    this.setText('GetUserPermissions')
  }
}

export class GetWithdrawTicketsHTML extends HTML {
  onCreate() {
    this.setText('GetWithdrawTickets')
  }
}

export class LogoutHTML extends HTML {
  onCreate() {
    this.setText('Logout')
  }
}

export class SendOrderHTML extends HTML {
  onCreate() {
    this.setText('SendOrder')
  }
}

export class SubscribeAccountEventsHTML extends HTML {
  onCreate() {
    this.setText('SubscribeAccountEvents')
  }
}

export class SubscribeLevel1HTML extends HTML {
  onCreate() {
    this.setText('SubscribeLevel1')
  }
}

export class SubscribeLevel1MarketsHTML extends HTML {
  onCreate() {
    this.setText('SubscribeLevel1Markets')
  }
}

export class SubscribeLevel2HTML extends HTML {
  onCreate() {
    this.setText('SubscribeLevel2')
  }
}

export class SubscribeTickerHTML extends HTML {
  onCreate() {
    this.setText('SubscribeTicker')
  }
}

export class SubscribeTradesHTML extends HTML {
  onCreate() {
    this.setText('SubscribeTrades')
  }
}

export class UnsubscribeLevel1HTML extends HTML {
  onCreate() {
    this.setText('UnsubscribeLevel1')
  }
}

export class UnsubscribeLevel2HTML extends HTML {
  onCreate() {
    this.setText('UnsubscribeLevel2')
  }
}

export class UnsubscribeTickerHTML extends HTML {
  onCreate() {
    this.setText('UnsubscribeTicker')
  }
}

export class UnsubscribeTradesHTML extends HTML {
  onCreate() {
    this.setText('UnsubscribeTrades')
  }
}
