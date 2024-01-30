import { HTML, nFlex, nInputTextGroup } from '@brtmvdl/frontend'

export class InputTextGroupComponent extends nInputTextGroup {
  state = {
    text: '',
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
    this.children.input.setStyle('width', '4rem')
    this.children.input.setStyle('padding', 'calc(1rem / 2) 0rem')
    this.children.input.setStyle('margin', '1rem 0rem')
    flex.append(this.children.input)
    this.append(flex)
  }
}
