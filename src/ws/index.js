import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { FoxbitWS } from './foxbit.js'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, { cors: { origin: '*' } })

io.on('connection', (socket) => {
  console.log('socket', socket.id)

  const foxbit = new FoxbitWS()

  socket.on('AuthenticateUser', (data) => {
    console.log('AuthenticateUser', data)
    // foxbit.send(new AuthenticateUserMessage())
  })

  socket.on('Authenticate2FA', (data) => {
    console.log('Authenticate2FA', data)
    // foxbit.send(new Authenticate2FAMessage())
  })

  socket.on('CancelAllOrders', (data) => {
    console.log('CancelAllOrders', data)
    // foxbit.send(new CancelAllOrdersMessage())
  })

  socket.on('CancelOrder', (data) => {
    console.log('CancelOrder', data)
    // foxbit.send(new CancelOrderMessage())
  })

  socket.on('GetAccountInfo', (data) => {
    console.log('GetAccountInfo', data)
    // foxbit.send(new GetAccountInfoMessage())
  })

  socket.on('GetAccountPositions', (data) => {
    console.log('GetAccountPositions', data)
    // foxbit.send(new GetAccountPositionsMessage())
  })

  socket.on('GetAccountTrades', (data) => {
    console.log('GetAccountTrades', data)
    // foxbit.send(new GetAccountTradesMessage())
  })

  socket.on('GetDepositTickets', (data) => {
    console.log('GetDepositTickets', data)
    // foxbit.send(new GetDepositTicketsMessage())
  })

  socket.on('GetInstrument', (data) => {
    console.log('GetInstrument', data)
    // foxbit.send(new GetInstrumentMessage())
  })

  socket.on('GetInstruments', (data) => {
    console.log('GetInstruments', data)
    // foxbit.send(new GetInstrumentsMessage())
  })

  socket.on('GetOpenOrders', (data) => {
    console.log('GetOpenOrders', data)
    // foxbit.send(new GetOpenOrdersMessage())
  })

  socket.on('GetOrderFee', (data) => {
    console.log('GetOrderFee', data)
    // foxbit.send(new GetOrderFeeMessage())
  })

  socket.on('GetOrderHistory', (data) => {
    console.log('GetOrderHistory', data)
    // foxbit.send(new GetOrderHistoryMessage())
  })

  socket.on('GetOrderStatus', (data) => {
    console.log('GetOrderStatus', data)
    // foxbit.send(new GetOrderStatusMessage())
  })

  socket.on('GetProducts', (data) => {
    console.log('GetProducts', data)
    // foxbit.send(new GetProductsMessage())
  })

  socket.on('GetL2Snapshot', (data) => {
    console.log('GetL2Snapshot', data)
    // foxbit.send(new GetL2SnapshotMessage())
  })

  socket.on('GetTickerHistory', (data) => {
    console.log('GetTickerHistory', data)
    // foxbit.send(new GetTickerHistoryMessage())
  })

  socket.on('GetTradesHistory', (data) => {
    console.log('GetTradesHistory', data)
    // foxbit.send(new GetTradesHistoryMessage())
  })

  socket.on('GetUserInfo', (data) => {
    console.log('GetUserInfo', data)
    // foxbit.send(new GetUserInfoMessage())
  })

  socket.on('GetUserPermissions', (data) => {
    console.log('GetUserPermissions', data)
    // foxbit.send(new GetUserPermissionsMessage())
  })

  socket.on('GetWithdrawTickets', (data) => {
    console.log('GetWithdrawTickets', data)
    // foxbit.send(new GetWithdrawTicketsMessage())
  })

  socket.on('Logout', (data) => {
    console.log('Logout', data)
    // foxbit.send(new LogoutMessage())
  })

  socket.on('SendOrder', (data) => {
    console.log('SendOrder', data)
    // foxbit.send(new SendOrderMessage())
  })

  socket.on('SubscribeAccountEvents', (data) => {
    console.log('SubscribeAccountEvents', data)
    // foxbit.send(new SubscribeAccountEventsMessage())
  })

  socket.on('SubscribeLevel1', (data) => {
    console.log('SubscribeLevel1', data)
    // foxbit.send(new SubscribeLevel1Message())
  })

  socket.on('SubscribeLevel1Markets', (data) => {
    console.log('SubscribeLevel1Markets', data)
    // foxbit.send(new SubscribeLevel1MarketsMessage())
  })

  socket.on('SubscribeLevel2', (data) => {
    console.log('SubscribeLevel2', data)
    // foxbit.send(new SubscribeLevel2Message())
  })

  socket.on('SubscribeTicker', (data) => {
    console.log('SubscribeTicker', data)
    // foxbit.send(new SubscribeTickerMessage())
  })

  socket.on('SubscribeTrades', (data) => {
    console.log('SubscribeTrades', data)
    // foxbit.send(new SubscribeTradesMessage())
  })

  socket.on('UnsubscribeLevel1', (data) => {
    console.log('UnsubscribeLevel1', data)
    // foxbit.send(new UnsubscribeLevel1Message())
  })

  socket.on('UnsubscribeLevel2', (data) => {
    console.log('UnsubscribeLevel2', data)
    // foxbit.send(new UnsubscribeLevel2Message())
  })

  socket.on('UnsubscribeTicker', (data) => {
    console.log('UnsubscribeTicker', data)
    // foxbit.send(new UnsubscribeTickerMessage())
  })

  socket.on('UnsubscribeTrades', (data) => {
    console.log('UnsubscribeTrades', data)
    // foxbit.send(new UnsubscribeTradesMessage())
  })
})

httpServer.listen(80)
