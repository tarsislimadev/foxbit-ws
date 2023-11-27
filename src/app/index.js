const {
  AuthenticateUserMessage,
  AuthenticateUserReply,
  GetAccountPositionsMessage,
  GetAccountPositionsReply,
} = require('./api')

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
})

foxbit.addEventListener('GetAccountPositions', (res) => {
  const positions = new GetAccountPositionsReply(res)
  foxbit.dispatchLog('Amount[BTC]', positions.getAmount('BTC'))
  foxbit.dispatchLog('Amount[BRL]', positions.getAmount('BRL'))
})
