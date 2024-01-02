import { HTML, nFlex, nLink } from '@brtmvdl/frontend'

import { MenuHTML, TabsHTML } from './components/index.js'

import { IndexTab, AuthenticateUserTab, GetAccountInfoTab, GetUserInfoTab, GetTradesHistoryTab, GetTickerHistoryTab } from './tabs/index.js'

export class Page extends nFlex {
  children = {
    menu: new MenuHTML(),
    tabs: new TabsHTML(),
  }

  onCreate() {
    this.setStyles()
    const flex = new nFlex()
    flex.append(this.getMenu())
    flex.append(this.getTabs())
    this.append(flex)
    this.setTab()
  }

  setStyles() {
    this.setStyle('font-family', 'sans-serif')
  }

  getTabByName(tab) {
    console.log('getTabByName', { tab })

    switch (tab) {
      case 'AuthenticateUser': return new AuthenticateUserTab()
      case 'GetAccountInfo': return new GetAccountInfoTab()
      case 'GetUserInfo': return new GetUserInfoTab()
      case 'GetTradesHistory': return new GetTradesHistoryTab()
      case 'GetTickerHistory': return new GetTickerHistoryTab()
    }

    return new IndexTab()
  }

  setTab(tab = 'Index') {
    this.children.tabs.clear()
    this.children.tabs.append(this.getTabByName(tab))
  }

  getMenu() {
    this.children.menu.on('menu', ({ value: { href } }) => this.setTab(href))
    this.children.menu.setStyle('padding', '1rem')
    this.children.menu.setStyle('width', '20rem')
    return this.children.menu
  }

  getTabs() {
    this.children.tabs.setStyle('padding', '1rem')
    this.children.tabs.setStyle('width', '77rem')
    return this.children.tabs
  }
}
