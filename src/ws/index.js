import { Database } from '@brtmvdl/database'
import express from 'express'
import process from 'process'
import { EventEmitter } from 'events'
import { createServer } from 'http'
import { WebSocket } from 'ws'
import { Server } from 'socket.io'
import * as events from './events.js'
import { fromRequest, fromResponse, toRequest, switchRequest } from './foxbit.js'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, { cors: { origin: '*' } })
const db = new Database({ type: 'fs', config: '/data' })
const ee = new EventEmitter()

const exit = () => ee.emit('exit')

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

  socket.on('disconnect', exit)

  ee.addListener('exit', () => send(toRequest({ Endpoint: 'Logout' })))
})

httpServer.listen(80)

process.on('SIGINT', exit)
process.on('SIGTERM', exit)
process.on('beforeExit', exit)
process.on('exit', exit)
