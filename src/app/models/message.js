
class WebSocketMessage {
  MessageType = 0 // (0_Request / 1_Reply / 2_Subscribe / 3_Event / Error)
  SequenceNumber = 0
  Endpoint = ''
  Payload = {}

  constructor(message = null) {
    if (!(message === null)) {
      this.fromJSON(message)
    }
  }

  fromJSON({ m, i, n, o } = {}) {
    this.MessageType = m
    this.SequenceNumber = i
    this.Endpoint = n
    this.Payload = JSON.parse(o)
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

module.exports = { WebSocketMessage }
