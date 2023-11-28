import WebSocket from 'ws'
import * as config from './config.js'
import { Message } from './api/message.js'

export class Logger extends EventTarget {
  dispatchError(error = new Error()) {
    console.error(error)
  }

  dispatchLog(key, ...values) {
    console.log(key, ...values)
  }
}

export class WebSocketMessenger extends Logger {
  ws = new WebSocket(config.url)

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
    setTimeout(() => self.runEventLoop(id), config.timeout)
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

  setOpen() {
    const self = this

    this.ws.on('open', (open) => {
      self.dispatchLog('open', open)
      self.runEventLoop()
    })
  }

  setMessage() {
    const self = this
    self.ws.on('message', (message) => {
      const event = new Message(JSON.parse(message.toString()))
      self.dispatchEvent(event.toEvent())
    })
    return self
  }

  setError() {
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

  setClose() {
    const self = this
    self.ws.on('close', (code) => self.dispatchLog('close', self.parseCloseMessage(code)))
    return self
  }

  send(message = new Message()) {
    const self = this
    self.messages.push(message)
    return self
  }

  _send(message = new Message()) {
    const self = this
    return new Promise((s, f) => self.ws.send(JSON.stringify(message), (err) => err ? f(err) : s()))
  }
}

export default {
  WebSocketMessenger,
}
