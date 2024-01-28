import { Database } from '@brtmvdl/database'
import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import * as events from './events.js'
import { switchRequest } from './foxbit.js'

const app = express()
const server = createServer(app)
const io = new Server(server, { cors: { origin: '*' } })
const db = new Database({ type: 'fs', config: '/data' })

const save = (table, data = {}) => db.in(table).new().writeMany(data)

const createUrl = ({ Url }) => `https://api.foxbit.com.br/rest/v3/${Url}`

const createHeaders = () => ({})

const createBody = ({ Body }) => Body

io.on('connection', (socket) => {
  console.log('socket', socket.id)

  const send = async (endpoint, input = {}) => {
    console.log('send', endpoint, input)
    save(endpoint, input)
    return await fetch({
      url: createUrl(input),
      headers: createHeaders(),
      body: createBody(input)
    }).then((res) => res.json())
  }

  events.getEventsList().map((endpoint) => socket.on(endpoint, (input) => send(endpoint, input).then((output) => socket.emit(endpoint, output))))
})

server.listen(80)
