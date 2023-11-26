const WebSocket = require('ws')
const config = require('./config.js')
const { Message } = require('./api/message/index.js')

class WebSocketMessenger extends EventTarget {
  ws = new WebSocket(config.ws.url) // FIXME

  messages = []

  message_id = 0

  constructor() {
    super()

    this.setOpen()
    this.setMessage()
    this.setError()
    this.setClose()
  }

  setEventLoop(id) {
    const self = this
    setTimeout(() => self.runEventLoop(id), 1000)
  }

  runEventLoop(id = 0) {
    const self = this

    const message = this.messages[id]

    console.log('runEventLoop', { id, message })

    if (message === undefined) {
      self.setEventLoop(id)
      return this
    }

    this._send(message)

    this.addEventListener(message.Endpoint, () => self.setEventLoop(id + 1))
  }

  setOpen() {
    const self = this

    this.ws.on('open', function (ev) {
      console.log('open', { ev })

      self.runEventLoop()
    })
  }

  setMessage() {
    const self = this

    this.ws.on('message', function (ev) {
      const message = new Message(JSON.parse(ev.toString()))
      self.dispatchEvent(message.toEvent())
    })

    return this
  }

  setError() {
    this.ws.on('error', (ev) => console.log('error', { ev }))
    return this
  }

  parseCloseMessage(signal) {
    switch (signal) {
      case 1006: return 'Timeout'
    }

    return 'Undefined close'
  }

  setClose() {
    const self = this
    this.ws.on('close', (signal) => console.log('close', self.parseCloseMessage(signal)))
    return this
  }

  send(message = new Message()) {
    this.messages.push(message)
    return this
  }

  _send(message = new Message()) {
    const self = this
    return new Promise((s, f) => self.ws.send(JSON.stringify(message), s))
  }
}

module.exports = {
  WebSocketMessenger,
}
