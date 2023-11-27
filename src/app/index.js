const {
  AuthenticateUserMessage,
  AuthenticateUserReply,

  GetAccountInfoMessage,
  GetAccountInfoReply,

  GetUserInfoMessage,
  GetUserInfoReply,
} = require('./api')

const { WebSocketMessenger } = require('./messenger')

const config = require('./config')

class FoxbitWS extends WebSocketMessenger {
  OMSId = null

  setOMSId(OMSId) {
    this.OMSId = OMSId
  }
}

const foxbit = new FoxbitWS()

foxbit.send(new AuthenticateUserMessage(config.user.id))

foxbit.addEventListener('AuthenticateUser', (res) => {
  const user = new AuthenticateUserReply(res)
  foxbit.setOMSId(user.getOMSId())
  foxbit.dispatchLog('AuthenticateUser', user)
  foxbit.send(new GetAccountInfoMessage(foxbit.OMSId, +config.user.id))
  foxbit.send(new GetUserInfoMessage())
})

foxbit.addEventListener('GetAccountInfo', (res) => {
  const info = new GetAccountInfoReply(res)
  foxbit.dispatchLog('GetAccountInfo', info)
})
