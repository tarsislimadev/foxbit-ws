import { HTML, nH2 } from '@brtmvdl/frontend'
import { ButtonComponent } from '../components/index.js'

export class Tab extends HTML {
  path = ''

  onCreate() {
    super.onCreate()
    this.setEvents()
    this.append(this.getTitleHTML())
    this.getForm().map((html) => this.append(html))
    this.append(this.getButton())
    this.getData().map((html) => this.append(html))
  }

  setEvents() {
    this.on('message', ({ value }) => this.onEvent(value))
  }

  onEvent(value) {
    console.log('onEvent', value)
  }

  getTitleHTML() {
    const title = new nH2()
    title.setText(this.path)
    return title
  }

  getForm() {
    return [new HTML()]
  }

  getUrl() {
    return ''
  }

  getQuery() {
    return {}
  }

  getBody() {
    return {}
  }

  getButton() {
    const button = new ButtonComponent()
    button.setText('Send')
    button.on('click', () => this.dispatchEvent('submit', { header: this.path, body: { Url: this.getUrl(), Query: this.getQuery(), Body: this.getBody() } }))
    return button
  }

  getData() {
    return []
  }

}
