const { Message } = require('./message')

class Reply extends Message {
  constructor(response) {
    super()

    this.fromMessage(response)
  }
}

module.exports = { Reply }
