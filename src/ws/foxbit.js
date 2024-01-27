import { APIKey, UserId, APISecret } from './config.js'

import { createHmac } from 'crypto'

let i = 0

export const HmacSHA256 = (APIKey, Nonce, UserId) => createHmac('sha256', APISecret).update(Nonce + UserId + APIKey, APISecret).digest('hex').toString()

export const AuthenticateUserRequest = ({ Endpoint, Payload = {}, SequenceNumber = ++i, MessageType = 0 }) => {
  const Nonce = Date.now()
  const Signature = HmacSHA256(APIKey, Nonce, UserId)
  return ({ Endpoint, Payload: { APIKey, Nonce, UserId, Signature, }, SequenceNumber, MessageType })
}

export const switchRequest = ({ Endpoint, Payload = {}, SequenceNumber = ++i, MessageType = 0 }) => {
  switch (Endpoint) {
    case 'AuthenticateUser': return AuthenticateUserRequest({ Endpoint, Payload, SequenceNumber, MessageType })
  }

  return ({ Endpoint, Payload, SequenceNumber, MessageType })
}

export const toRequest = ({ Endpoint, Payload = {}, SequenceNumber = ++i, MessageType = 0 }) => JSON.stringify({
  m: MessageType,
  i: SequenceNumber,
  n: Endpoint,
  o: JSON.stringify(Payload),
})

export const fromRequest = ({ m, i, n, o = '{}' }) => ({
  MessageType: m,
  SequenceNumber: i,
  Endpoint: n,
  Payload: JSON.parse(o),
})

export const fromResponse = (data) => fromRequest(JSON.parse(data.toString()))
