const WebSocket = require('ws')

const config = require('./config')

const { Message } = require('./api')

class Logger extends EventTarget {
  dispatchError(error = new Error()) {
    console.error(error)
  }

  dispatchLog(key, ...values) {
    console.log(key, ...values)
  }
}

class WebSocketMessenger extends Logger {
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

    self.dispatchLog('runEventLoop', { id, message })

    if (message === undefined) {
      self.setEventLoop(id)
      return this
    }

    this._send(message)

    this.addEventListener(message.Endpoint, () => self.setEventLoop(id + 1))
  }

  setOpen() {
    const self = this

    this.ws.on('open', function (open) {
      self.dispatchLog('open', open)
      self.runEventLoop()
    })
  }

  setMessage() {
    const self = this
    this.ws.on('message', (message) => {
      const event = new Message(JSON.parse(message.toString()))
      self.dispatchEvent(event.toEvent())
    })
    return this
  }

  setError() {
    this.ws.on('error', (error) => self.dispatchError(error))
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
    this.ws.on('close', (code) => self.dispatchLog('close', self.parseCloseMessage(code)))
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
