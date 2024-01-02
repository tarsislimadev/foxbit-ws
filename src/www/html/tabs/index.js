import { HTML } from '@brtmvdl/frontend'

export class Tab extends HTML {
  onCreate() {
    this.append(this.getTitle())
  }

  getTabTitle() {
    return 'Tab'
  }

  getTitle() {
    const title = new HTML()
    title.setText(this.getTabTitle())
    return title
  }
}

export class IndexTab extends Tab {
  getTabTitle() { return 'Foxbit WS' }
}

export class GetAccountInfoTab extends Tab {
  getTabTitle() { return 'Get Account Info Tab' }
}

export class AuthenticateUserTab extends Tab {
  getTabTitle() { return 'Authenticate User Tab' }
}

export class GetUserInfoTab extends Tab {
  getTabTitle() { return 'Get User Info Tab' }
}

export class GetTradesHistoryTab extends Tab {
  getTabTitle() { return 'Get Trades History Tab' }
}

export class GetTickerHistoryTab extends Tab {
  getTabTitle() { return 'Get Ticker History' }
}
