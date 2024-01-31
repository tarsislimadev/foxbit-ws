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
    this.children.form.on('submit', (ev) => this.onFormSubmit(ev))
    this.on('message', (ev) => this.onFormMessage(ev))
  }

  onFormSubmit(ev) {
    this.dispatchEvent('submit', ev.value)
    this.children.messages.dispatchEvent('input', ev.value)
  }

  onFormMessage(ev) {
    this.children.messages.dispatchEvent('output', ev.value)
  }

  getChatForm() {
    return this.children.form
  }

  getChatMessages() {
    return this.children.messages
  }
}
