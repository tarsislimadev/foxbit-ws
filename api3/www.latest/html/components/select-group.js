import { HTML, nSelectGroup } from '@brtmvdl/frontend'

export class SelectGroupComponent extends nSelectGroup {
  state = {
    text: ''
  }

  constructor(text = '') {
    super()
    this.state.text = text
  }

  onCreate() {
    super.onCreate()
    this.children.label.setText(this.state.text)
    this.children.label.setStyle('padding', '1rem 0rem')
    this.children.select.setStyle('padding', 'calc(1rem / 2) 0rem')
    this.children.select.setStyle('margin', '1rem 0rem')
  }

  getValue() {
    return this.children.select.getValue()
  }
}
