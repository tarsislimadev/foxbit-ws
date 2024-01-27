import { HTML, nInputTextGroup } from '@brtmvdl/frontend'

export class InputTextGroupComponent extends nInputTextGroup {
  state = {
    text: '',
  }

  constructor(text = '') {
    super()
    this.state.text = text
  }

  onCreate() {
    super.onCreate()
    this.children.label.setStyle('padding', '1rem 0rem')
    this.children.label.setText(this.state.text)
    this.children.input.setStyle('padding', 'calc(1rem / 2) 0rem')
    this.children.input.setStyle('margin', '1rem 0rem')
    this.children.input.setPlaceholder(this.state.text)
  }
}
