import { Logger } from './logger.js'

export class WebSocketMessage {
  MessageType = 0 // (0_Request / 1_Reply / 2_Subscribe / 3_Event / Error)
  SequenceNumber = 0
  Endpoint = ''
  Payload = {}

  logger = new Logger('WebSocketMessage')

  constructor(json = null) {
    if (!(json === null)) {
      this.fromJSON(json)
    }
  }

  fromMessage({ message_type, sequence_number, Endpoint, payload } = {}) {
    this.MessageType = message_type
    this.SequenceNumber = sequence_number
    // this.Endpoint = Endpoint
    this.Payload = payload
    return this
  }

  fromJSON({ m, i, n, o } = {}) {
    this.MessageType = m
    this.SequenceNumber = i
    this.Endpoint = n
    this.Payload = JSON.parse(o)
    return this
  }

  toJSON() {
    return {
      'm': this.MessageType,
      'i': this.SequenceNumber,
      'n': this.Endpoint,
      'o': JSON.stringify(this.Payload),
    }
  }

  toEvent() {
    const ev = new Event(this.Endpoint)
    ev.message_type = this.MessageType
    ev.sequence_number = this.SequenceNumber
    ev.payload = this.Payload
    return ev
  }

  toString() {
    return JSON.stringify(this.toJSON())
  }
}
