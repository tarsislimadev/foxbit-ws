import { WebSocketError } from '../../websocket/error.js'
import { createSignature } from '../../utils/sha.js'

export class AuthenticateUserError extends  WebSocketError  {
  Endpoint = 'AuthenticateUser'

  constructor(UserId, APIKey, APISecret, Nonce = Date.now()) {
    super()

    const Signature = createSignature(Nonce, UserId, APIKey, APISecret)
    this.Payload = { APIKey, Nonce, UserId, Signature }
  }
}
