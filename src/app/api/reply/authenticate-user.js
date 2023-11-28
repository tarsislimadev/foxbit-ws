import { Reply } from '../reply.js'

export class AuthenticateUserReply extends Reply {
  getOMSId() {
    return this.Payload?.User?.OMSId
  }
}
