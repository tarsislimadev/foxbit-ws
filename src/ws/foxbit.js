import { EventEmitter } from 'events'
import { WebSocket } from 'ws'

import * as messages from './messages.js'

export class FoxbitWS {
  authenticated = false
  side = 1
  userLogin = ''
  userPass = ''
  userId = '0'

  sessionToken = ''
  stdin2FA = process.openStdin()
  ws = new WebSocket('wss://api.foxbit.com.br/')

  ee = new EventEmitter()

  constructor() {
    this.setEvents()
  }

  setEvents() {
    this.ws.on('open', (...args) => this.ee.emit('open', ...args))
    this.ws.on('message', (...args) => this.ee.emit('message', ...args))
    this.ws.on('error', (...args) => this.ee.emit('error', ...args))
    this.ws.on('close', (...args) => this.ee.emit('close', ...args))
    this.ws.on('end', (...args) => this.ee.emit('end', ...args))
  }

  AskPrompt(message) {
    const self = this
    self.log(message)
    return new Promise((s) => self.stdin2FA.addListener('data', (d) => s(d.toString().trim())))
  }

  log(...messages) {
    console.log(...messages)
  }

  send(message = new messages.FoxbitMessage()) {
    console.log('send', message.Endpoint, message.toJSON())
    this.ws.send(message.toString(), console.log)
  }
}
