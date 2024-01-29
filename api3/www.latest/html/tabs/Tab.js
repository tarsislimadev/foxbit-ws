import { HTML, nH2 } from '@brtmvdl/frontend'
import { ButtonComponent } from '../components/index.js'

export class Tab extends HTML {
  path = ''

  onCreate() {
    super.onCreate()
    this.append(this.getTitleHTML())
    this.getForm().map((html) => this.append(html))
    this.append(this.getButton())
    this.getData().map((html) => this.append(html))
  }

  getTitleHTML() {
    const title = new nH2()
    title.setText(this.path)
    return title
  }

  getForm() {
    return [new HTML()]
  }

  getMethod() {
    return 'GET'
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
    button.on('click', () => this.dispatchEvent('submit', { header: this.path, body: { Method: this.getMethod(), Url: this.getUrl(), Query: this.getQuery(), Body: this.getBody() } }))
    return button
  }

  getData() {
    return []
  }

}
