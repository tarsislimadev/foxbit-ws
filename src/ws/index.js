import express, { json } from 'express'
import { createServer } from 'http'
import { WebSocket } from 'ws'
import { Server } from 'socket.io'

import * as events from './events.js'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, { cors: { origin: '*' } })
const foxbit = new WebSocket('wss://api.foxbit.com.br/')

io.on('connection', (socket) => {
  console.log('socket', socket.id)

  let i = 0

  const send = (Endpoint, Payload = {}) => {
    console.log('send', Endpoint, Payload)
    foxbit.send(JSON.stringify({ n: Endpoint, o: JSON.stringify(Payload), i: ++i, m: 0 }))
  }

  const retrieve = (data) => {
    const { m, i, n, o = '{}' } = JSON.parse(data.toString())
    const message = { Endpoint: n, Payload: JSON.parse(o), SequenceNumber: i, MessageType: m }
    console.log('retrieve', message)
    socket.emit('message', message)
  }

  foxbit.addListener('message', (data) => retrieve(data))

  events.getEventsList().map((Endpoint) => socket.on(Endpoint, (Payload) => send(Endpoint, Payload)))
})

httpServer.listen(80)
