import { WebSocketMessage } from '../../websocket/message.js'
import { createSignature } from '../../utils/sha.js'

export class AuthenticateUserMessage extends WebSocketMessage {
  Endpoint = 'AuthenticateUser'

  constructor(UserId, APIKey, APISecret, Nonce = Date.now()) {
    super()

    const Signature = createSignature(Nonce, UserId, APIKey, APISecret)
    this.Payload = { APIKey, Nonce, UserId, Signature }
  }
}
