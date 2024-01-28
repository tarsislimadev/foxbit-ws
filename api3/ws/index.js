import { Database } from '@brtmvdl/database'
import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import * as events from './events.js'

const app = express()
const server = createServer(app)
const io = new Server(server, { cors: { origin: '*' } })
const db = new Database({ type: 'fs', config: '/data' })

const save = (table, data = {}) => db.in(table).new().writeMany(data)

const createUrl = (endpoint, input = {}) => `https://api.foxbit.com.br/rest/v3${input.Url}`

const createMethod = (endpoint, input = {}) => 'GET'

const createHeaders = (endpoint, input = {}) => ({})

const createBody = (endpoint, input = {}) => null

io.on('connection', (socket) => {
  console.log('socket', socket.id)

  const send = (endpoint, input = {}) => {
    console.log('send', endpoint, input)
    save(endpoint, input)
    const request = { method: createMethod(endpoint), headers: createHeaders(input), body: createBody(input) }
    return fetch(createUrl(endpoint, input), request).then((res) => res.json())
  }

  const retrieve = (endpoint, output = {}) => {
    console.log('retrieve', endpoint, output)
    save(endpoint, output)
    socket.emit(endpoint, output)
  }

  events.getEventsList().map((endpoint) => socket.on(endpoint, (input) => send(endpoint, input).then((output) => retrieve(endpoint, output))))
})

server.listen(80)
