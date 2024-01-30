import { HTML } from '@brtmvdl/frontend'

export class ChatMessage extends HTML {
  side = 'left'
  header = null
  body = null

  constructor({ header, body = {} } = {}) {
    super()
    this.header = header
    this.body = body
  }

  onCreate() {
    super.onCreate()
    this.setStyle('background-color', this.getBackgroundColor())
    this.setStyle('color', '#ffffff')
    this.setStyle('padding', '1rem 0rem')
    this.append(this.createTextHTML(this.header))
    this.append(this.getBodyHTML())
    this.append(this.createTextHTML(this.getDatetime()))
  }

  getBackgroundColor() {
    return this.side == 'left' ? '#ff0000' : '#0000ff'
  }

  createTextHTML(text = '') {
    const html = new HTML()
    html.setStyle('padding', '0rem 1rem')
    html.setText(text)
    return html
  }

  getBodyHTML() {
    console.log(this.header)

    switch (this.header) {
      case 'Socket': return new SocketBodyMessage(this.body)
    }

    return new HTML()
  }

  getDatetime(datetime = new Date()) {
    return datetime.toLocaleString()
  }
}

export class LeftMessage extends ChatMessage {
}

export class RightMessage extends ChatMessage {
  side = 'rigth'
}

export class BodyMessage extends HTML {
  onCreate() {
    super.onCreate()
    this.setStyle('padding', '0rem 1rem')
    this.setText('body message')
  }
}

export class SocketBodyMessage extends BodyMessage { }
