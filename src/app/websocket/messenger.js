import WebSocket from 'ws'
import { WebSocketMessage } from './message.js'

export class Logger extends EventTarget {
  dispatchError(error = new Error()) {
    console.error(error)
  }

  dispatchLog(key, ...values) {
    console.log(key, ...values)
  }
}

export class WebSocketMessenger extends Logger {
  ws = null

  messages = []

  message_id = 0

  timeout = 1000

  constructor({ url } = {}) {
    super()

    this.ws = new WebSocket(url)

    this.setOpenEvent()
    this.setMessageEvent()
    this.setErrorEvent()
    this.setCloseEvent()
  }

  setTimeout(timeout = 1000) {
    this.timeout = timeout
    return this
  }

  setEventLoop(id) {
    const self = this
    setTimeout(() => self.runEventLoop(id), self.timeout)
  }

  runEventLoop(id = 0) {
    const self = this

    const message = self.messages[id]

    if (message === undefined) {
      self.setEventLoop(id)
      return self
    }

    self._send(message)

    self.addEventListener(message.Endpoint, () => self.setEventLoop(id + 1))

    return self
  }

  setOpenEvent() {
    const self = this

    this.ws.on('open', (open) => {
      self.dispatchLog('open', open)
      self.runEventLoop()
    })
  }

  setMessageEvent() {
    const self = this
    self.ws.on('message', (message) => {
      const ws_message = new WebSocketMessage(JSON.parse(message.toString()))
      self.dispatchEvent(ws_message.toEvent())
    })
    return self
  }

  setErrorEvent() {
    const self = this
    self.ws.on('error', (error) => self.dispatchError(error))
    return self
  }

  parseCloseMessage(signal) {
    switch (signal) {
      case 1006: return 'Timeout'
    }

    return 'Undefined close'
  }

  setCloseEvent() {
    const self = this
    self.ws.on('close', (code) => self.dispatchLog('close', self.parseCloseMessage(code)))
    return self
  }

  send(message = new WebSocketMessage()) {
    const self = this
    self.messages.push(message)
    return self
  }

  _send(message = new WebSocketMessage()) {
    const self = this
    return new Promise((s, f) => self.ws.send(JSON.stringify(message), (err) => err ? f(err) : s()))
  }
}
