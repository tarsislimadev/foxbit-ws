import { HTML, nButton } from '@brtmvdl/frontend'

import 'socket.io'

export class Page extends HTML {
  state = {
    socket: io('localhost:8080'),
  }

  onCreate() {
    this.append(this.getTitleHTML())
    this.append(this.getButton())
  }

  getTitleHTML() {
    const html = new HTML()
    html.setText('Foxbit websocket API 2.0')
    return html
  }

  getButton() {
    const button = new nButton()
    button.setText('socket')
    button.on('click', () => console.log('socket', this.state.socket.emit('AuthenticateUser', {})))
    return button
  }
}
