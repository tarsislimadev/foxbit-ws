import { Database } from '@brtmvdl/database'
import express from 'express'
import { createServer } from 'http'
import { WebSocket } from 'ws'
import { Server } from 'socket.io'
import * as events from './events.js'
import { FoxbitRequest, FoxbitResponse } from './foxbit.js'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, { cors: { origin: '*' } })
const db = new Database({ type: 'fs', config: '/data' })

const save = (message = new FoxbitRequest()) => {
  const { Endpoint, Payload, SequenceNumber, MessageType } = message.toJSON()
  db.in(message.Endpoint).new().writeMany({
    Endpoint,
    Payload: JSON.stringify(Payload),
    SequenceNumber,
    MessageType
  })
}

io.on('connection', (socket) => {
  console.log('socket', socket.id)
  const foxbit = new WebSocket('wss://api.foxbit.com.br/')

  const send = (message = new FoxbitRequest()) => {
    console.log('send', message.toJSON())
    foxbit.send(message.toString())
    save(message)
  }

  foxbit.addListener('message', (data) => retrieve(new FoxbitResponse(data)))

  const retrieve = (message = new FoxbitResponse()) => {
    console.log('retrieve', message)
    socket.emit('message', message)
    save(message)
  }

  events.getEventsList().map((Endpoint) => socket.on(Endpoint, (Payload) => send(new FoxbitRequest(Endpoint, Payload))))
})

httpServer.listen(80)
