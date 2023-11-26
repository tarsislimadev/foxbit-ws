const { AuthenticateUser, GetAccountInfo } = require('./models')

const { WebSocketMessenger } = require('./messenger')

class FoxbitWS extends WebSocketMessenger { }

const foxbit = new FoxbitWS()

foxbit.send(new AuthenticateUser())

foxbit.addEventListener('AuthenticateUser', () => foxbit.send(new GetAccountInfo()))

foxbit.addEventListener('GetAccountInfo', console.log)
