import { HTML, nFlex } from '@brtmvdl/frontend'
import { ChatMessages } from './chat-messages.js'
import { ChatForm } from './chat-form.js'

export class ChatHTML extends nFlex {

  children = {
    form: new ChatForm(),
    messages: new ChatMessages(),
  }

  onCreate() {
    super.onCreate()
    this.setEvents()
    this.append(this.getChatForm())
    this.append(this.getChatMessages())
  }

  setEvents() {
    this.children.form.on('submit', (ev) => this.onSubmit(ev))
    this.children.form.on('message', (ev) => this.onMessage(ev))
  }

  onSubmit(ev) {
    console.log('onSubmit', ev)
    this.dispatchEvent('submit', ev.value)
    this.children.messages.dispatchEvent('message', ev.value)
  }

  onMessage(ev) {
    console.log('onMessage', ev)
  }

  getChatForm() {
    return this.children.form
  }

  getChatMessages() {
    return this.children.messages
  }
}
