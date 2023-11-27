const {
  AuthenticateUserMessage,
  GetAccountPositionsMessage,
  GetOrderHistoryMessage,
  GetTickerHistoryMessage,
  GetTradesHistoryMessage,
  //
  AuthenticateUserReply,
  GetAccountPositionsReply,
  GetOrderHistoryReply,
  GetTickerHistoryReply,
  GetTradesHistoryReply,
} = require('./api')

const db = require('./database')

const { WebSocketMessenger } = require('./messenger')

const config = require('./config')

class FoxbitWS extends WebSocketMessenger {
  OMSId = null

  setOMSId(OMSId) {
    this.OMSId = OMSId
    return this
  }
}

const foxbit = new FoxbitWS()

foxbit.send(new AuthenticateUserMessage(config.user_id))

foxbit.addEventListener('AuthenticateUser', (res) => {
  const user = new AuthenticateUserReply(res)
  foxbit.setOMSId(user.getOMSId())
  foxbit.send(new GetAccountPositionsMessage())
  foxbit.send(new GetOrderHistoryMessage())
  foxbit.send(new GetTickerHistoryMessage())
  foxbit.send(new GetTradesHistoryMessage())
})

foxbit.addEventListener('GetAccountPositions', (res) => {
  foxbit.dispatchLog('GetAccountPositions', new GetAccountPositionsReply(res))
})

foxbit.addEventListener('GetOrderHistory', (res) => {
  foxbit.dispatchLog('GetOrderHistory', new GetOrderHistoryReply(res))
})

foxbit.addEventListener('GetTickerHistory', (res) => {
  foxbit.dispatchLog('GetTickerHistory', new GetTickerHistoryReply(res))
})

foxbit.addEventListener('GetTradesHistory', (res) => {
  foxbit.dispatchLog('GetTradesHistory', new GetTradesHistoryReply(res))
})
