import { HTML, nFlex, nLink } from '@brtmvdl/frontend'

export class MenuHTML extends HTML {
  onCreate() {
    this.setStyles()
    this.append(this.getList())
  }

  setStyles() {
    this.setStyle('background-color', '#000000')
  }

  createItemLink(href, text) {
    const link = new nLink()
    link.on('click', () => this.dispatchEvent('menu', { href }))
    link.setStyle('background-color', '#000000')
    link.setStyle('display', 'inline-block')
    link.setStyle('color', '#ffffff')
    link.setStyle('padding', '1rem')
    link.href(`#${href}`)
    link.setText(text)
    return link
  }

  getList() {
    const list = new HTML()
    Array.from([
      ['Index', 'Foxbit WS'],
      ['AuthenticateUser', 'AuthenticateUser'],
      ['GetAccountInfo', 'GetAccountInfo'],
      ['GetUserInfo', 'GetUserInfo'],
      ['GetTradesHistory', 'GetTradesHistory'],
      ['GetTickerHistory', 'GetTickerHistory'],
    ]).map(([href, text]) => list.append(this.createItemLink(href, text)))
    return list
  }
}
