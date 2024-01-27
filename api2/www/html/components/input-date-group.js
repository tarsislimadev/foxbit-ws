import { HTML, nFlex, nLabel, nInput, nError } from '@brtmvdl/frontend'

export class InputDateGroupComponent extends HTML {
  state = {
    text: '',
  }

  constructor(text = '') {
    super()
    this.state.text = text
  }

  children = {
    label: new nLabel(),
    year_input: new nInput(),
    month_input: new nInput(),
    day_input: new nInput(),
    error: new nError(),
  }

  onCreate() {
    this.append(this.getLabel())
    this.append(this.getInputs())
    this.append(this.getError())
  }

  getLabel() {
    this.children.label.setText(this.state.text)
    this.children.label.setStyle('padding', '1rem 0rem')
    return this.children.label
  }

  getYearInput() {
    this.children.year_input.setStyle('padding', 'calc(1rem / 2) 0rem')
    this.children.year_input.setStyle('margin', '1rem 0rem')
    this.children.year_input.setPlaceholder('YYYY')
    this.children.year_input.setValue(this.state.year)
    return this.children.year_input
  }

  getMonthInput() {
    this.children.month_input.setStyle('padding', 'calc(1rem / 2) 0rem')
    this.children.month_input.setStyle('margin', '1rem 0rem')
    this.children.month_input.setPlaceholder('MM')
    this.children.month_input.setValue(this.state.month)
    return this.children.month_input
  }

  getDayInput() {
    this.children.day_input.setStyle('padding', 'calc(1rem / 2) 0rem')
    this.children.day_input.setStyle('margin', '1rem 0rem')
    this.children.day_input.setPlaceholder('DD')
    this.children.day_input.setValue(this.state.day)
    return this.children.day_input
  }

  getSeparator() {
    const separator = new HTML()
    separator.setStyle('padding', 'calc(3rem / 2) 0rem')
    separator.setText('/')
    return separator
  }

  getInputs() {
    const inputs = new nFlex()
    inputs.append(this.getYearInput())
    inputs.append(this.getSeparator())
    inputs.append(this.getMonthInput())
    inputs.append(this.getSeparator())
    inputs.append(this.getDayInput())
    return inputs
  }

  getError() {
    return this.children.error
  }

  getValue() {
    return [
      this.children.year_input.getValue(),
      this.children.month_input.getValue(),
      this.children.day_input.getValue(),
    ].join('-')
  }
}
