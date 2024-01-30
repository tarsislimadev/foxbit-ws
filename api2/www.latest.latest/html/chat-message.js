import { HTML } from '@brtmvdl/frontend'
import * as messages from './messages.js'

export class ChatMessage extends HTML {
  side = null
  header = null
  body = null

  constructor(side, header, body = {}) {
    super()
    this.side = side
    this.header = header
    this.body = body
  }

  getName() { return 'chat-message' }

  onCreate() {
    super.onCreate()
    this.setStyle('background-color', this.getBackgroundColorBySide())
    this.setStyle('padding', '1rem 0rem')
    this.setStyle('margin', '0rem 1rem 1rem 1rem')
    this.append(this.getHeaderHTML())
    this.append(this.getBodyHTML())
    this.append(this.getFooterHTML())
  }

  getBackgroundColorBySide() {
    return this.side == 'left' ? '#ff0000' : '#0000ff'
  }

  getHeaderHTML() {
    const header = new HTML()
    header.setStyle('padding', '0rem 1rem')
    header.setText(this.header)
    return header
  }

  getBodyHTML(content = this.body) {
    switch (this.header) {
      case 'Socket': return new messages.MessageBody(content)
    }
    return new messages.MessageBody(content)
  }

  getFooterHTML() {
    const footer = new HTML()
    footer.setStyle('padding', '0rem 1rem')
    const datetime = new Date()
    footer.setText(datetime.toLocaleString())
    return footer
  }
}

export class LeftMessage extends ChatMessage {
  constructor(header, body = {}) {
    super('left', header, body)
  }
}

export class RightMessage extends ChatMessage {
  constructor(header, body = {}) {
    super('right', header, body)
  }
}
