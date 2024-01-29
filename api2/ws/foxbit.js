import { APIKey, UserId, APISecret } from './config.js'
import { createHmac } from 'crypto'

let GlobalSequenceNumber = 0
let ClientOrderId = 0

export const AuthenticateUserRequest = ({ Endpoint, SequenceNumber, MessageType }) => {
  const Nonce = Date.now()
  const Signature = createHmac('sha256', APISecret).update(Nonce + UserId + APIKey, APISecret).digest('hex').toString()
  return ({ Endpoint, Payload: { APIKey, Nonce, UserId, Signature }, SequenceNumber, MessageType })
}

export const GetOpenOrdersRequest = ({ Endpoint, Payload: { }, SequenceNumber, MessageType }) => {
  return ({ Endpoint, Payload: { OMSId: 1, AccountId: UserId }, SequenceNumber, MessageType })
}

export const GetTradesHistoryRequest = ({ Endpoint, Payload: { omsId = 1, accountId = UserId, instrumentId, tradeId, orderId, userId = userId, startTimeStamp, endTimeStamp, depth, startIndex, executionId, }, SequenceNumber, MessageType }) => {
  return ({ Endpoint, Payload: { omsId, accountId, instrumentId, tradeId, orderId, userId, startTimeStamp, endTimeStamp, depth, startIndex, executionId }, SequenceNumber, MessageType })
}

export const SendOrderRequest = ({ Endpoint, Payload: { InstrumentId, Side, Quantity }, SequenceNumber, MessageType }) => {
  return ({ Endpoint, Payload: { OMSId: 1, InstrumentId, AccountId: UserId, TimeInForce: 1, ClientOrderId: ++ClientOrderId, OrderIdOCO: 0, UseDisplayQuantity: false, Side, Quantity, OrderType: 1, PegPriceType: 4, LimitPrice: null, }, SequenceNumber, MessageType })
}

export const GetAccountInfoRequest = ({ Endpoint, Payload: { }, SequenceNumber, MessageType }) => {
  return ({ Endpoint, Payload: { OMSId: 1, AccountId: UserId }, SequenceNumber, MessageType })
}

export const switchRequest = ({ Endpoint, Payload = {}, SequenceNumber = ++GlobalSequenceNumber, MessageType = 0 }) => {
  switch (Endpoint) {
    case 'AuthenticateUser': return AuthenticateUserRequest({ Endpoint, Payload, SequenceNumber, MessageType })
    case 'GetOpenOrders': return GetOpenOrdersRequest({ Endpoint, Payload, SequenceNumber, MessageType })
    case 'GetTradesHistory': return GetTradesHistoryRequest({ Endpoint, Payload, SequenceNumber, MessageType })
    case 'SendOrder': return SendOrderRequest({ Endpoint, Payload, SequenceNumber, MessageType })
    case 'GetAccountInfo': return GetAccountInfoRequest({ Endpoint, Payload, SequenceNumber, MessageType })
  }

  return ({ Endpoint, Payload, SequenceNumber, MessageType })
}

export const toRequest = ({ Endpoint, Payload = {}, SequenceNumber = ++GlobalSequenceNumber, MessageType = 0 }) => JSON.stringify({
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
