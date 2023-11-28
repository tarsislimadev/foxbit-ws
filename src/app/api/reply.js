import { Message } from './message.js'

export class Reply extends Message {
  constructor(response) {
    super()

    this.fromMessage(response)
  }
}

export default { Reply }
