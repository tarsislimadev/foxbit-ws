import { HTML } from '@brtmvdl/frontend'
import { TextHTML } from './text.js'

export class ChatMessage extends HTML {
  side = 'input'
  header = null
  body = null

  constructor({ header, body = {} } = {}) {
    super()
    this.header = header
    this.body = body
  }

  onCreate() {
    super.onCreate()
    this.setStyles()
    this.append(this.createTextHTML(this.header))
    this.append(this.getBodyHTML())
    this.append(this.createTextHTML(this.getDatetime()))
  }

  setStyles() {
    this.setStyle('box-shadow', 'inset 0rem 0rem 0rem calc(1rem / 8) ' + this.getForegroundColor())
    this.setStyle('background-color', this.getBackgroundColor())
    this.setStyle('color', this.getForegroundColor())
    this.setStyle('border-radius', 'calc(1rem / 2)')
    this.setStyle('padding', '1rem 0rem 0rem 0rem')
    this.setStyle('margin', '1rem')
  }

  getBackgroundColor() {
    return this.side == 'input' ? '#ffffff' : '#000000'
  }

  getForegroundColor() {
    return this.side == 'input' ? '#000000' : '#ffffff'
  }

  createTextHTML(text = '') {
    const html = new HTML()
    html.setStyle('padding', '0rem 1rem 1rem 1rem')
    html.setText(text)
    return html
  }

  getBodyHTML() {
    console.info('message', this.side, this.header, this.body)

    switch (this.header) {
      case 'Socket': return new SocketBodyMessage(this.body)
      case 'AuthenticateUser': return new AuthenticateUserBodyMessage(this.body)
    }

    return new HTML()
  }

  getDatetime(datetime = new Date()) {
    return datetime.toLocaleString()
  }
}

export class InputMessage extends ChatMessage { }

export class OutputMessage extends ChatMessage {
  side = 'output'
}

export class BodyMessage extends HTML {
  body = null

  constructor(body = null) {
    super()
    this.body = body
  }

  onCreate() {
    super.onCreate()
    this.setStyle('padding', '0rem 1rem 1rem 1rem')
  }
}

export class SocketBodyMessage extends BodyMessage {
  onCreate() {
    super.onCreate()
    this.setText(`Id: ${this.body.Id}`)
  }
}

export class AuthenticateUserBodyMessage extends BodyMessage {
  onCreate() {
    super.onCreate()
    this.append(new TextHTML(`Authenticated: ${this.body.Authenticated}`))
    this.append(new TextHTML(`TwoFAType: ${this.body.TwoFAType}`))
    this.append(new TextHTML(`UserId: ${this.body.User?.UserId}`))
    this.append(new TextHTML(`AccountId: ${this.body.User?.AccountId}`))
    this.append(new TextHTML(`OMSId: ${this.body.User?.OMSId}`))
  }
}
