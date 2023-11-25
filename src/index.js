class WebSocketMessage {
  MessageType = 0 // (0_Request / 1_Reply / 2_Subscribe / 3_Event / Error)
  SequenceNumber = 0
  Endpoint = ''
  Payload = {}

  toJSON() {
    return {
      'm': this.MessageType,
      'i': this.SequenceNumber,
      'n': this.Endpoint,
      'o': JSON.stringify(this.Payload),
    }
  }

  toString() {
    return JSON.stringify(this.toJSON())
  }
}

class WebAuthenticateUser extends WebSocketMessage {
  Endpoint = 'WebAuthenticateUser'
}

const WebSocket = require('ws')

const wsAddress = 'wss://api.foxbit.com.br/'

const ws = new WebSocket(wsAddress)

const wsSend = (data = new WebSocketMessage()) => new Promise((s, f) => ws.send(JSON.stringify(data), s))

ws.on('open', function (ev) {
  console.log('open', { ev })

  wsSend(new WebAuthenticateUser())
    .then(console.log)
    .catch(console.log)
})

ws.on('message', function (ev) {
  const message = JSON.parse(ev.toString())

  console.log({ message })
})

ws.on('error', function (ev) {
  console.log('error', { ev })
})

ws.on('close', function (ev) {
  console.log('close', { ev })
})
