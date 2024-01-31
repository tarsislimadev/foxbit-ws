import { HTML } from '@brtmvdl/frontend'
import * as lists from '../lists.js'

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
    console.log('chat message', this.side, this.header, this.body)
    super.onCreate()
    this.setStyles()
    this.append(this.createTextHTML(this.header))
    this.append(lists.getBodyHTML(this.side, this.header, this.body))
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

  getDatetime(datetime = new Date()) {
    return datetime.toLocaleString()
  }
}

export class InputMessage extends ChatMessage { }

export class OutputMessage extends ChatMessage {
  side = 'output'
}
