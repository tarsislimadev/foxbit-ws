import { HTML } from '@brtmvdl/frontend'

export class MessageBody extends HTML {
  content = {}

  constructor(content = {}) {
    super()
    this.content = content
  }

  onCreate() {
    this.append(this.getBody())
  }

  getBody(content = this.content) {
    const body = new HTML()
    if (typeof content === 'object') {
      Object.keys(content).map((key) => body.append(this.createTextHTML(key, content[key])))
    } else {
      body.append(this.createTextHTML('text', content))
    }
    return body
  }

  createTextHTML(key, value = '') {
    const html = new HTML()
    html.setStyle('padding', '0rem 1rem')
    html.setText(`${key}: ${value}`)
    return html
  }
}
