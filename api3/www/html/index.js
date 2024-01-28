import { HTML, nButton, nInputText } from '@brtmvdl/frontend'
import 'socket.io'

export class Page extends HTML {
  state = {
    socket: io('localhost:4080'),
  }

  children = {
    input: new nInputText(),
    button: new nButton(),
    events: new HTML(),
  }

  onCreate() {
    this.setEvents()
    this.append(this.getInput())
    this.append(this.getButton())
  }

  setEvents() {
    this.state.socket.on('connection', () => this.sendMessage(`client hello; ${Date.now()}`))
    this.state.socket.on('message', (data) => this.onMessage(data))
    setInterval(() => this.sendMessage(`client interval; ${Date.now()}`), 1000)
  }

  sendMessage(message) {
    console.log('message', message)
    this.state.socket.emit('message', message)
  }

  onMessage(data) {
    console.log('message', data)
  }

  getInput() {
    this.children.input.setPlaceholder('input')
    return this.children.input
  }

  onButtonClick() {
    const data = this.children.input.getValue()
    this.sendMessage(data)
  }

  getButton() {
    this.children.button.setText('request')
    this.children.button.on('click', () => this.onButtonClick())
    return this.children.button
  }
}
