let i = 0

export class FoxbitRequest {
  Side = 'Request'
  Endpoint = null
  Payload = {}
  SequenceNumber = null
  MessageType = null

  constructor(Endpoint, Payload = {}, SequenceNumber = ++i, MessageType = 0) {
    this.Endpoint = Endpoint
    this.Payload = Payload
    this.SequenceNumber = SequenceNumber
    this.MessageType = MessageType
  }

  toJSON() {
    const { Endpoint, Payload, SequenceNumber, MessageType } = this
    return { Endpoint, Payload, SequenceNumber, MessageType }
  }

  toFullJSON() {
    const { Side, Endpoint, Payload, SequenceNumber, MessageType } = this
    return { Side, Endpoint, Payload, SequenceNumber, MessageType }
  }

  toString() {
    return JSON.stringify({
      n: this.Endpoint,
      o: JSON.stringify(this.Payload),
      i: this.SequenceNumber,
      m: this.MessageType,
    })
  }
}

export class FoxbitResponse extends FoxbitRequest {
  Side = 'Response'
  constructor(data) {
    const { m, i, n, o = '{}' } = JSON.parse(data.toString())
    super(n, JSON.parse(o), i, m)
  }
}
