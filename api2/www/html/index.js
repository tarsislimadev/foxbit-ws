import { HTML, nH2, nFlex, nSelect, nButton, nInputTextGroup } from '@brtmvdl/frontend'
import { TitleHTML, ChatHTML } from './components/index.js'
import 'socket.io'

export class Page extends HTML {
  state = {
    socket: io('localhost:8080'),
  }

  children = {
    chat: new ChatHTML(),
  }

  onCreate() {
    this.setEvents()
    this.append(new TitleHTML())
    this.append(this.children.chat)
  }

  setEvents() {
    this.state.socket.on('message', ({ Endpoint: header, Payload: body = '' }) => this.children.chat.dispatchEvent('message', { header, body }))
    this.children.chat.on('submit', ({ value: { header, body = {} } }) => this.state.socket.emit(header, body))
  }
}
