import { AuthenticateUserMessage } from './api/message/authenticate-user.js'

import { AuthenticateUserReply } from './api/reply/authenticate-user.js'

import { WebSocketMessenger } from './messenger.js'

import * as config from './config.js'

export class FoxbitWS extends WebSocketMessenger {
  OMSId = null

  setOMSId(OMSId) {
    this.OMSId = OMSId
    return this
  }
}

const foxbit = new FoxbitWS()

foxbit.send(new AuthenticateUserMessage(config.user))

foxbit.addEventListener('AuthenticateUser', (res) => {
  const user = new AuthenticateUserReply(res)
  foxbit.setOMSId(user.getOMSId())
})
