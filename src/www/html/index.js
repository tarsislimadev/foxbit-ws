import { HTML, nFlex, nLink } from '@brtmvdl/frontend'

class MenuHTML extends HTML {
  onCreate() {
    this.setStyles()
    this.append(this.getList())
  }

  setStyles() {
    this.setStyle('background-color', '#000000')
  }

  getList() {
    const self = this

    const list = new HTML()
    Array.from([
      ['Index', 'Foxbit WS'],
      ['GetUserInfo', 'GetUserInfo'],
      ['GetTradesHistory', 'GetTradesHistory'],
      ['GetTickerHistory', 'GetTickerHistory'],
    ]).map(([href, text]) => {
      const link = new nLink()
      link.setStyle('background-color', '#000000')
      link.setStyle('display', 'inline-block')
      link.setStyle('color', '#ffffff')
      link.setStyle('padding', '1rem')
      link.on('click', () => self.dispatchEvent('menu', { href }))
      link.href(`#${href}`)
      link.setText(text)
      return link
    }).map((link) => list.append(link))
    return list
  }
}

class TabsHTML extends HTML { }

class Tab extends HTML {
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

class IndexTab extends Tab {
  getTabTitle() { return 'Foxbit WS' }
}

class GetUserInfoTab extends Tab {
  getTabTitle() { return 'Get User Info Tab' }
}

class GetTradesHistoryTab extends Tab {
  getTabTitle() { return 'Get Trades History Tab' }
}

class GetTickerHistoryTab extends Tab {
  getTabTitle() { return 'Get Ticker History' }
}

export class Page extends nFlex {
  children = {
    menu: new MenuHTML(),
    tabs: new TabsHTML(),
  }

  onCreate() {
    this.setStyles()
    this.append(this.getMenu())
    this.append(this.getTabs())
    this.setTab()
  }

  setStyles() {
    this.setStyle('font-family', 'sans-serif')
  }

  getTabByName(tab) {
    console.log('getTabByName', { tab })

    switch (tab) {
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
    return this.children.menu
  }

  getTabs() {
    return this.children.tabs
  }
}
