import { HTML, nH2, nFlex, nSelect, nButton, nInputTextGroup } from '@brtmvdl/frontend'
import { LeftMessage, RightMessage } from './chat-message.js'
import { GroupComponents } from './group-components.js'
import { VerticalSeparator } from './vertical-separator.js'
import * as lists from './lists.js'
import 'socket.io'

export class TitleHTML extends nH2 {
  onCreate() {
    super.onCreate()
    this.setText('Foxbit websocket API 2.0')
  }
}

export class Page extends HTML {
  state = {
    socket: io('localhost:8080'),
  }

  children = {
    form: new HTML(),
    messages: new HTML(),
    operations: new nSelect(),
    inputs: new HTML(),
    send: new nButton(),
    components: new GroupComponents(),
  }

  onCreate() {
    this.setSocketEvents()
    this.append(new TitleHTML())
    this.append(this.getChatHTML())
  }

  setSocketEvents() {
    this.state.socket.on('message', (message) => this.onSocketMessage(message))
  }

  onSocketMessage(message) {
    console.log('onSocketMessage', message)
    this.showMessage('left', message.Endpoint, message.Payload)
  }

  getChatHTML() {
    const chat = new nFlex()
    chat.append(this.getFormHTML())
    chat.append(new VerticalSeparator())
    chat.append(this.getMessagesHTML())
    return chat
  }

  getFormHTML() {
    this.children.form.append(this.getOperationsSelect())
    this.children.form.append(this.getInputsHTML())
    this.children.form.append(this.getSendButton())
    this.children.form.setContainerStyle('width', '20%')
    this.children.form.setStyle('padding', '1rem')
    return this.children.form
  }

  getOperationsSelect() {
    lists.getOperationsList().map((op) => this.children.operations.addOption(op, op))
    this.children.operations.setStyle('background-color', 'transparent')
    this.children.operations.setStyle('appearance', 'none')
    this.children.operations.setStyle('border', 'none')
    this.children.operations.on('change', () => this.onOperationsChange())
    this.children.operations.setStyle('padding', '1rem')
    return this.children.operations
  }

  onOperationsChange() {
    this.updateForm(this.children.operations.getValue())
  }

  updateForm(op) {
    this.children.inputs.clear()
    lists.getFormInputs(op).forEach((input) => this.children.inputs.append(this.children.components[`get${input}Component`]?.()))
  }

  getInputsHTML() {
    return this.children.inputs
  }

  getSendButton() {
    this.children.send.setText('send')
    this.children.send.on('click', () => this.onSendButtonClick())
    this.children.send.setStyle('padding', '1rem')
    this.children.send.setStyle('width', '100%')
    return this.children.send
  }

  onSendButtonClick() {
    const op = this.children.operations.getValue()
    const body = this.getFormValues(op)
    this.emitSocketMessage(op, body)
  }

  emitSocketMessage(header, body = {}) {
    console.log('emitSocketMessage', header, body)
    this.state.socket.emit(header, body)
    this.showMessage('right', header, body)
  }

  showMessage(side, header, body = {}) {
    console.log('showMessage', side, header, body)
    this.children.messages.append(side == 'left' ? new LeftMessage(header, body) : new RightMessage(header, body))
  }

  getFormValues(op) {
    return lists.getFormInputs(op).reduce((b, input) => ({ ...b, [input]: this.children.components.children[input].getValue() }), {})
  }

  getMessagesHTML() {
    this.children.messages.setContainerStyle('width', '80%')
    return this.children.messages
  }
}
