import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
const server = createServer(app)
const io = new Server(server, { cors: { origin: '*' } })

io.on('connection', (socket) => {
  console.log('socket', socket.id)
  setInterval(() => socket.emit('message', `server; ${Date.now()}`), 1000)
  socket.on('message', (data) => console.log('socket message', data))
})

server.listen(80)
