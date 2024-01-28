import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
const server = createServer(app)
const io = new Server(server, { cors: { origin: '*' } })

const save = (data) => data

const json = (url, data = {}) => fetch(url, data).then((res) => res.json())

const createUrlPath = (data) => `/rest/v3${data.body.Url}`

const createUrl = (data) => `https://api.foxbit.com.br${createUrlPath(data)}`

const createMethod = (data) => 'GET'

const createHeaders = (data) => ({})

const createbody = (data) => null

const request = (data) => json(createUrl(data), { method: createMethod(data), headers: createHeaders(data), body: createbody(data) })

io.on('connection', (socket) => {
  console.log('socket', socket.id)

  const send = (input) => {
    console.log('send', input)
    save(input)
    return request(input)
  }

  const retrieve = (output) => {
    console.log('retrieve', output)
    save(output)
    socket.emit('message', output)
  }

  socket.on('message', (input) => send(input).then((output) => retrieve({ input, output })))
})

server.listen(80)
