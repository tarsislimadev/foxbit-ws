import { Database } from '@brtmvdl/database'
import express from 'express'
import { createServer } from 'http'
import { createHmac } from 'crypto'
import { Server } from 'socket.io'
import * as events from './events.js'

import { UserId, APIKey, APISecret } from './config.js'

const app = express()
const server = createServer(app)
const io = new Server(server, { cors: { origin: '*' } })
const db = new Database({ type: 'fs', config: '/data' })

const save = (table, data = {}) => db.in(table).new().writeMany(data)

const hmacSHA256 = (method, url, query = '', timestamp = Date.now()) => createHmac('sha256', APISecret).update(`${timestamp}${method}${url}${query}`, APISecret).digest('hex').toString()

const createUrlPath = (endpoint, input = {}) => `/rest/v3${input.Url}`

const createUrl = (endpoint, input = {}) => `https://api.foxbit.com.br${createUrlPath(endpoint, input)}`

const createMethod = (endpoint, input = {}) => {
  switch (endpoint) {
    case 'Get current member details': return 'GET'
  }

  return 'GET'
}

const createGetHeaders = (endpoint, input = {}, timestamp = Date.now()) => ({
  'X-FB-ACCESS-KEY': APIKey,
  'X-FB-ACCESS-TIMESTAMP': timestamp,
  'X-FB-ACCESS-SIGNATURE': hmacSHA256(createMethod(endpoint, input), createUrlPath(endpoint, input), input.Query, timestamp),
})

const createPostHeaders = (endpoint, input) => ({})

const createHeaders = (endpoint, input = {}, timestamp = Date.now()) =>
  createMethod(endpoint, input) == 'GET'
    ? createGetHeaders(endpoint, input, timestamp)
    : createPostHeaders(endpoint, input, timestamp)

const createBody = (endpoint, input = {}) => null

io.on('connection', (socket) => {
  console.log('socket', socket.id)

  const send = async (endpoint, input = {}) => {
    console.log('send', endpoint, input)
    save(endpoint, input)
    const now = Date.now()
    const request = { method: createMethod(endpoint, input), headers: createHeaders(endpoint, input), body: createBody(endpoint, input) }
    const res = await fetch(createUrl(endpoint, input), request)
    return await res.json()
  }

  const retrieve = (endpoint, output = {}) => {
    console.log('retrieve', endpoint, output)
    save(endpoint, output)
    socket.emit(endpoint, output)
  }

  events.getEventsList().map((endpoint) => socket.on(endpoint, (input) => send(endpoint, input).then((output) => retrieve(endpoint, output))))
})

server.listen(80)
