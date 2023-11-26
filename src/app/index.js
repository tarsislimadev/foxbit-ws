const { AuthenticateUserMessage } = require('./api/message/index.js')

const { AuthenticateUserReply } = require('./api/reply/index.js')

const { WebSocketMessenger } = require('./messenger')

const config = require('./config')

class FoxbitWS extends WebSocketMessenger { }

const foxbit = new FoxbitWS()

foxbit.send(new AuthenticateUserMessage(config.user.id))

foxbit.addEventListener('AuthenticateUser', (res) => {
  console.log('AuthenticateUser', new AuthenticateUserReply(res))
})
