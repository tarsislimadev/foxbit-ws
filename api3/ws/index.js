import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { createHmac } from 'crypto'
import { APIKey, APISecret } from './config.js'

const app = express()
const server = createServer(app)
const io = new Server(server, { cors: { origin: '*' } })

const save = (data) => data

const json = (url, data = {}) => fetch(url, data).then((res) => res.json())

const createUrlPath = (data) => `/rest/v3${data.body.Url}`

const createUrlQuery = (data) => Object.keys(data.body.Query).map((param) => `${param}=${data.body.Query[param]}`).join('&')

const createUrl = (data) => `https://api.foxbit.com.br${createUrlPath(data)}?${createUrlQuery(data)}`

const createMethod = (data) => data.body.Method

const createSignature = (timestamp, method, path, data = '') => createHmac('sha256', APISecret).update(`${timestamp}${method}${path}${data}`, APISecret).digest('hex').toString()

const createGetSignature = (data, timestamp = Date.now()) => createSignature(timestamp, 'GET', createUrlPath(data), createUrlQuery(data))

const createPostSignature = (data, timestamp = Date.now()) => createSignature(timestamp, 'POST', createUrlPath(data), JSON.stringify(data.body.Body))

const createHeaders = (data, timestamp = Date.now()) => ({
  'X-FB-ACCESS-KEY': APIKey,
  'X-FB-ACCESS-TIMESTAMP': timestamp,
  'X-FB-ACCESS-SIGNATURE': createMethod(data) == 'POST' ? createPostSignature(data, timestamp) : createGetSignature(data, timestamp),
})

const createbody = (data) => null

const request = (data, timestamp = Date.now()) => json(createUrl(data), { method: createMethod(data), headers: createHeaders(data, timestamp), body: createbody(data) })

io.on('connection', (socket) => {
  console.log('socket', socket.id)

  const send = (input, timestamp = Date.now()) => {
    console.log('send', input)
    save(input)
    return request(input, timestamp)
  }

  const retrieve = (output) => {
    console.log('retrieve', output)
    save(output)
    socket.emit('message', output)
  }

  socket.on('message', (input) => send(input).then((output) => retrieve({ input, output })))
})

server.listen(80)
