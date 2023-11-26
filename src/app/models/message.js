
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

module.exports = { WebSocketMessage }
