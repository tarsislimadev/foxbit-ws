import { HTML, nFlex } from '@brtmvdl/frontend'
import { OperationsSelect } from './operations-select.js'
import { SendButton } from './send-button.js'
import { FieldSetHTML } from './fieldset.js'
import { getFormInputs } from '../lists.js'
import { InputsHTML } from './inputs.js'

export class ChatForm extends HTML {
  children = {
    operations: new OperationsSelect(),
    field_set: new FieldSetHTML(),
    send: new SendButton(),
    inputs: new InputsHTML(),
  }

  onCreate() {
    this.append(this.getOperationsSelect())
    this.append(this.getFieldSetHTML())
    this.append(this.getSendButton())
  }

  getOperationsSelect() {
    this.children.operations.on('change', () => this.onOperationsSelectChange())
    return this.children.operations
  }

  onOperationsSelectChange() {
    const op = this.getOperationsValue()
    this.children.field_set.clear()
    getFormInputs(op).map((input) => this.children.field_set.append(this.getComponent(input)))
  }

  getComponent(component) {
    return this.children.inputs[`get${component}Component`]()
  }

  getFieldSetHTML() {
    return this.children.field_set
  }

  getSendButton() {
    this.children.send.on('click', () => this.onSendButtonClick())
    return this.children.send
  }

  onSendButtonClick() {
    this.dispatchEvent('submit', { header: this.getOperationsValue(), body: this.getBody() })
  }

  getBody(op = this.getOperationsValue()) {
    return getFormInputs(op).reduce((b, input) => ({ ...b, [input]: this.children.inputs.children[input].getValue() }), {})
  }

  getOperationsValue() {
    return this.children.operations.getValue()
  }
}
