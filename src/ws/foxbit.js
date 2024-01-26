import { WebSocket } from 'ws'
const wsAddress = 'wss://api.foxbit.com.br/'

export class FoxbitMessage {
  m = 0 // MessageType ( 0_Request / 1_Reply / 2_Subscribe / 3_Event / 4_Unsubscribe / Error )
  i = 0 // Sequence Number
  n = '' // Function Name
  o = '' // Payload
}

export class FoxbitWS {
  authenticated = false
  side = 1
  userLogin = ''
  userPass = ''
  userId = '0'

  sessionToken = ''
  stdin2FA = process.openStdin()
  ws = new WebSocket(wsAddress)

  events = []

  constructor() {
    this.setEvents()
  }

  setEvents() {
    this.ws.on('open', () => this.runEvents('open'))
    this.ws.on('message', () => this.runEvents('message'))
    this.ws.on('error', () => this.runEvents('error'))
    this.ws.on('close', () => this.runEvents('close'))
    this.ws.on('end', () => this.runEvents('end'))
  }

  runEvents(name) {
    this.events.filter((ev) => ev.name == name).map((ev) => ev.fn())
  }

  AskPrompt(message) {
    const self = this
    self.log(message)
    return new Promise((s) => self.stdin2FA.addListener('data', (d) => s(d.toString().trim())))
  }

  log(...messages) {
    console.log(...messages)
  }

  send(message = new FoxbitMessage()) {
    console.log('message', message.toJSON())
  }
}
