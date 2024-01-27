import { Database } from '@brtmvdl/database'
import express from 'express'
import { createServer } from 'http'
import { WebSocket } from 'ws'
import { Server } from 'socket.io'
import * as events from './events.js'
import { fromRequest, fromResponse, toRequest, switchRequest } from './foxbit.js'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, { cors: { origin: '*' } })
const db = new Database({ type: 'fs', config: '/data' })

const save = (side, message = {}) => {
  const { Endpoint, Payload, SequenceNumber, MessageType } = message
  db.in(Endpoint).new().writeMany({ Side: side, Endpoint, Payload: JSON.stringify(Payload), SequenceNumber, MessageType })
}

io.on('connection', (socket) => {
  console.log('socket', socket.id)

  const foxbit = new WebSocket('wss://api.foxbit.com.br/')

  const send = (message = {}) => {
    console.log('send', message)
    foxbit.send(message.toString())
    save('send', fromRequest(message))
  }

  foxbit.addListener('message', (data) => retrieve(fromResponse(data)))

  const retrieve = (message = {}) => {
    console.log('retrieve', message)
    socket.emit('message', message)
    save('retrieve', message)
  }

  events.getEventsList().map((Endpoint) => socket.on(Endpoint, (Payload) => send(toRequest(switchRequest({ Endpoint, Payload })))))

  socket.on('disconnect', (reason) => send(toRequest({ Endpoint: 'Logout' })))
})

httpServer.listen(80)
