import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
const server = createServer(app)
const io = new Server(server, { cors: { origin: '*' } })

io.on('connection', (socket) => {
  socket.emit('server hello', Date.now())
  console.log('socket', socket.id)

  socket.on('List currencies', (data) => console.log('List currencies', data))
  socket.on('List markets', (data) => console.log('List markets', data))
  socket.on('List banks', (data) => console.log('List banks', data))
  socket.on('List orders', (data) => console.log('List orders', data))
  socket.on('List trades', (data) => console.log('List trades', data))
  socket.on('List deposits', (data) => console.log('List deposits', data))
  socket.on('List withdrawals', (data) => console.log('List withdrawals', data))
  socket.on('List Transactional Limits', (data) => console.log('List Transactional Limits', data))
})

io.on('message', (data) => console.log('message', data))

server.listen(80)
