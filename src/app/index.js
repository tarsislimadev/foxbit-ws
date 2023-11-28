import { AuthenticateUserMessage } from './api/message/authenticate-user.js'
import { AuthenticateUserReply } from './api/reply/authenticate-user.js'

import { FoxbitWS } from './foxbit.js'
import * as config from './config.js'

const foxbit = new FoxbitWS()
foxbit.send(new AuthenticateUserMessage(config.user))

foxbit.addEventListener('AuthenticateUser', (res) => {
  const user = new AuthenticateUserReply(res)
  foxbit.setOMSId(user.getOMSId())
})
