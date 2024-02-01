import { HTML, nSelectGroup } from '@brtmvdl/frontend'

export class SelectGroupComponent extends nSelectGroup {
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
    this.children.select.setStyle('box-shadow', 'inset 0rem 0rem 0rem calc(1rem / 8) #000000')
    this.children.select.setStyle('margin', '1rem 0rem calc(1rem / 2) 0rem')
    this.children.select.setStyle('border-radius', 'calc(1rem / 4)')
    this.children.select.setStyle('padding', 'calc(1rem / 2)')
    this.children.select.setStyle('box-sizing', 'border-box')
    this.children.select.setStyle('border', 'none')
    this.children.select.setStyle('width', '100%')
    this.children.select.setPlaceholder(this.state.text)
  }

  getValue() {
    return this.children.select.getValue()
  }
}
