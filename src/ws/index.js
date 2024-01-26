import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

import { FoxbitWS } from './foxbit.js'
import * as messages from './messages.js'
import * as responses from './responses.js'
import { parseResponse } from './utils.js'

class Client {
  socket = null

  constructor(socket) {
    this.socket = socket
  }

  send(response = new responses.FoxbitResponse('')) {
    console.log('response', response)
    this.socket.emit(response.Endpoint, response.toJSON())
  }
}

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, { cors: { origin: '*' } })

io.on('connection', (socket) => {
  console.log('socket', socket.id)
  const foxbit = new FoxbitWS()

  const client = new Client(socket)

  foxbit.ee.addListener('message', (data) => client.send(parseResponse(data)))
  socket.on('AuthenticateUser', (data) => foxbit.send(new messages.AuthenticateUserMessage(data)))
  socket.on('Authenticate2FA', (data) => foxbit.send(new messages.Authenticate2FAMessage(data)))
  socket.on('CancelAllOrders', (data) => foxbit.send(new messages.CancelAllOrdersMessage(data)))
  socket.on('CancelOrder', (data) => foxbit.send(new messages.CancelOrderMessage(data)))
  socket.on('GetAccountInfo', (data) => foxbit.send(new messages.GetAccountInfoMessage(data)))
  socket.on('GetAccountPositions', (data) => foxbit.send(new messages.GetAccountPositionsMessage(data)))
  socket.on('GetAccountTrades', (data) => foxbit.send(new messages.GetAccountTradesMessage(data)))
  socket.on('GetDepositTickets', (data) => foxbit.send(new messages.GetDepositTicketsMessage(data)))
  socket.on('GetInstrument', (data) => foxbit.send(new messages.GetInstrumentMessage(data)))
  socket.on('GetInstruments', (data) => foxbit.send(new messages.GetInstrumentsMessage(data)))
  socket.on('GetOpenOrders', (data) => foxbit.send(new messages.GetOpenOrdersMessage(data)))
  socket.on('GetOrderFee', (data) => foxbit.send(new messages.GetOrderFeeMessage(data)))
  socket.on('GetOrderHistory', (data) => foxbit.send(new messages.GetOrderHistoryMessage(data)))
  socket.on('GetOrderStatus', (data) => foxbit.send(new messages.GetOrderStatusMessage(data)))
  socket.on('GetProducts', (data) => foxbit.send(new messages.GetProductsMessage(data)))
  socket.on('GetL2Snapshot', (data) => foxbit.send(new messages.GetL2SnapshotMessage(data)))
  socket.on('GetTickerHistory', (data) => foxbit.send(new messages.GetTickerHistoryMessage(data)))
  socket.on('GetTradesHistory', (data) => foxbit.send(new messages.GetTradesHistoryMessage(data)))
  socket.on('GetUserInfo', (data) => foxbit.send(new messages.GetUserInfoMessage(data)))
  socket.on('GetUserPermissions', (data) => foxbit.send(new messages.GetUserPermissionsMessage(data)))
  socket.on('GetWithdrawTickets', (data) => foxbit.send(new messages.GetWithdrawTicketsMessage(data)))
  socket.on('Logout', (data) => foxbit.send(new messages.LogoutMessage(data)))
  socket.on('SendOrder', (data) => foxbit.send(new messages.SendOrderMessage(data)))
  socket.on('SubscribeAccountEvents', (data) => foxbit.send(new messages.SubscribeAccountEventsMessage(data)))
  socket.on('SubscribeLevel1', (data) => foxbit.send(new messages.SubscribeLevel1Message(data)))
  socket.on('SubscribeLevel1Markets', (data) => foxbit.send(new messages.SubscribeLevel1MarketsMessage(data)))
  socket.on('SubscribeLevel2', (data) => foxbit.send(new messages.SubscribeLevel2Message(data)))
  socket.on('SubscribeTicker', (data) => foxbit.send(new messages.SubscribeTickerMessage(data)))
  socket.on('SubscribeTrades', (data) => foxbit.send(new messages.SubscribeTradesMessage(data)))
  socket.on('UnsubscribeLevel1', (data) => foxbit.send(new messages.UnsubscribeLevel1Message(data)))
  socket.on('UnsubscribeLevel2', (data) => foxbit.send(new messages.UnsubscribeLevel2Message(data)))
  socket.on('UnsubscribeTicker', (data) => foxbit.send(new messages.UnsubscribeTickerMessage(data)))
  socket.on('UnsubscribeTrades', (data) => foxbit.send(new messages.UnsubscribeTradesMessage(data)))
})

httpServer.listen(80)
