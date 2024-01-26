import express from 'express'
import { createServer } from 'http'
import { WebSocket } from 'ws'
import { Server } from 'socket.io'
import * as events from './events.js'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, { cors: { origin: '*' } })
const foxbit = new WebSocket('wss://api.foxbit.com.br/')

let i = 0

class FoxbitRequest {
  Endpoint = null
  Payload = {}
  SequenceNumber = null
  MessageType = null

  constructor(Endpoint, Payload = {}, SequenceNumber = ++i, MessageType = 0) {
    this.Endpoint = Endpoint
    this.Payload = Payload
    this.SequenceNumber = SequenceNumber
    this.MessageType = MessageType
  }

  toJSON() {
    const { Endpoint, Payload, SequenceNumber, MessageType } = this
    return { Endpoint, Payload, SequenceNumber, MessageType }
  }

  toString() {
    return JSON.stringify({
      n: this.Endpoint,
      o: JSON.stringify(this.Payload),
      i: this.SequenceNumber,
      m: this.MessageType,
    })
  }
}

class FoxbitResponse extends FoxbitRequest {
  constructor(data) {
    const { m, i, n, o = '{}' } = JSON.parse(data.toString())
    super(n, JSON.parse(o), i, m)
  }
}

io.on('connection', (socket) => {
  console.log('socket', socket.id)

  const send = (message = new FoxbitRequest()) => {
    console.log('send', message.toJSON())
    foxbit.send(message.toString())
  }

  const retrieve = (message = new FoxbitResponse()) => {
    console.log('retrieve', message)
    socket.emit('message', message)
  }

  foxbit.addListener('message', (data) => retrieve(new FoxbitResponse(data)))

  events.getEventsList().map((Endpoint) => socket.on(Endpoint, (Payload) => send(new FoxbitRequest(Endpoint, Payload))))
})

httpServer.listen(80)
