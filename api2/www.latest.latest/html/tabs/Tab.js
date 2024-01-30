import { HTML, nH2, nFlex } from '@brtmvdl/frontend'

export class Tab extends HTML {
  path = 'SendOrder'

  onCreate() {
    super.onCreate()
    this.setEvents()
    this.append(this.getFlex())
  }

  getFlex() {
    const flex = new nFlex()
    this.getForm().map((html) => flex.append(html))
    this.append(flex)
  }

  getForm() {
    return [new HTML()]
  }

  setEvents() {
    this.on('message', ({ value }) => this.onEvent(value))
  }

  onEvent(value) {
    console.log('onEvent', value)
    this.dispatchEvent('submit', { header: this.path, body: this.getBody() })
  }

  getBody() {
    return {}
  }

}
