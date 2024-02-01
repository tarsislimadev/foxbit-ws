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
    this.children.label.setStyle('padding', '1rem 0rem calc(1rem / 2) 0rem')
    this.children.label.setText(this.state.text)
    this.children.input.setStyle('box-shadow', 'inset 0rem 0rem 0rem calc(1rem / 8) #000000')
    this.children.input.setStyle('margin', '1rem 0rem calc(1rem / 2) 0rem')
    this.children.input.setStyle('border-radius', 'calc(1rem / 4)')
    this.children.input.setStyle('padding', 'calc(1rem / 2)')
    this.children.input.setStyle('box-sizing', 'border-box')
    this.children.input.setStyle('border', 'none')
    this.children.input.setStyle('width', '100%')
    this.children.input.setPlaceholder(this.state.text)
  }
}
