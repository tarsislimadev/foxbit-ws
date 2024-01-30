import { HTML, nFlex, nSelectGroup } from '@brtmvdl/frontend'

export class SelectGroupComponent extends nSelectGroup {
  state = {
    text: ''
  }

  constructor(text = '') {
    super()
    this.state.text = text
  }

  onCreate() {
    const flex = new nFlex()
    this.children.label.setText(this.state.text)
    this.children.label.setStyle('display', 'inline-block')
    this.children.label.setStyle('padding', 'calc(1rem / 2) 0rem')
    this.children.label.setStyle('margin', '1rem')
    flex.append(this.children.label)
    this.children.select.setStyle('padding', 'calc(1rem / 2) 0rem')
    this.children.select.setStyle('margin', '1rem 0rem')
    flex.append(this.children.select)
    this.append(flex)
  }

  getValue() {
    return this.children.select.getValue()
  }
}
